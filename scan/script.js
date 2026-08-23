// INITIALIZE GLOBALS
let faceMesh, camera;

const MEDIAPIPE_FACE_MESH_VERSION = window.MEDIAPIPE_FACE_MESH_VERSION || '0.4.1633559619';
const MEDIAPIPE_FACE_MESH_BASE_URL = `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@${MEDIAPIPE_FACE_MESH_VERSION}`;
const FACE_MESH_OPTIONS = {
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
};
const FACE_MESH_WARMUP_DELAY_MS = 1600;
const FACE_MESH_WARMUP_RETRY_DELAY_MS = 1800;
const FACE_MESH_WARMUP_MAX_ATTEMPTS = 2;
const FACE_MESH_TARGET_FPS = 15;
const FACE_MESH_MIN_FRAME_INTERVAL_MS = 1000 / FACE_MESH_TARGET_FPS;
const REGION_ANALYSIS_TARGET_FPS = 4;
const REGION_ANALYSIS_MIN_INTERVAL_MS = 1000 / REGION_ANALYSIS_TARGET_FPS;
const ACTIVE_SCAN_LOG_INTERVAL = 10000;
const BIOMETRIC_PLACEHOLDERS = Object.freeze({
    bpm: 72,
    respiration: 16,
    blinkRate: 0
});
let faceMeshWarmupScheduled = false;
let faceMeshWarmupPromise = null;
let faceMeshWarmupRunning = false;
let faceMeshWarmupComplete = false;
let faceMeshWarmupError = null;
let faceMeshWarmupAttemptCount = 0;
let lastFaceMeshSendPerf = 0;
let faceMeshSkippedFrameCount = 0;
let lastRegionAnalysisPerf = 0;
let regionAnalysisSkippedFrameCount = 0;

// ─── DIAGNOSTIC LOGGER ────────────────────────────────────────────────────────
const LOG_ENTRIES = []; // accumulates every entry for the current scan session
const DIAGNOSTIC_SESSION_ID = `scan_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const LOG = (() => {
    const t0 = Date.now();
    const elapsedMs = () => Date.now() - t0;
    const ts = () => `+${(elapsedMs() / 1000).toFixed(2)}s`;
    const S = {
        title: 'color:#6c63ff;font-weight:bold;font-size:13px',
        ok:    'color:#00d4aa;font-weight:bold',
        warn:  'color:#ff9933;font-weight:bold',
        err:   'color:#ff4c4c;font-weight:bold',
        data:  'color:#aaddff',
        dim:   'color:#888',
        stub:  'background:#ff4c4c;color:#fff;font-weight:bold;padding:2px 6px;border-radius:3px',
    };

    function push(level, msg, data) {
        LOG_ENTRIES.push({
            elapsed: elapsedMs(),
            wallTime: new Date().toISOString(),
            level,
            msg,
            ...(data !== undefined ? { data } : {})
        });
    }

    return {
        section(label) {
            push('SECTION', label);
            console.log(`%c▶ [${ts()}] ${label}`, S.title);
        },
        ok(msg, data) {
            push('OK', msg, data);
            data !== undefined
                ? console.log(`%c  ✓ [${ts()}] ${msg}`, S.ok, data)
                : console.log(`%c  ✓ [${ts()}] ${msg}`, S.ok);
        },
        warn(msg, data) {
            push('WARN', msg, data);
            data !== undefined
                ? console.warn(`%c  ⚠ [${ts()}] ${msg}`, S.warn, data)
                : console.warn(`%c  ⚠ [${ts()}] ${msg}`, S.warn);
        },
        err(msg, data) {
            push('ERROR', msg, data);
            data !== undefined
                ? console.error(`%c  ✗ [${ts()}] ${msg}`, S.err, data)
                : console.error(`%c  ✗ [${ts()}] ${msg}`, S.err);
        },
        info(msg, data) {
            push('INFO', msg, data);
            data !== undefined
                ? console.log(`%c  • [${ts()}] ${msg}`, S.data, data)
                : console.log(`%c  • [${ts()}] ${msg}`, S.data);
        },
        dim(msg) {
            push('TRACE', msg);
            console.log(`%c    ${msg}`, S.dim);
        },
        table(label, obj) {
            push('TABLE', label, obj);
            console.log(`%c  ► ${label}`, S.data);
            console.table(obj);
        },
        stub(msg) {
            push('STUB', msg);
            console.log(`%c STUB DATA `, S.stub, msg);
        },
        group(label, fn) {
            push('GROUP_START', label);
            console.groupCollapsed(`[${ts()}] ${label}`);
            fn();
            console.groupEnd();
        },
    };
})();

const GA_MEASUREMENT_ID = 'G-QR2SPD4MZM';
const ANALYTICS_UI_VERSION = '2026_05_24';
let analyticsSessionStage = 'home';
let analyticsLastEngagementAt = Date.now();
let analyticsCameraPermissionTracked = false;
let analyticsFirstFaceTracked = false;
let analyticsScanStartedTracked = false;

function sanitizeAnalyticsText(value, fallback = 'unknown') {
    const normalized = String(value ?? fallback)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_ -]+/g, '')
        .replace(/\s+/g, '_')
        .slice(0, 95);
    return normalized || fallback;
}

function getAnalyticsEngagementMs() {
    const now = Date.now();
    const elapsed = Math.max(1, now - analyticsLastEngagementAt);
    analyticsLastEngagementAt = now;
    return Math.min(elapsed, 600000);
}

function getDeviceCategory() {
    const width = window.innerWidth || 0;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

function getViewportBucket() {
    const width = window.innerWidth || 0;
    if (width < 390) return 'xs';
    if (width < 768) return 'mobile';
    if (width < 1200) return 'tablet_desktop';
    return 'wide';
}

function getVideoResolutionBucket(width, height) {
    const maxEdge = Math.max(Number(width) || 0, Number(height) || 0);
    if (maxEdge >= 1920) return '1080p_plus';
    if (maxEdge >= 1280) return '720p_plus';
    if (maxEdge > 0) return 'sub_720p';
    return 'unknown';
}

function getScoreBucket(score) {
    const value = Number(score);
    if (!Number.isFinite(value)) return 'unknown';
    if (value < 50) return '0_49';
    if (value < 65) return '50_64';
    if (value < 80) return '65_79';
    if (value < 90) return '80_89';
    return '90_100';
}

function getCountBucket(count) {
    const value = Number(count);
    if (!Number.isFinite(value) || value <= 0) return '0';
    if (value <= 2) return '1_2';
    if (value <= 4) return '3_4';
    return '5_plus';
}

function getCameraPermissionResult(error) {
    const name = String(error?.name || '').toLowerCase();
    const message = String(error?.message || error || '').toLowerCase();
    if (name.includes('notallowed') || name.includes('security') || message.includes('permission')) return 'denied';
    if (name.includes('notfound')) return 'no_camera';
    if (name.includes('notreadable') || name.includes('abort')) return 'unavailable';
    if (name.includes('overconstrained')) return 'unsupported';
    return 'error';
}

function cleanAnalyticsParams(params = {}) {
    const common = {
        app_area: 'face_scanner',
        source_page: 'scan',
        ui_version: ANALYTICS_UI_VERSION,
        session_stage: analyticsSessionStage,
        device_category: getDeviceCategory(),
        viewport_bucket: getViewportBucket(),
        camera_supported: navigator.mediaDevices?.getUserMedia ? 'yes' : 'no',
        engagement_time_msec: getAnalyticsEngagementMs()
    };
    const cleaned = {};
    Object.entries({ ...common, ...params }).slice(0, 25).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') return;
        const safeKey = String(key).replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 40);
        if (!safeKey) return;
        if (typeof value === 'number') {
            if (Number.isFinite(value)) cleaned[safeKey] = Math.round(value);
        } else if (typeof value === 'boolean') {
            cleaned[safeKey] = value ? 'yes' : 'no';
        } else {
            cleaned[safeKey] = String(value).slice(0, 100);
        }
    });
    return cleaned;
}

function trackAnalyticsEvent(name, params = {}) {
    if (typeof window.gtag !== 'function') return;
    try {
        window.gtag('event', String(name).slice(0, 40), cleanAnalyticsParams(params));
    } catch (_) {}
}

function trackAnalyticsStage(stage, eventName, params = {}) {
    analyticsSessionStage = sanitizeAnalyticsText(stage);
    trackAnalyticsEvent(eventName, { ...params, session_stage: analyticsSessionStage });
}

function getGtagValue(field, timeoutMs = 600) {
    return new Promise(resolve => {
        if (typeof window.gtag !== 'function') {
            resolve(null);
            return;
        }
        let settled = false;
        const done = (value) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            resolve(value || null);
        };
        const timer = setTimeout(() => done(null), timeoutMs);
        try {
            window.gtag('get', GA_MEASUREMENT_ID, field, done);
        } catch (_) {
            done(null);
        }
    });
}

function readGaClientIdFromCookie() {
    const match = document.cookie.match(/(?:^|;\s*)_ga=GA\d+\.\d+\.(\d+\.\d+)/);
    return match ? match[1] : null;
}

async function getAnalyticsContextForBackend() {
    const [clientId, sessionId] = await Promise.all([
        getGtagValue('client_id'),
        getGtagValue('session_id')
    ]);
    const normalizedSessionId = String(sessionId || '').match(/^\d+$/) ? Number(sessionId) : null;
    return {
        client_id: String(clientId || readGaClientIdFromCookie() || '').slice(0, 100),
        session_id: normalizedSessionId,
        session_stage: analyticsSessionStage,
        engagement_time_msec: getAnalyticsEngagementMs(),
        device_category: getDeviceCategory(),
        viewport_bucket: getViewportBucket()
    };
}

function trackCameraFirstFrame() {
    if (analyticsCameraPermissionTracked) return;
    analyticsCameraPermissionTracked = true;
    const startupMs = STARTUP_DIAG.clickPerf ? perfDelta(STARTUP_DIAG.clickPerf) : null;
    trackAnalyticsEvent('camera_permission_result', {
        permission_result: 'granted',
        startup_ms: startupMs
    });
    trackAnalyticsEvent('camera_first_frame', {
        startup_ms: startupMs,
        video_resolution: getVideoResolutionBucket(video.videoWidth, video.videoHeight)
    });
}

function getSelectedConfirmationRegionCount() {
    return regionImagesGrid
        ? regionImagesGrid.querySelectorAll('input[type="checkbox"]:checked').length
        : 0;
}

function getDiagnosisMarkerCount(diagnosis) {
    return Array.isArray(diagnosis?.region_markers) ? diagnosis.region_markers.length : 0;
}

function observeAnalyticsOnce(element, eventName, params = {}) {
    if (!element) return;
    let sent = false;
    const send = () => {
        if (sent) return;
        sent = true;
        trackAnalyticsEvent(eventName, params);
    };
    if (!('IntersectionObserver' in window)) {
        setTimeout(send, 1200);
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.25)) {
            observer.disconnect();
            send();
        }
    }, { threshold: [0.25] });
    observer.observe(element);
}

async function sendLogToServer(scanMeta) {
    try {
        const payload = { scanMeta, entries: LOG_ENTRIES };
        let res;
        try {
            res = await fetch('https://face3layerscanner.onrender.com/scan-log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (_) {
            res = await fetch('/scan-log/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        }
        const json = await res.json();
        if (json.success) {
            LOG.ok('Log saved to server', { filename: json.filename });
            return json.filename;
        }
    } catch (e) {
        LOG.warn('Could not send log to server — download only', e.message);
    }
    return null;
}

const STARTUP_DIAG = {
    sessionId: DIAGNOSTIC_SESSION_ID,
    pageLoadedPerf: typeof performance !== 'undefined' ? performance.now() : 0,
    clickPerf: null,
    rafCameraStartPerf: null,
    cameraStartInvokedPerf: null,
    cameraStartResolvedPerf: null,
    firstVideoLoadedMetadataPerf: null,
    firstVideoCanPlayPerf: null,
    firstVideoPlayingPerf: null,
    firstOnFramePerf: null,
    firstFaceMeshSendStartPerf: null,
    firstFaceMeshSendResolvedPerf: null,
    firstFaceMeshSendErrorPerf: null,
    firstOnResultsPerf: null,
    firstNoFaceResultsPerf: null,
    firstFaceDetectedPerf: null,
    stabilizationCompletePerf: null,
    faceMeshWarmupScheduledPerf: null,
    faceMeshWarmupStartPerf: null,
    faceMeshWarmupResolvedPerf: null,
    faceMeshWarmupErrorPerf: null,
    faceMeshWarmupRetryScheduledPerf: null,
    faceMeshSendCount: 0,
    onResultsCount: 0,
    noFaceResultsCount: 0,
    flushes: []
};

const STARTUP_DIAG_TIMERS = [];

function perfDelta(from, to = performance.now()) {
    return Number.isFinite(from) && Number.isFinite(to) ? Math.round(to - from) : null;
}

function resetStartupDiagnosticsForRun() {
    [
        'clickPerf',
        'rafCameraStartPerf',
        'cameraStartInvokedPerf',
        'cameraStartResolvedPerf',
        'firstVideoLoadedMetadataPerf',
        'firstVideoCanPlayPerf',
        'firstVideoPlayingPerf',
        'firstOnFramePerf',
        'firstFaceMeshSendStartPerf',
        'firstFaceMeshSendResolvedPerf',
        'firstFaceMeshSendErrorPerf',
        'firstOnResultsPerf',
        'firstNoFaceResultsPerf',
        'firstFaceDetectedPerf',
        'stabilizationCompletePerf'
    ].forEach(key => {
        STARTUP_DIAG[key] = null;
    });
    STARTUP_DIAG.faceMeshSendCount = 0;
    STARTUP_DIAG.onResultsCount = 0;
    STARTUP_DIAG.noFaceResultsCount = 0;
    STARTUP_DIAG.flushes = [];
    lastFaceMeshSendPerf = 0;
    faceMeshSkippedFrameCount = 0;
    lastRegionAnalysisPerf = 0;
    regionAnalysisSkippedFrameCount = 0;
    while (STARTUP_DIAG_TIMERS.length) clearTimeout(STARTUP_DIAG_TIMERS.pop());
}

function getResourceDiagnostics() {
    if (!performance?.getEntriesByType) return [];
    const interesting = /mediapipe|face_mesh|camera_utils|drawing_utils|wasm|binarypb|packed_assets|\.data|\.tflite|script\.js|style\.css/i;
    return performance.getEntriesByType('resource')
        .filter(r => interesting.test(r.name))
        .map(r => ({
            name: r.name.split('/').slice(-1)[0] || r.name,
            url: r.name,
            start_ms: Math.round(r.startTime),
            duration_ms: Math.round(r.duration),
            transfer_bytes: Math.round(r.transferSize || 0),
            encoded_bytes: Math.round(r.encodedBodySize || 0),
            decoded_bytes: Math.round(r.decodedBodySize || 0),
            initiator: r.initiatorType
        }));
}

function getStartupDiagnostics(phase) {
    const now = performance.now();
    const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection || {};
    return {
        diagnostic_session_id: DIAGNOSTIC_SESSION_ID,
        phase,
        url: location.href,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        viewport: { width: window.innerWidth, height: window.innerHeight, dpr: window.devicePixelRatio || 1 },
        page: {
            secureContext: window.isSecureContext,
            visibilityState: document.visibilityState,
            hasFocus: document.hasFocus(),
            mediaDevices: !!navigator.mediaDevices?.getUserMedia
        },
        connection: {
            effectiveType: connection.effectiveType || null,
            downlink: connection.downlink || null,
            rtt: connection.rtt || null,
            saveData: connection.saveData || false
        },
        startup: {
            ...STARTUP_DIAG,
            flushes: STARTUP_DIAG.flushes.map(f => ({ ...f })),
            click_to_now_ms: perfDelta(STARTUP_DIAG.clickPerf, now),
            click_to_camera_start_invoked_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.cameraStartInvokedPerf),
            click_to_camera_start_resolved_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.cameraStartResolvedPerf),
            click_to_first_video_metadata_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstVideoLoadedMetadataPerf),
            click_to_first_on_frame_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstOnFramePerf),
            click_to_first_facemesh_send_start_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstFaceMeshSendStartPerf),
            click_to_first_facemesh_send_resolved_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstFaceMeshSendResolvedPerf),
            click_to_first_results_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstOnResultsPerf),
            click_to_first_no_face_results_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstNoFaceResultsPerf),
            click_to_first_face_detected_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstFaceDetectedPerf),
            click_to_stabilization_complete_ms: perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.stabilizationCompletePerf),
            page_to_warmup_start_ms: perfDelta(STARTUP_DIAG.pageLoadedPerf, STARTUP_DIAG.faceMeshWarmupStartPerf),
            page_to_warmup_resolved_ms: perfDelta(STARTUP_DIAG.pageLoadedPerf, STARTUP_DIAG.faceMeshWarmupResolvedPerf),
            warmup_resolved_before_click_ms: perfDelta(STARTUP_DIAG.faceMeshWarmupResolvedPerf, STARTUP_DIAG.clickPerf)
        },
        app_state: {
            faceMeshReady: !!faceMesh,
            cameraReady: !!camera,
            faceMeshWarmupScheduled,
            faceMeshWarmupRunning,
            faceMeshWarmupComplete,
            faceMeshWarmupAttemptCount,
            faceMeshTargetFps: FACE_MESH_TARGET_FPS,
            faceMeshSkippedFrameCount,
            regionAnalysisTargetFps: REGION_ANALYSIS_TARGET_FPS,
            regionAnalysisSkippedFrameCount,
            faceMeshWarmupError: faceMeshWarmupError ? {
                name: faceMeshWarmupError.name || 'WarmupError',
                message: faceMeshWarmupError.message || String(faceMeshWarmupError)
            } : null,
            isAnalyzing,
            scanStartTime,
            stabilizationFrames,
            lostFrames,
            firstFaceLogged: _firstFaceLogged,
            captureGateState
        },
        video_state: {
            readyState: video?.readyState,
            paused: video?.paused,
            ended: video?.ended,
            videoWidth: video?.videoWidth || 0,
            videoHeight: video?.videoHeight || 0,
            clientWidth: video?.clientWidth || 0,
            clientHeight: video?.clientHeight || 0,
            hasStream: !!video?.srcObject,
            tracks: video?.srcObject ? [...video.srcObject.getTracks()].map(t => ({
                kind: t.kind,
                readyState: t.readyState,
                enabled: t.enabled,
                muted: t.muted,
                label: t.label || null,
                settings: typeof t.getSettings === 'function' ? t.getSettings() : null
            })) : []
        },
        resources: getResourceDiagnostics()
    };
}

function flushStartupDiagnostics(phase) {
    STARTUP_DIAG.flushes.push({ phase, perf: Math.round(performance.now()) });
    LOG.info(`Diagnostic checkpoint: ${phase}`, getStartupDiagnostics(phase));
    sendLogToServer({
        diagnostic: true,
        diagnostic_session_id: DIAGNOSTIC_SESSION_ID,
        phase,
        startup_diagnostics: getStartupDiagnostics(phase)
    });
}

function scheduleStartupDiagnostics() {
    while (STARTUP_DIAG_TIMERS.length) clearTimeout(STARTUP_DIAG_TIMERS.pop());
    [3000, 8000, 15000, 30000].forEach(ms => {
        const timer = setTimeout(() => {
            if (STARTUP_DIAG.clickPerf && !STARTUP_DIAG.firstFaceDetectedPerf) {
                flushStartupDiagnostics(`startup_checkpoint_${ms}ms_no_face_yet`);
            }
        }, ms);
        STARTUP_DIAG_TIMERS.push(timer);
    });
}

function downloadLogAsFile() {
    const blob = new Blob([JSON.stringify({ entries: LOG_ENTRIES }, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `scan_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
// ──────────────────────────────────────────────────────────────────────────────

// DOM Elements
const video = document.getElementById('video');
const canvas = document.getElementById('overlay');
const videoFrame = document.querySelector('.video-frame');
const startBtn = document.getElementById('startScanner');
const setupTitle = document.getElementById('setupTitle');
const setupKicker = document.getElementById('setupKicker');
const setupInstruction = document.querySelector('#setupView .instruction');
const setupView = document.getElementById('setupView');
const scannerView = document.getElementById('scannerView');
const statusText = document.getElementById('statusText');
const statusIndicator = document.querySelector('.status-indicator');
const timerText = document.getElementById('timerText');
const progressBarFill = document.getElementById('progressBarFill');
const analysisOverlay = document.getElementById('analysisOverlay');
const dynamicLoadingText = document.getElementById('dynamicLoadingText');
const analysisTimeHint = document.getElementById('analysisTimeHint');
const analysisStages = Array.from(document.querySelectorAll('.analysis-stage'));
const liveRegionRow = document.getElementById('liveRegionRow');
const regionReadyCount = document.getElementById('regionReadyCount');
const mobileScanProgress = document.getElementById('mobileScanProgress');
const instructionOverlay = document.getElementById('instructionOverlay');

const regionConfirmationView = document.getElementById('regionConfirmationView');
const regionImagesGrid = document.getElementById('regionImagesGrid');
const confirmRegionsBtn = document.getElementById('confirmRegionsBtn');
const retryScanBtn = document.getElementById('retryScanBtn');

const analysisView = document.getElementById('analysisView');
const resultsSection = document.getElementById('resultsSection');
const resultsGrid = document.getElementById('resultsGrid');
const resetBtn = document.getElementById('resetBtn');

function setAnalysisStageState(activeIndex = -1, completeAll = false) {
    analysisStages.forEach((stage, index) => {
        stage.classList.toggle('active', !completeAll && index === activeIndex);
        stage.classList.toggle('complete', completeAll || index < activeIndex);
    });
}

const previewBPM = document.getElementById('previewBPM');
const previewResp = document.getElementById('previewResp');
const previewBlink = document.getElementById('previewBlink');
const deepProgressFill = document.getElementById('deepProgressFill');

const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });
const DEFAULT_SETUP_INSTRUCTION = setupInstruction?.textContent || 'Scan your face for instant insights on oiliness, texture, marks, sensitivity, and breakout-prone areas.';
const DEFAULT_START_BUTTON_TEXT = startBtn?.textContent || 'START SKIN SCAN';

function applyLandingContext() {
    if (!setupTitle || !setupInstruction || !setupKicker) return;

    const params = new URLSearchParams(window.location.search);
    const sourceText = [
        params.get('source'),
        params.get('topic'),
        params.get('utm_content'),
        params.get('utm_campaign'),
        document.referrer
    ].filter(Boolean).join(' ').toLowerCase();

    const contexts = [
        {
            match: ['forehead'],
            kicker: 'forehead acne scan',
            title: 'Check Your Forehead Acne Pattern',
            body: 'Scan your face to map visible forehead activity, oiliness, marks, texture, and skin-age signals in about 60 seconds.'
        },
        {
            match: ['teen', 'teenager'],
            kicker: 'teen acne scan',
            title: 'Understand Your Acne Zones',
            body: 'Scan your face to see visible breakout zones, oiliness, marks, texture, and skin-age signals in about 60 seconds.'
        },
        {
            match: ['men', 'male'],
            kicker: 'men skin scan',
            title: 'Free Skin Analysis for Men',
            body: 'Scan your face to understand visible acne zones, oiliness, post-shave irritation, texture, and marks in about 60 seconds.'
        },
        {
            match: ['pcos', 'pregnancy'],
            kicker: 'sensitive skin scan',
            title: 'Map Your Visible Skin Signals',
            body: 'Scan your face to understand visible breakout zones, marks, oiliness, texture, and sensitivity signals in about 60 seconds.'
        }
    ];

    const context = contexts.find(c => c.match.some(term => sourceText.includes(term)));
    if (!context) return;

    setupKicker.textContent = context.kicker;
    setupTitle.textContent = context.title;
    setupInstruction.textContent = context.body;
}

// SCAN STATE
let isAnalyzing = false;
const SCAN_DURATION  = 15000;
const SCAN_EXTENSION = 10000; // extra ms allowed if <4 regions reach good quality by 15s
const SCAN_PROGRESS_RING_GAP = 0.08;
let pulseSamples = [];
let respirationSamples = [];
let blinkCount = 0;
let eyeClosed = false;
let scanStartTime = 0;
let stabilizationFrames = 0;
let lostFrames = 0;
let lastLandmarks = null;
let captureGateState = { ok: false, reasons: [] };
let gateOpenSince = 0;              // timestamp when gate last transitioned to open
let prevGateWasOpen = false;        // tracks previous frame gate state for haptic trigger
let lightingWarning = null;         // 'dark' | 'bright' | null — set during stabilization
let lightingColourWarning = null;   // 'fluorescent' | 'cold-led' | null — harsh light colour
let shineAdvisory = false;          // true when T-zone glare is consistently high pre-scan
let shineFrameCount = 0;            // how many stabilisation frames showed high shine
let coveringDetected = null;        // 'shades' | 'mask' | null — face accessory occlusion
let skinBaseline = null;            // { r, g, b } — forehead skin tone baseline for this person
const bestRegionCategory = {};      // regionId → 0..3, only ever increases during a scan
let goodScanMs = 0;                 // accumulated ms of gate-open time (real scan progress)
let lastGoodFrameTime = 0;          // wall-clock time of last gate-open frame
let stabilizationFaceImage = null;  // captured at stabilization (best centered frame)
let _pendingFaceImageBase64 = null; // held between completeScan → confirmRegions → proceedToAnalysis

function setCameraPendingState(active, message = 'STARTING CAMERA...') {
    if (!videoFrame) return;
    videoFrame.classList.toggle('camera-pending', active);
    if (active) {
        videoFrame.setAttribute('data-camera-loading', message);
    } else {
        videoFrame.removeAttribute('data-camera-loading');
    }
}

function markCameraFeedVisible() {
    setCameraPendingState(false);
}

function installStartupVideoDiagnostics() {
    if (!video) return;
    video.addEventListener('loadedmetadata', () => {
        if (!STARTUP_DIAG.clickPerf || STARTUP_DIAG.firstVideoLoadedMetadataPerf) return;
        STARTUP_DIAG.firstVideoLoadedMetadataPerf = performance.now();
        LOG.ok('Video loadedmetadata fired', {
            videoWidth: video.videoWidth,
            videoHeight: video.videoHeight,
            readyState: video.readyState
        });
        flushStartupDiagnostics('video_loadedmetadata');
    }, { passive: true });

    video.addEventListener('canplay', () => {
        if (!STARTUP_DIAG.clickPerf || STARTUP_DIAG.firstVideoCanPlayPerf) return;
        STARTUP_DIAG.firstVideoCanPlayPerf = performance.now();
        LOG.ok('Video canplay fired', {
            videoWidth: video.videoWidth,
            videoHeight: video.videoHeight,
            readyState: video.readyState
        });
        flushStartupDiagnostics('video_canplay');
    }, { passive: true });

    video.addEventListener('playing', () => {
        markCameraFeedVisible();
        if (!STARTUP_DIAG.clickPerf || STARTUP_DIAG.firstVideoPlayingPerf) return;
        STARTUP_DIAG.firstVideoPlayingPerf = performance.now();
        LOG.ok('Video playing fired', {
            videoWidth: video.videoWidth,
            videoHeight: video.videoHeight,
            readyState: video.readyState
        });
        flushStartupDiagnostics('video_playing');
    }, { passive: true });
}

function installStartupErrorDiagnostics() {
    window.addEventListener('error', event => {
        LOG.err('Window error during scanner startup', {
            message: event.message,
            filename: event.filename,
            line: event.lineno,
            column: event.colno,
            error: event.error?.message || String(event.error || '')
        });
        trackAnalyticsEvent('frontend_error', {
            error_stage: STARTUP_DIAG.clickPerf ? 'scanner_startup' : 'page_runtime',
            error_type: sanitizeAnalyticsText(event.error?.name || event.message || 'window_error')
        });
        if (STARTUP_DIAG.clickPerf) flushStartupDiagnostics('window_error');
    });

    window.addEventListener('unhandledrejection', event => {
        const reason = event.reason || {};
        LOG.err('Unhandled promise rejection during scanner startup', {
            name: reason.name || 'UnhandledRejection',
            message: reason.message || String(reason)
        });
        trackAnalyticsEvent('frontend_error', {
            error_stage: STARTUP_DIAG.clickPerf ? 'scanner_startup' : 'page_runtime',
            error_type: sanitizeAnalyticsText(reason.name || reason.message || 'unhandled_rejection')
        });
        if (STARTUP_DIAG.clickPerf) flushStartupDiagnostics('unhandled_rejection');
    });
}

// HD BUFFERING
const regionBuffers = {}; 
const regionLocks = {};
const previousSamples = {};
const MAX_BUFFER_SIZE = 5;

// CLINICAL REGION DEFINITIONS (Rigid Similarity & Consistent Zoom)
const REGIONS = [
    { 
        id: 'live-Forehead', name: 'Forehead', 
        indices: [10, 67, 109, 338, 297], 
        pad: 0.15,
        useBboxCrop: true,
        crop: {
            // Forehead ROI should sit above brows; shift crop upward.
            padX: 0.35,
            padY: 0.45,
            offsetY: -0.40,
            minFaceWidthRatio: 0.34,
            minFaceHeightRatio: 0.20
        },
        anchors: [10, 127, 356], 
        target: [[400, 200], [50, 600], [750, 600]], // Macro Zoom
        quality: 1.0,
        lockThreshold: 76
    },
    {
        id: 'live-Nose', name: 'Nose',
        indices: [168, 6, 197, 2, 102, 331],
        pad: 0.2,
        anchors: [168, 102, 331],
        target: [[400, 200], [200, 650], [600, 650]], // Macro Zoom
        quality: 1.0,
        lockThreshold: 76
    },
    {
        id: 'live-Left-Cheek', name: 'Left Cheek',
        indices: [116, 117, 118, 101, 123],
        pad: 0.25,
        useBboxCrop: true,
        crop: {
            // Include outer cheek / side-face acne zone, not only front cheek.
            padX: 0.50,
            padY: 0.30,
            offsetX: -0.22,
            minFaceWidthRatio:  0.36,
            minFaceHeightRatio: 0.22
        },
        anchors: [123, 117, 6], // Outer-Eye, Inner-Eye, Nose-Bridge (Rigid)
        target: [[100, 300], [500, 350], [400, 650]], // Proportional Zoom
        quality: 1.5,
        lockThreshold: 74
    },
    {
        id: 'live-Right-Cheek', name: 'Right Cheek',
        indices: [345, 346, 347, 330, 352],
        pad: 0.25,
        useBboxCrop: true,
        crop: {
            // Include outer cheek / side-face acne zone, not only front cheek.
            padX: 0.50,
            padY: 0.30,
            offsetX: 0.22,
            minFaceWidthRatio:  0.36,
            minFaceHeightRatio: 0.22
        },
        anchors: [352, 346, 6], // Outer-Eye, Inner-Eye, Nose-Bridge (Rigid)
        target: [[700, 300], [300, 350], [400, 650]], // Proportional Zoom
        quality: 1.5,
        lockThreshold: 74
    },
    {
        id: 'live-Chin', name: 'Chin',
        indices: [164, 18, 200, 152],
        pad: 0.2,
        useBboxCrop: true,
        crop: {
            padX: 0.28,
            padY: 0.35,
            offsetY: 0.30,
            minFaceWidthRatio: 0.28,
            minFaceHeightRatio: 0.18
        },
        anchors: [164, 57, 287],
        target: [[400, 200], [100, 600], [700, 600]], // Macro Zoom
        quality: 1.0,
        lockThreshold: 76
    },
    {
        id: 'live-Jawline', name: 'Jawline',
        // Full jawline arc: left outer → chin → right outer
        indices: [172, 136, 150, 149, 176, 148, 152, 377, 400, 378, 379, 365, 397],
        pad: 0.15,
        useBboxCrop: true,
        crop: {
            // Wider/taller lower-face crop to include side jaw acne zones.
            padX: 0.30,
            padY: 0.48,
            offsetY: 0.02,
            minFaceWidthRatio: 0.66,
            minFaceHeightRatio: 0.26
        },
        anchors: [172, 397, 152], // left-jaw, right-jaw, chin-tip
        target: [[80, 280], [720, 280], [400, 680]],
        quality: 1.0,
        lockThreshold: 72
    }
];

/* ---------------- INITIALIZATION ---------------- */

function initFaceMesh() {
    LOG.section('initFaceMesh()');
    const FaceMeshConstructor = window.FaceMesh || (window.faceMesh ? window.faceMesh.FaceMesh : null);
    if (!FaceMeshConstructor) {
        LOG.err('MediaPipe FaceMesh NOT loaded from CDN — scanner cannot start');
        console.error("MediaPipe FaceMesh not loaded from CDN.");
        return;
    }

    faceMesh = new FaceMeshConstructor({
        locateFile: (file) => `${MEDIAPIPE_FACE_MESH_BASE_URL}/${file}`
    });

    const options = { ...FACE_MESH_OPTIONS };
    faceMesh.setOptions(options);
    LOG.ok('FaceMesh initialised', options);
    faceMesh.onResults(onResults);
    LOG.ok('onResults callback registered');
}

function createFaceMeshWarmupCanvas() {
    const warmupCanvas = document.createElement('canvas');
    warmupCanvas.width = 64;
    warmupCanvas.height = 64;
    const warmupCtx = warmupCanvas.getContext('2d');
    warmupCtx.fillStyle = '#101418';
    warmupCtx.fillRect(0, 0, warmupCanvas.width, warmupCanvas.height);
    warmupCtx.fillStyle = '#d7b8a4';
    warmupCtx.beginPath();
    warmupCtx.ellipse(32, 34, 15, 20, 0, 0, Math.PI * 2);
    warmupCtx.fill();
    return warmupCanvas;
}

async function reinitializeFaceMeshAfterWarmupFailure(error) {
    LOG.info('Reinitialising FaceMesh after warmup failure', {
        name: error?.name || 'WarmupError',
        message: error?.message || String(error || '')
    });

    try {
        if (faceMesh && typeof faceMesh.close === 'function') {
            await faceMesh.close();
        }
    } catch (closeError) {
        LOG.warn('FaceMesh close after warmup failure was not clean', {
            name: closeError?.name || 'CloseError',
            message: closeError?.message || String(closeError || '')
        });
    }

    faceMesh = null;
    initFaceMesh();
}

function startFaceMeshWarmup(reason = 'scheduled', { allowRetry = true } = {}) {
    if (faceMeshWarmupComplete) return Promise.resolve();
    if (faceMeshWarmupPromise) return faceMeshWarmupPromise;

    if (!faceMesh) initFaceMesh();
    if (!faceMesh) {
        faceMeshWarmupError = new Error('FaceMesh unavailable for warmup');
        LOG.warn('FaceMesh warmup skipped — FaceMesh unavailable', { reason });
        return Promise.resolve();
    }

    faceMeshWarmupPromise = (async () => {
        faceMeshWarmupAttemptCount++;
        faceMeshWarmupRunning = true;
        faceMeshWarmupError = null;
        STARTUP_DIAG.faceMeshWarmupStartPerf = performance.now();
        LOG.info('FaceMesh warmup started', {
            reason,
            attempt: faceMeshWarmupAttemptCount,
            version: MEDIAPIPE_FACE_MESH_VERSION,
            options: FACE_MESH_OPTIONS
        });
        if (STARTUP_DIAG.clickPerf) {
            statusText.textContent = 'PREPARING FACE DETECTION...';
            flushStartupDiagnostics('facemesh_warmup_running_after_click');
        }

        try {
            await faceMesh.send({ image: createFaceMeshWarmupCanvas() });
            STARTUP_DIAG.faceMeshWarmupResolvedPerf = performance.now();
            faceMeshWarmupComplete = true;
            faceMeshWarmupRunning = false;
            LOG.ok('FaceMesh warmup complete', {
                durationMs: perfDelta(STARTUP_DIAG.faceMeshWarmupStartPerf, STARTUP_DIAG.faceMeshWarmupResolvedPerf)
            });
            if (STARTUP_DIAG.clickPerf) flushStartupDiagnostics('facemesh_warmup_complete_after_click');
        } catch (error) {
            STARTUP_DIAG.faceMeshWarmupErrorPerf = performance.now();
            faceMeshWarmupError = error;
            faceMeshWarmupRunning = false;
            LOG.warn('FaceMesh warmup failed — scanner will continue without warm cache', {
                name: error?.name || 'WarmupError',
                message: error?.message || String(error || ''),
                attempt: faceMeshWarmupAttemptCount
            });
            if (STARTUP_DIAG.clickPerf) flushStartupDiagnostics('facemesh_warmup_error_after_click');

            await reinitializeFaceMeshAfterWarmupFailure(error);

            if (allowRetry && !STARTUP_DIAG.clickPerf && faceMeshWarmupAttemptCount < FACE_MESH_WARMUP_MAX_ATTEMPTS) {
                STARTUP_DIAG.faceMeshWarmupRetryScheduledPerf = performance.now();
                LOG.info('FaceMesh warmup retry scheduled', {
                    nextAttempt: faceMeshWarmupAttemptCount + 1,
                    delayMs: FACE_MESH_WARMUP_RETRY_DELAY_MS
                });
                faceMeshWarmupError = null;
                faceMeshWarmupPromise = null;
                setTimeout(() => {
                    startFaceMeshWarmup(`${reason}_retry`, { allowRetry: false });
                }, FACE_MESH_WARMUP_RETRY_DELAY_MS);
            }
        } finally {
            faceMeshWarmupRunning = false;
        }
    })();

    return faceMeshWarmupPromise;
}

function scheduleFaceMeshWarmup() {
    if (faceMeshWarmupScheduled || faceMeshWarmupComplete || faceMeshWarmupPromise) return;
    faceMeshWarmupScheduled = true;
    STARTUP_DIAG.faceMeshWarmupScheduledPerf = performance.now();
    LOG.info('FaceMesh warmup scheduled', { delayMs: FACE_MESH_WARMUP_DELAY_MS });

    const runWarmup = () => setTimeout(() => startFaceMeshWarmup('page_idle'), FACE_MESH_WARMUP_DELAY_MS);
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(runWarmup, { timeout: 3000 });
    } else {
        setTimeout(() => startFaceMeshWarmup('page_idle'), FACE_MESH_WARMUP_DELAY_MS);
    }
}

function isFaceMeshWarmupBlockingCamera() {
    return faceMeshWarmupRunning || (!!faceMeshWarmupPromise && !faceMeshWarmupComplete && !faceMeshWarmupError);
}

function getCameraStartupMessage(error) {
    const name = error?.name || '';

    if (['NotAllowedError', 'PermissionDeniedError', 'SecurityError'].includes(name)) {
        return 'Camera permission is blocked. Allow camera access in your browser settings, then try again.';
    }
    if (['NotFoundError', 'DevicesNotFoundError'].includes(name)) {
        return 'No camera was found. Connect a camera and try again.';
    }
    if (['NotReadableError', 'TrackStartError'].includes(name)) {
        return 'Camera is already in use or unavailable. Close other apps using it, then try again.';
    }
    if (['OverconstrainedError', 'ConstraintNotSatisfiedError'].includes(name)) {
        return 'This camera does not support the requested scan settings. Try another camera or browser.';
    }
    if (name === 'MediaPipeUnavailable') {
        return 'Face detection did not load. Check your connection and refresh the page.';
    }
    if (name === 'CameraUtilityUnavailable') {
        return 'Camera controls did not load. Check your connection and refresh the page.';
    }

    return 'Camera could not start. Check browser permission and try again.';
}

function handleCameraStartupError(error) {
    const message = getCameraStartupMessage(error);
    LOG.err('Camera startup failed', {
        name: error?.name || 'UnknownError',
        message: error?.message || String(error || ''),
        userMessage: message
    });
    analyticsCameraPermissionTracked = true;
    trackAnalyticsEvent('camera_permission_result', {
        permission_result: getCameraPermissionResult(error),
        error_type: sanitizeAnalyticsText(error?.name || 'camera_startup_error'),
        startup_ms: STARTUP_DIAG.clickPerf ? perfDelta(STARTUP_DIAG.clickPerf) : null
    });
    trackAnalyticsEvent('camera_start_failed', {
        error_type: sanitizeAnalyticsText(error?.name || 'camera_startup_error'),
        startup_ms: STARTUP_DIAG.clickPerf ? perfDelta(STARTUP_DIAG.clickPerf) : null
    });

    if (video.srcObject) {
        video.srcObject.getTracks().forEach(t => t.stop());
        video.srcObject = null;
    }
    setCameraPendingState(false);

    camera = null;
    isAnalyzing = false;
    document.body.classList.remove('scan-active');
    document.body.classList.add('home-active');
    scannerView.classList.add('hidden');
    analysisOverlay.classList.add('hidden');
    liveRegionRow.classList.add('hidden');
    if (mobileScanProgress) mobileScanProgress.classList.add('hidden');
    if (instructionOverlay) instructionOverlay.classList.add('hidden');
    setupView.classList.remove('hidden');

    statusText.textContent = 'CAMERA UNAVAILABLE';
    statusIndicator.classList.remove('active');
    if (setupInstruction) setupInstruction.textContent = message;
    startBtn.textContent = 'TRY AGAIN';
    startBtn.disabled = false;

    if (STARTUP_DIAG.clickPerf) {
        flushStartupDiagnostics('camera_startup_error');
    }
    while (STARTUP_DIAG_TIMERS.length) clearTimeout(STARTUP_DIAG_TIMERS.pop());
}

function startScanner() {
    resetStartupDiagnosticsForRun();
    STARTUP_DIAG.clickPerf = performance.now();
    analyticsCameraPermissionTracked = false;
    analyticsFirstFaceTracked = false;
    analyticsScanStartedTracked = false;
    trackAnalyticsEvent('start_scan_click', { session_stage: 'home' });
    trackAnalyticsStage('camera', 'camera_start_requested');
    LOG.section('startScanner() — start skin scan button clicked');
    startBtn.disabled = true;
    startBtn.textContent = DEFAULT_START_BUTTON_TEXT;
    if (setupInstruction) setupInstruction.textContent = DEFAULT_SETUP_INSTRUCTION;
    document.body.classList.remove('home-active');
    setupView.classList.add('hidden');
    scannerView.classList.remove('hidden');
    document.body.classList.add('scan-active');
    setCameraPendingState(true);
    statusText.textContent = 'STARTING CAMERA...';
    statusIndicator.classList.add('active');
    flushStartupDiagnostics('start_clicked_ui_transitioned');
    scheduleStartupDiagnostics();

    if (!faceMesh) {
        LOG.warn('FaceMesh not ready at scan start — calling initFaceMesh()');
        initFaceMesh();
    }
    if (!faceMesh) {
        handleCameraStartupError({ name: 'MediaPipeUnavailable', message: 'FaceMesh constructor unavailable' });
        return;
    }
    if (!faceMeshWarmupComplete && !faceMeshWarmupError && !faceMeshWarmupPromise) {
        startFaceMeshWarmup('scan_start');
    }

    const CameraConstructor = window.Camera;
    if (!CameraConstructor) {
        LOG.err('MediaPipe Camera utility NOT loaded — cannot access webcam');
        handleCameraStartupError({ name: 'CameraUtilityUnavailable', message: 'MediaPipe Camera utility unavailable' });
        return;
    }

    LOG.info('Requesting camera stream', { width: 1280, height: 720 });
    camera = new CameraConstructor(video, {
        onFrame: async () => {
            if (faceMesh && !isAnalyzing) {
                if (isFaceMeshWarmupBlockingCamera()) {
                    statusText.textContent = 'PREPARING FACE DETECTION...';
                    statusIndicator.classList.add('active');
                    return;
                }
                const now = performance.now();
                if (lastFaceMeshSendPerf && (now - lastFaceMeshSendPerf) < FACE_MESH_MIN_FRAME_INTERVAL_MS) {
                    faceMeshSkippedFrameCount++;
                    return;
                }
                lastFaceMeshSendPerf = now;
                if (!STARTUP_DIAG.firstOnFramePerf) {
                    STARTUP_DIAG.firstOnFramePerf = now;
                    markCameraFeedVisible();
                    trackCameraFirstFrame();
                    LOG.ok('MediaPipe Camera onFrame fired', {
                        videoWidth: video.videoWidth,
                        videoHeight: video.videoHeight,
                        readyState: video.readyState,
                        targetFps: FACE_MESH_TARGET_FPS
                    });
                    flushStartupDiagnostics('first_camera_onframe');
                }
                STARTUP_DIAG.faceMeshSendCount++;
                if (!STARTUP_DIAG.firstFaceMeshSendStartPerf) {
                    STARTUP_DIAG.firstFaceMeshSendStartPerf = now;
                    LOG.info('First FaceMesh send starting');
                }
                try {
                    await faceMesh.send({image: video});
                    if (!STARTUP_DIAG.firstFaceMeshSendResolvedPerf) {
                        STARTUP_DIAG.firstFaceMeshSendResolvedPerf = performance.now();
                        LOG.ok('First FaceMesh send resolved');
                        flushStartupDiagnostics('first_facemesh_send_resolved');
                    }
                } catch (error) {
                    if (!STARTUP_DIAG.firstFaceMeshSendErrorPerf) {
                        STARTUP_DIAG.firstFaceMeshSendErrorPerf = performance.now();
                        LOG.err('First FaceMesh send error', {
                            name: error?.name || 'UnknownError',
                            message: error?.message || String(error || '')
                        });
                        flushStartupDiagnostics('first_facemesh_send_error');
                    }
                    throw error;
                }
            }
        },
        width: 1280,
        height: 720
    });
    // Defer camera.start() by two paint frames so the browser paints the
    // scan-active expanded layout before the camera permission dialog appears.
    requestAnimationFrame(() => requestAnimationFrame(() => {
        try {
            STARTUP_DIAG.rafCameraStartPerf = performance.now();
            STARTUP_DIAG.cameraStartInvokedPerf = STARTUP_DIAG.rafCameraStartPerf;
            LOG.info('Calling Camera.start(); browser permission prompt may appear now');
            flushStartupDiagnostics('camera_start_invoked_permission_expected');
            const startResult = camera.start();
            if (startResult && typeof startResult.then === 'function') {
                startResult
                    .then(() => {
                        STARTUP_DIAG.cameraStartResolvedPerf = performance.now();
                        startBtn.disabled = false;
                        LOG.ok('Camera.start() resolved — waiting for first frame');
                        flushStartupDiagnostics('camera_start_resolved_waiting_for_frame');
                    })
                    .catch(handleCameraStartupError);
            } else {
                STARTUP_DIAG.cameraStartResolvedPerf = performance.now();
                startBtn.disabled = false;
                LOG.ok('Camera.start() called — waiting for first frame');
                flushStartupDiagnostics('camera_start_called_waiting_for_frame');
            }
        } catch (error) {
            handleCameraStartupError(error);
        }
    }));
}

/* ---------------- CORE SCAN LOOP ---------------- */

// Track first-face detection and periodic scan logs
let _firstFaceLogged = false;
let _lastPeriodicLog  = 0;
let _scanGateWasPaused = false;

function shouldRunRegionAnalysis() {
    const now = performance.now();
    if (lastRegionAnalysisPerf && (now - lastRegionAnalysisPerf) < REGION_ANALYSIS_MIN_INTERVAL_MS) {
        regionAnalysisSkippedFrameCount++;
        return false;
    }
    lastRegionAnalysisPerf = now;
    return true;
}

function onResults(results) {
    if (faceMeshWarmupRunning) {
        LOG.dim('Ignoring FaceMesh warmup result');
        return;
    }
    if (isAnalyzing) return;
    STARTUP_DIAG.onResultsCount++;
    if (STARTUP_DIAG.clickPerf && !STARTUP_DIAG.firstOnResultsPerf) {
        STARTUP_DIAG.firstOnResultsPerf = performance.now();
        LOG.ok('FaceMesh onResults fired', {
            hasFace: !!(results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0),
            faceCount: results.multiFaceLandmarks?.length || 0
        });
        flushStartupDiagnostics('first_facemesh_onresults');
    }

    // Canvas Sizing
    if (video.videoWidth > 0) {
        const containerWidth = video.offsetWidth;
        const containerHeight = video.offsetHeight;
        const videoRatio = video.videoWidth / video.videoHeight;
        const containerRatio = containerWidth / containerHeight;

        let actualWidth, actualHeight;
        if (containerRatio > videoRatio) {
            actualHeight = containerHeight;
            actualWidth = actualHeight * videoRatio;
        } else {
            actualWidth = containerWidth;
            actualHeight = actualWidth / videoRatio;
        }

        if (canvas.width !== actualWidth || canvas.height !== actualHeight) {
            canvas.width = actualWidth;
            canvas.height = actualHeight;
        }
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const hasFace = results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0;

    if (hasFace) {
        lostFrames = 0;
        const landmarks = results.multiFaceLandmarks[0];
        lastLandmarks = landmarks;

        if (!_firstFaceLogged) {
            _firstFaceLogged = true;
            STARTUP_DIAG.firstFaceDetectedPerf = STARTUP_DIAG.firstFaceDetectedPerf || performance.now();
            if (!analyticsFirstFaceTracked) {
                analyticsFirstFaceTracked = true;
                trackAnalyticsEvent('face_detected', {
                    startup_ms: STARTUP_DIAG.clickPerf ? perfDelta(STARTUP_DIAG.clickPerf, STARTUP_DIAG.firstFaceDetectedPerf) : null,
                    video_resolution: getVideoResolutionBucket(video.videoWidth, video.videoHeight)
                });
            }
            LOG.section('FACE DETECTED — first landmark set received');
            LOG.info('Landmark count', landmarks.length);
            LOG.info('Video stream dimensions', { width: video.videoWidth, height: video.videoHeight });
            flushStartupDiagnostics('first_face_detected');
        }

        // Compute gate before drawing mesh so mesh color reflects current state
        captureGateState = computeCaptureGate(landmarks, video);
        coveringDetected  = detectFaceCovering(landmarks, video);

        // Haptic: single 80ms buzz the moment gate transitions closed → open (mobile only)
        if (captureGateState.ok && !prevGateWasOpen) {
            if ('vibrate' in navigator && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
                navigator.vibrate(80);
            }
        }
        prevGateWasOpen = captureGateState.ok;

        // Mesh color follows gate state: red blocked → orange just opened → green locked in
        let meshColor;
        if (!captureGateState.ok) {
            gateOpenSince = 0;
            meshColor = '#ff4444';
        } else {
            if (gateOpenSince === 0) gateOpenSince = Date.now();
            meshColor = (Date.now() - gateOpenSince) > 2000 ? '#00e676' : '#ffaa00';
        }

        // DRAW MESH
        ctx.save();
        if (window.drawConnectors) {
            const tesselationAlpha = meshColor === '#ff4444' ? 0.18 : 0.28;
            const rgb = meshColor === '#ff4444' ? '255,68,68'
                      : meshColor === '#ffaa00' ? '255,170,0'
                      : '0,230,118';
            drawConnectors(ctx, landmarks, window.FACEMESH_TESSELATION, {color: `rgba(${rgb},${tesselationAlpha})`, lineWidth: 0.5});
            drawConnectors(ctx, landmarks, window.FACEMESH_CONTOURS,    {color: meshColor, lineWidth: 1.2});
        }
        ctx.restore();

        updateInstructionOverlay();

        // SCAN LOGIC
        if (scanStartTime > 0) {
            const scanPaused = !captureGateState.ok;
            statusText.textContent = scanPaused ? "SCAN PAUSED - ADJUST POSITION" : "DEEP BIOMETRIC SCAN ACTIVE";
            statusIndicator.classList.toggle('active', !scanPaused);

            if (scanPaused) {
                if (!_scanGateWasPaused) {
                    LOG.warn('Capture gate blocked — scan progress paused', captureGateState.reasons);
                    trackAnalyticsEvent('scan_quality_warning', {
                        warning_type: sanitizeAnalyticsText(captureGateState.reasons[0] || 'capture_gate_blocked'),
                        warning_stage: 'active_scan'
                    });
                }
                _scanGateWasPaused = true;
                lastGoodFrameTime = 0;
                lastRegionAnalysisPerf = 0;
            } else if (_scanGateWasPaused) {
                LOG.ok('Capture gate resumed');
                _scanGateWasPaused = false;
            }

            // Accumulate good scan time only while gate is open
            if (!scanPaused) {
                const now = Date.now();
                if (lastGoodFrameTime > 0) goodScanMs += now - lastGoodFrameTime;
                lastGoodFrameTime = now;
            }

            const scanProgress = Math.min(goodScanMs / SCAN_DURATION, 1);
            drawScanProgressBoundary(ctx, landmarks, scanProgress, scanPaused, meshColor);

            if (goodScanMs < SCAN_DURATION) {
                if (!scanPaused && shouldRunRegionAnalysis()) {
                    updateLiveRegions(landmarks, video);
                }

                // Throttled active-scan summary only; avoid per-frame/log-heavy diagnostics.
                const now = Date.now();
                if (now - _lastPeriodicLog > ACTIVE_SCAN_LOG_INTERVAL) {
                    _lastPeriodicLog = now;
                    LOG.info('Active scan checkpoint', {
                        goodScanMs: Math.round(goodScanMs),
                        lockedRegions: REGIONS.filter(r => regionLocks[r.id]?.locked).length,
                        capturedRegions: REGIONS.filter(r => (bestRegionCategory[r.id] || 0) >= 2).length,
                        faceMeshTargetFps: FACE_MESH_TARGET_FPS,
                        faceMeshSkippedFrameCount,
                        regionAnalysisTargetFps: REGION_ANALYSIS_TARGET_FPS,
                        regionAnalysisSkippedFrameCount
                    });
                }

                timerText.textContent = `${((SCAN_DURATION - goodScanMs) / 1000).toFixed(1)}s`;
                progressBarFill.style.width = `${(goodScanMs / SCAN_DURATION) * 100}%`;
            } else {
                // Require ≥4 regions at good quality before completing; allow up to SCAN_EXTENSION extra ms
                const goodRegionCount = REGIONS.filter(r => (bestRegionCategory[r.id] || 0) >= 2).length;
                if (goodRegionCount >= 4 || goodScanMs >= SCAN_DURATION + SCAN_EXTENSION) {
                    completeScan();
                } else {
                    // Extension phase: keep collecting region data while hints guide the user.
                    if (!scanPaused && shouldRunRegionAnalysis()) {
                        updateLiveRegions(landmarks, video);
                    }
                    timerText.textContent = '0.0s';
                    progressBarFill.style.width = '100%';
                }
            }
        } else {
            // Run lighting check on frames 3–8 of stabilization
            if (stabilizationFrames >= 3 && stabilizationFrames <= 8) {
                lightingWarning = checkLighting();
            }

            // Block scan start while lighting is bad; reset counter so user can fix and retry
            if (lightingWarning === 'dark') {
                stabilizationFrames = 0;
                statusText.textContent = 'CHECK LIGHTING';
                return;
            }
            if (lightingWarning === 'bright') {
                stabilizationFrames = 0;
                statusText.textContent = 'CHECK LIGHTING';
                return;
            }

            // Frames 5-12: build skin tone baseline + shine/colour advisory
            if (stabilizationFrames >= 5 && stabilizationFrames <= 12) {
                computeSkinBaseline(landmarks, video);
                if (checkShineLevel(landmarks, video) > 0.12) shineFrameCount++;
                if (shineFrameCount >= 3) shineAdvisory = true;
            }

            stabilizationFrames++;
            statusText.textContent = `STABILIZING... ${Math.round((stabilizationFrames/15)*100)}%`;
            if (stabilizationFrames >= 15) {
                STARTUP_DIAG.stabilizationCompletePerf = STARTUP_DIAG.stabilizationCompletePerf || performance.now();
                LOG.section('STABILIZATION COMPLETE — 15 frames passed, scan starting');
                const faceW = Math.abs((landmarks[454]?.x ?? 0.8) - (landmarks[234]?.x ?? 0.2));
                const faceH = Math.abs((landmarks[152]?.y ?? 0.85) - (landmarks[10]?.y ?? 0.15));
                LOG.info('Face geometry at scan start', { faceWidth: faceW.toFixed(3), faceHeight: faceH.toFixed(3) });
                flushStartupDiagnostics('stabilization_complete_scan_starting');

                // Capture face image NOW while face is most centered and stable
                stabilizationFaceImage = captureCurrentFaceImageBase64();
                if (stabilizationFaceImage) {
                    LOG.ok('Stabilization face image captured', { sizeKB: Math.round(stabilizationFaceImage.length * 0.75 / 1024) + 'KB' });
                } else {
                    LOG.warn('Stabilization face image capture failed — video not ready yet');
                }

                if (!analyticsScanStartedTracked) {
                    analyticsScanStartedTracked = true;
                    trackAnalyticsStage('scan', 'scan_started', {
                        startup_ms: STARTUP_DIAG.clickPerf ? perfDelta(STARTUP_DIAG.clickPerf) : null,
                        lighting_warning: lightingWarning || 'none',
                        shine_advisory: shineAdvisory ? 'yes' : 'no'
                    });
                }
                scanStartTime = Date.now();
                goodScanMs = 0;
                lastGoodFrameTime = 0;
                analysisOverlay.classList.remove('hidden');
                REGIONS.forEach(r => {
                    regionBuffers[r.id] = [];
                    regionLocks[r.id] = { locked: false, quality: 0, ts: 0 };
                    previousSamples[r.id] = null;
                    bestRegionCategory[r.id] = 0;
                });

                // Mobile: show compact progress list instead of live video tiles
                if (window.innerWidth < 768) {
                    if (mobileScanProgress) {
                        mobileScanProgress.querySelectorAll('.msp-item').forEach(el => {
                            el.setAttribute('data-state', '0');
                            el.querySelector('.msp-state').textContent = CAPTURE_LABELS[0];
                        });
                        mobileScanProgress.classList.remove('hidden');
                    }
                } else {
                    liveRegionRow.classList.remove('hidden');
                    if (regionReadyCount) regionReadyCount.classList.remove('hidden');
                }
                LOG.info('Region buffers initialised for', REGIONS.map(r => r.name));
            }
        }
    } else {
        STARTUP_DIAG.noFaceResultsCount++;
        if (STARTUP_DIAG.clickPerf && !STARTUP_DIAG.firstNoFaceResultsPerf) {
            STARTUP_DIAG.firstNoFaceResultsPerf = performance.now();
            LOG.warn('FaceMesh result had no face', {
                videoWidth: video.videoWidth,
                videoHeight: video.videoHeight,
                readyState: video.readyState
            });
            flushStartupDiagnostics('first_facemesh_result_no_face');
        }
        lostFrames++;
        coveringDetected = null;
        updateInstructionOverlay(true);
        if (lostFrames > 10) {
            if (lostFrames === 11) {
                LOG.warn('Face LOST — searching for subject', { scanStarted: scanStartTime > 0 });
                trackAnalyticsEvent('scan_quality_warning', {
                    warning_type: 'face_lost',
                    warning_stage: scanStartTime > 0 ? 'active_scan' : 'stabilization'
                });
            }
            statusText.textContent = "SEARCHING FOR SUBJECT...";
            statusIndicator.classList.remove('active');
            if (scanStartTime === 0) stabilizationFrames = 0;
        }
    }
}

/* ---------------- HD RECONSTRUCTION ---------------- */

function solveAffine(p, q) {
    const matrix = [
        [p[0].x, p[0].y, 1, 0, 0, 0],
        [0, 0, 0, p[0].x, p[0].y, 1],
        [p[1].x, p[1].y, 1, 0, 0, 0],
        [0, 0, 0, p[1].x, p[1].y, 1],
        [p[2].x, p[2].y, 1, 0, 0, 0],
        [0, 0, 0, p[2].x, p[2].y, 1]
    ];
    const rhs = [q[0][0], q[0][1], q[1][0], q[1][1], q[2][0], q[2][1]];
    const n = 6;
    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let k = i + 1; k < n; k++) if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) maxRow = k;
        [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
        [rhs[i], rhs[maxRow]] = [rhs[maxRow], rhs[i]];
        if (Math.abs(matrix[i][i]) < 1e-10) return [1, 0, 0, 0, 1, 0];
        for (let k = i + 1; k < n; k++) {
            const c = -matrix[k][i] / matrix[i][i];
            for (let j = i; j < n; j++) matrix[k][j] += c * matrix[i][j];
            rhs[k] += c * rhs[i];
        }
    }
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) sum += matrix[i][j] * x[j];
        x[i] = (rhs[i] - sum) / matrix[i][i];
    }
    return x;
}

function triangleArea(a, b, c) {
    return Math.abs((a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)) / 2);
}

function isValidTransform(m) {
    if (!Array.isArray(m) || m.length !== 6 || m.some(v => !Number.isFinite(v))) return false;
    const det = (m[0] * m[4]) - (m[1] * m[3]);
    return Number.isFinite(det) && Math.abs(det) > 1e-4 && Math.abs(det) < 500;
}

function computeRegionBbox(region, landmarks, video) {
    const vw = video.videoWidth, vh = video.videoHeight;
    const points = region.indices
        .map(idx => landmarks[idx])
        .filter(Boolean)
        .map(p => ({ x: p.x * vw, y: p.y * vh }));
    if (!points.length) return null;

    const xs = points.map(p => p.x), ys = points.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);

    const rw = Math.max(2, maxX - minX), rh = Math.max(2, maxY - minY);
    const crop = region.crop || {};
    const padX = rw * (crop.padX ?? region.pad ?? 0.2);
    const padY = rh * (crop.padY ?? region.pad ?? 0.2);
    const cx = ((minX + maxX) / 2) + rw * (crop.offsetX ?? 0);
    const cy = ((minY + maxY) / 2) + rh * (crop.offsetY ?? 0);
    const faceW = Math.abs((landmarks[454]?.x ?? 0.8) - (landmarks[234]?.x ?? 0.2)) * vw;
    const faceH = Math.abs((landmarks[152]?.y ?? 0.85) - (landmarks[10]?.y ?? 0.15)) * vh;
    const tw = Math.max(rw + padX * 2, (crop.minFaceWidthRatio ?? 0) * faceW);
    const th = Math.max(rh + padY * 2, (crop.minFaceHeightRatio ?? 0) * faceH);

    const sx = Math.max(0, Math.round(cx - tw / 2));
    const sy = Math.max(0, Math.round(cy - th / 2));
    const sw = Math.max(2, Math.min(vw - sx, Math.round(tw)));
    const sh = Math.max(2, Math.min(vh - sy, Math.round(th)));

    return { sx, sy, sw, sh };
}

function drawRegionFallback(region, landmarks, video) {
    const bbox = computeRegionBbox(region, landmarks, video);
    if (!bbox) return;
    const { sx, sy, sw, sh } = bbox;
    offscreenCtx.drawImage(video, sx, sy, sw, sh, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
}

function clamp01(v) {
    return Math.max(0, Math.min(1, v));
}

function computeCaptureGate(landmarks, video) {
    const faceWidth  = Math.abs((landmarks[454]?.x ?? 0.8) - (landmarks[234]?.x ?? 0.2));
    const faceHeight = Math.abs((landmarks[152]?.y ?? 0.85) - (landmarks[10]?.y ?? 0.15));
    const nose  = landmarks[1];
    const left  = landmarks[234];
    const right = landmarks[454];
    const top   = landmarks[10];
    const chin  = landmarks[152];

    const leftDist  = Math.abs((nose?.x ?? 0.5) - (left?.x  ?? 0.2));
    const rightDist = Math.abs((right?.x ?? 0.8) - (nose?.x  ?? 0.5));
    const yawAsymmetry   = Math.abs(leftDist - rightDist) / Math.max(1e-6, leftDist + rightDist);
    const noseVertical   = ((nose?.y ?? 0.5) - (top?.y ?? 0.15)) / Math.max(1e-6, (chin?.y ?? 0.85) - (top?.y ?? 0.15));
    const pitchDeviation = Math.abs(noseVertical - 0.52);

    // Vertical centering: where the face mid-point sits in the frame (0 = top, 1 = bottom)
    const faceCenterY = ((top?.y ?? 0.5) + (chin?.y ?? 0.5)) / 2;

    const reasons = [];
    if (faceWidth < 0.30)      reasons.push("Move closer");
    if (faceWidth > 0.72)      reasons.push("Move slightly back");
    if (faceHeight < 0.25)     reasons.push("Show your full face");   // truly cropped — lower threshold than before
    if (faceCenterY < 0.28)    reasons.push("Lower the camera");      // face sitting too high
    if (faceCenterY > 0.72)    reasons.push("Raise the camera");      // face sitting too low
    if (yawAsymmetry > 0.26)   reasons.push("Face camera straight");
    if (pitchDeviation > 0.24) reasons.push("Keep head level");

    return { ok: reasons.length === 0, reasons };
}

function drawScanProgressBoundary(ctx, landmarks, progress, isPaused, meshColor) {
    if (!ctx || !landmarks || scanStartTime === 0) return;

    const left = landmarks[234], right = landmarks[454], top = landmarks[10], chin = landmarks[152];
    if (!left || !right || !top || !chin) return;

    const minX = Math.min(left.x, right.x);
    const maxX = Math.max(left.x, right.x);
    const minY = Math.min(top.y, chin.y);
    const maxY = Math.max(top.y, chin.y);

    const cx = ((minX + maxX) / 2) * ctx.canvas.width;
    const cy = ((minY + maxY) / 2) * ctx.canvas.height;
    const rx = ((maxX - minX) / 2 + SCAN_PROGRESS_RING_GAP) * ctx.canvas.width;
    const ry = ((maxY - minY) / 2 + SCAN_PROGRESS_RING_GAP * 0.72) * ctx.canvas.height;

    if (!Number.isFinite(cx + cy + rx + ry) || rx < 20 || ry < 30) return;

    const pct = Math.max(0, Math.min(1, progress));
    const stroke = Math.max(4, Math.min(8, ctx.canvas.width * 0.008));
    const start = -Math.PI / 2;
    const end = start + (Math.PI * 2 * pct);
    const progressColor = isPaused ? '#ff4444' : meshColor;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.shadowBlur = 14;
    ctx.shadowColor = isPaused ? 'rgba(255,68,68,0.35)' : 'rgba(236,97,14,0.45)';

    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = stroke;
    ctx.stroke();

    if (pct > 0) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, start, end);
        ctx.strokeStyle = progressColor;
        ctx.lineWidth = stroke + 1;
        ctx.stroke();
    }

    // A compact numeric cue reduces ambiguity without covering the face.
    const label = isPaused ? `PAUSED ${Math.round(pct * 100)}%` : `${Math.round(pct * 100)}%`;
    const labelY = Math.max(22, cy - ry - 12);
    ctx.shadowBlur = 0;
    ctx.font = `700 ${Math.max(11, Math.min(16, ctx.canvas.width * 0.018))}px "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const textWidth = ctx.measureText(label).width;
    const padX = 10;
    const boxH = 24;
    ctx.fillStyle = 'rgba(8,8,10,0.78)';
    ctx.strokeStyle = isPaused ? 'rgba(255,68,68,0.42)' : 'rgba(236,97,14,0.42)';
    ctx.lineWidth = 1;
    const boxX = cx - textWidth / 2 - padX;
    const boxY = labelY - boxH / 2;
    const boxW = textWidth + padX * 2;
    const boxR = 12;
    ctx.beginPath();
    ctx.moveTo(boxX + boxR, boxY);
    ctx.lineTo(boxX + boxW - boxR, boxY);
    ctx.quadraticCurveTo(boxX + boxW, boxY, boxX + boxW, boxY + boxR);
    ctx.lineTo(boxX + boxW, boxY + boxH - boxR);
    ctx.quadraticCurveTo(boxX + boxW, boxY + boxH, boxX + boxW - boxR, boxY + boxH);
    ctx.lineTo(boxX + boxR, boxY + boxH);
    ctx.quadraticCurveTo(boxX, boxY + boxH, boxX, boxY + boxH - boxR);
    ctx.lineTo(boxX, boxY + boxR);
    ctx.quadraticCurveTo(boxX, boxY, boxX + boxR, boxY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = isPaused ? '#ffcf66' : '#F5EDE6';
    ctx.fillText(label, cx, labelY + 0.5);
    ctx.restore();
}

function checkLighting() {
    if (offscreenCanvas.width < 100 || offscreenCanvas.height < 100) return null;
    offscreenCanvas.width = offscreenCanvas.width; // clear
    offscreenCanvas.width = 100; offscreenCanvas.height = 100;
    offscreenCtx.drawImage(video, 0, 0, 100, 100);
    const pixels = offscreenCtx.getImageData(20, 20, 60, 60).data;
    let sum = 0;
    const count = pixels.length / 4;
    for (let i = 0; i < pixels.length; i += 4) {
        sum += 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];
    }
    const avg = sum / count;
    if (avg < 40)  return 'dark';
    if (avg > 220) return 'bright';
    return null;
}

// Region-specific hints shown during active scan when a region is stuck below good quality
const REGION_HINTS = {
    'live-Forehead':    'IMPROVING FOREHEAD DETAIL — KEEP HAIR AWAY',
    'live-Nose':        'IMPROVING NOSE DETAIL — REDUCE GLARE',
    'live-Left-Cheek':  'IMPROVING LEFT CHEEK SIDE — TURN SLIGHTLY TOWARD LIGHT',
    'live-Right-Cheek': 'IMPROVING RIGHT CHEEK SIDE — TURN SLIGHTLY TOWARD LIGHT',
    'live-Chin':        'IMPROVING CHIN DETAIL — LIFT SLIGHTLY',
    'live-Jawline':     'IMPROVING JAWLINE SIDES — KEEP LOWER FACE VISIBLE',
};

function getRegionHint() {
    if (scanStartTime === 0 || goodScanMs < 4000) return null;

    // Regions that haven't reached good quality and aren't locked yet
    const stuck = REGIONS.filter(r => {
        if (regionLocks[r.id]?.locked) return false;
        return (bestRegionCategory[r.id] || 0) < 2;
    });
    if (stuck.length === 0) return null;

    // Rotate through stuck regions every 3 seconds of good scan time
    const idx = Math.floor(goodScanMs / 3000) % stuck.length;
    return REGION_HINTS[stuck[idx].id] || null;
}

function computeSkinBaseline(landmarks, video) {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return;
    const top = landmarks[10], browL = landmarks[107];
    const tempL = landmarks[234], tempR = landmarks[454];
    const x  = Math.max(0, Math.round((tempL.x + (tempR.x - tempL.x) * 0.15) * vw));
    const y  = Math.max(0, Math.round(top.y * vh));
    const w  = Math.max(4, Math.round((tempR.x - tempL.x) * 0.70 * vw));
    const h  = Math.max(4, Math.round((browL.y - top.y) * 0.80 * vh));
    const cW = Math.min(w, 40), cH = Math.min(h, 40);
    offscreenCanvas.width = cW; offscreenCanvas.height = cH;
    offscreenCtx.drawImage(video, x, y, w, h, 0, 0, cW, cH);
    const d = offscreenCtx.getImageData(0, 0, cW, cH).data;
    let rS = 0, gS = 0, bS = 0, n = 0;
    for (let i = 0; i < d.length; i += 4) { rS += d[i]; gS += d[i + 1]; bS += d[i + 2]; n++; }
    if (n < 1) return;
    if (!skinBaseline) {
        skinBaseline = { r: rS / n, g: gS / n, b: bS / n };
    } else {
        skinBaseline.r = skinBaseline.r * 0.7 + (rS / n) * 0.3;
        skinBaseline.g = skinBaseline.g * 0.7 + (gS / n) * 0.3;
        skinBaseline.b = skinBaseline.b * 0.7 + (bS / n) * 0.3;
    }
    // Derive lighting colour warning from baseline
    if (skinBaseline.g / Math.max(1, skinBaseline.r) > 1.8)     lightingColourWarning = 'fluorescent';
    else if (skinBaseline.b / Math.max(1, skinBaseline.g) > 1.6) lightingColourWarning = 'cold-led';
    else                                                           lightingColourWarning = null;
}

function checkShineLevel(landmarks, video) {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return 0;
    const top = landmarks[10], browL = landmarks[107];
    const tempL = landmarks[234], tempR = landmarks[454];
    const x  = Math.max(0, Math.round((tempL.x + (tempR.x - tempL.x) * 0.15) * vw));
    const y  = Math.max(0, Math.round(top.y * vh));
    const w  = Math.max(4, Math.round((tempR.x - tempL.x) * 0.70 * vw));
    const h  = Math.max(4, Math.round((browL.y - top.y) * 0.80 * vh));
    const cW = Math.min(w, 30), cH = Math.min(h, 30);
    offscreenCanvas.width = cW; offscreenCanvas.height = cH;
    offscreenCtx.drawImage(video, x, y, w, h, 0, 0, cW, cH);
    const d = offscreenCtx.getImageData(0, 0, cW, cH).data;
    let glareCount = 0, n = 0;
    for (let i = 0; i < d.length; i += 4) {
        const maxC = Math.max(d[i], d[i + 1], d[i + 2]);
        const minC = Math.min(d[i], d[i + 1], d[i + 2]);
        if (maxC / 255 > 0.90 && (maxC > 0 ? (maxC - minC) / maxC : 0) < 0.15) glareCount++;
        n++;
    }
    return n > 0 ? glareCount / n : 0;
}

function detectFaceCovering(landmarks, video) {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return null;

    const px = (idx) => ({ x: landmarks[idx].x * vw, y: landmarks[idx].y * vh });

    // Sample a zone from video into a small patch; return { mean, std } of luminance
    function sampleZone(x, y, w, h) {
        if (w < 4 || h < 4) return null;
        const cW = Math.min(w, 40), cH = Math.min(h, 40);
        offscreenCanvas.width = cW;
        offscreenCanvas.height = cH;
        offscreenCtx.drawImage(video, x, y, w, h, 0, 0, cW, cH);
        const d = offscreenCtx.getImageData(0, 0, cW, cH).data;
        let lumSum = 0, lumSqSum = 0, n = 0;
        for (let i = 0; i < d.length; i += 4) {
            const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
            lumSum += lum; lumSqSum += lum * lum; n++;
        }
        const mean = lumSum / Math.max(1, n);
        return { mean, std: Math.sqrt(Math.max(0, lumSqSum / Math.max(1, n) - mean * mean)) };
    }

    // Forehead reference zone
    const top = px(10), browL = px(107), browR = px(336), tempL = px(234), tempR = px(454);
    const fh = sampleZone(
        Math.max(0, Math.round(tempL.x + (tempR.x - tempL.x) * 0.15)),
        Math.max(0, Math.round(top.y)),
        Math.max(4, Math.round((tempR.x - tempL.x) * 0.70)),
        Math.max(4, Math.round((browL.y - top.y) * 0.80))
    );
    if (!fh || fh.mean < 25) return null; // too dark — lighting warning handles this

    // Eye zone (between brow arches and lower eyelids, full eye width)
    const browArchL = px(70), browArchR = px(300);
    const eyeOutL = px(33), eyeOutR = px(263), eyeLowL = px(145), eyeLowR = px(374);
    const eyeY = Math.max(0, Math.round(Math.min(browArchL.y, browArchR.y)));
    const eye = sampleZone(
        Math.max(0, Math.round(eyeOutL.x)),
        eyeY,
        Math.max(4, Math.round(eyeOutR.x - eyeOutL.x)),
        Math.max(4, Math.round(Math.max(eyeLowL.y, eyeLowR.y) - eyeY))
    );

    // Lower face zone (nose tip → chin, between inner jaw landmarks)
    const noseTip = px(1), chin = px(152), jawL = px(57), jawR = px(287);
    const lf = sampleZone(
        Math.max(0, Math.round(jawL.x)),
        Math.max(0, Math.round(noseTip.y)),
        Math.max(4, Math.round(jawR.x - jawL.x)),
        Math.max(4, Math.round(chin.y - noseTip.y))
    );

    // Shades / dark sunglasses: eye zone ≥45% darker than forehead
    if (eye && fh.mean > 55 && eye.mean < fh.mean * 0.52) return 'shades';

    // Mask: lower face is very uniform (fabric) AND clearly different tone from forehead
    if (lf && lf.std < 14 && Math.abs(lf.mean - fh.mean) > 28 && fh.mean > 55) return 'mask';

    return null;
}

function updateInstructionOverlay(noFace) {
    if (!instructionOverlay) return;

    let text, color;

    if (lightingWarning === 'dark') {
        text  = 'TOO DARK — MOVE TO BETTER LIGHTING';
        color = '#ffcf66';
    } else if (lightingWarning === 'bright') {
        text  = 'BRIGHT LIGHT BEHIND YOU — TURN AROUND';
        color = '#ffcf66';
    } else if (lightingColourWarning && scanStartTime === 0) {
        text  = 'HARSH LIGHTING — MOVE TO NATURAL OR WARM LIGHT';
        color = '#ffcf66';
    } else if (noFace) {
        text  = 'POSITION YOUR FACE IN THE FRAME';
        color = '#ffcf66';
    } else if (coveringDetected === 'shades') {
        text  = 'REMOVE SUNGLASSES — FULL FACE MUST BE VISIBLE';
        color = '#ffcf66';
    } else if (coveringDetected === 'mask') {
        text  = 'REMOVE MASK — FULL FACE MUST BE VISIBLE';
        color = '#ffcf66';
    } else if (shineAdvisory && scanStartTime === 0) {
        text  = 'SKIN LOOKS VERY SHINY — BLOT FACE FOR BEST RESULTS';
        color = '#ffcf66';
    } else if (!captureGateState.ok) {
        const reason = captureGateState.reasons[0] || '';
        if      (reason.includes('closer'))     { text = 'MOVE CLOSER';               color = '#ffffff'; }
        else if (reason.includes('back'))       { text = 'MOVE BACK SLIGHTLY';        color = '#ffffff'; }
        else if (reason.includes('full face'))  { text = 'SHOW YOUR FULL FACE';       color = '#ffffff'; }
        else if (reason.includes('Lower'))      { text = 'LOWER THE CAMERA SLIGHTLY'; color = '#ffffff'; }
        else if (reason.includes('Raise'))      { text = 'RAISE THE CAMERA SLIGHTLY'; color = '#ffffff'; }
        else if (reason.includes('straight'))   { text = 'FACE THE CAMERA DIRECTLY';  color = '#ffffff'; }
        else if (reason.includes('level'))      { text = 'KEEP HEAD LEVEL';           color = '#ffffff'; }
        else                                    { text = 'ADJUST YOUR POSITION';      color = '#ffffff'; }
    } else {
        const heldMs = gateOpenSince > 0 ? Date.now() - gateOpenSince : 0;
        if (heldMs < 1500) {
            text  = 'PERFECT — HOLD STILL';
            color = '#00e676';
        } else if (scanStartTime > 0) {
            const hint = getRegionHint();
            if (hint) {
                text  = hint;
                color = '#00d2ff';
            } else {
                text  = 'SCANNING…';
                color = '#00d2ff';
            }
        } else {
            text  = 'HOLD STILL';
            color = '#00e676';
        }
    }

    instructionOverlay.textContent = text;
    instructionOverlay.style.color = color;
    instructionOverlay.classList.remove('hidden');
}

// Per-region scoring weights: [sharpness, glare, exposure, occlusion, stability, colorFidelity]
const REGION_WEIGHTS = {
    'live-Forehead':    [0.44, 0.26, 0.08, 0.06, 0.04, 0.12],
    'live-Nose':        [0.44, 0.28, 0.08, 0.04, 0.04, 0.12],
    'live-Left-Cheek':  [0.35, 0.18, 0.12, 0.08, 0.05, 0.22],
    'live-Right-Cheek': [0.35, 0.18, 0.12, 0.08, 0.05, 0.22],
    'live-Chin':        [0.38, 0.16, 0.10, 0.14, 0.06, 0.16],
    'live-Jawline':     [0.35, 0.14, 0.10, 0.20, 0.07, 0.14],
};
const WEIGHTS_DEFAULT = [0.40, 0.20, 0.10, 0.10, 0.05, 0.15];

// T-zone needs stricter sharpness (pore-level detail) and less motion tolerance
const SHARPNESS_NORM = {
    'live-Forehead': 20, 'live-Nose': 20,
    'live-Left-Cheek': 26, 'live-Right-Cheek': 26,
    'live-Chin': 26, 'live-Jawline': 26,
};
const STABILITY_NORM = {
    'live-Forehead': 16, 'live-Nose': 16,
    'live-Left-Cheek': 22, 'live-Right-Cheek': 22,
    'live-Chin': 22, 'live-Jawline': 22,
};
const CAPTURE_LABELS = ['FINDING', 'HOLD STEADY', 'CAPTURED', 'VERIFIED'];

function getRegionCaptureCategory(regionId) {
    const lock = regionLocks[regionId] || {};
    const buf = regionBuffers[regionId] || [];
    const best = buf.length > 0 ? buf[0].quality : 0;

    if (lock.locked) return 3;
    if (best >= 48) return 2;
    if (best > 0) return 1;
    return 0;
}

function getRegionCaptureLabel(regionId) {
    return CAPTURE_LABELS[getRegionCaptureCategory(regionId)] || CAPTURE_LABELS[0];
}

function getRegionQualityGuidance(region, quality) {
    if (!quality) return 'Finding region';
    if (quality.wbWarning === 'fluorescent' || quality.wbWarning === 'cold-led') return 'Needs softer light';
    if (quality.wbWarning === 'warm-incandescent') return 'Needs neutral light';
    if (quality.score >= (region.lockThreshold || 80)) return 'Verifying';
    if (quality.score >= 58) return 'Captured';
    return 'Hold steady';
}

function analyzeSampleQuality(regionId, imgData, width, height, nowTs) {
    const data = imgData;
    const rowStride = width * 4;

    let lumSum = 0;
    let gradSum = 0;
    let clipLowCount = 0;   // lum 0-5 (crushed black)
    let clipHighCount = 0;  // lum 250-255 (blown highlight)
    let darkCount = 0;      // lum < 28 (occlusion / shadow)
    let glareCount = 0;     // HSV specular: V>0.90 && S<0.15
    let rSum = 0, gSum = 0, bSum = 0;
    let rSqSum = 0;          // for red channel variance (color fidelity)
    let rHighCount = 0;      // red channel saturation >= 248 (blows redness signal)
    let motionDiffSum = 0;

    const prev = previousSamples[regionId];
    const hasPrev = prev && prev.data && prev.w === width && prev.h === height;

    const GRID = 4;
    const cellW = width / GRID, cellH = height / GRID;
    const cellLumSum = new Float32Array(GRID * GRID);
    const cellCounts = new Int32Array(GRID * GRID);

    for (let y = 0; y < height - 1; y++) {
        for (let x = 0; x < width - 1; x++) {
            const i = (y * width + x) * 4;
            const r = data[i], g = data[i + 1], b = data[i + 2];
            const lum = (0.299 * r) + (0.587 * g) + (0.114 * b);
            const lumX = (0.299 * data[i + 4]) + (0.587 * data[i + 5]) + (0.114 * data[i + 6]);
            const lumY = (0.299 * data[i + rowStride]) + (0.587 * data[i + rowStride + 1]) + (0.114 * data[i + rowStride + 2]);

            lumSum += lum;
            gradSum += Math.abs(lum - lumX) + Math.abs(lum - lumY);
            rSum += r; gSum += g; bSum += b;
            rSqSum += r * r;

            if (lum <= 5)   clipLowCount++;
            if (lum >= 250) clipHighCount++;
            if (lum < 28)   darkCount++;
            if (r >= 248)   rHighCount++;

            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const V = maxC / 255;
            const S = maxC > 0 ? (maxC - minC) / maxC : 0;
            if (V > 0.90 && S < 0.15) glareCount++;

            const cx = Math.min(Math.floor(x / cellW), GRID - 1);
            const cy = Math.min(Math.floor(y / cellH), GRID - 1);
            cellLumSum[cy * GRID + cx] += lum;
            cellCounts[cy * GRID + cx]++;

            if (hasPrev) {
                const prevLum = (0.299 * prev.data[i]) + (0.587 * prev.data[i + 1]) + (0.114 * prev.data[i + 2]);
                motionDiffSum += Math.abs(lum - prevLum);
            }
        }
    }

    previousSamples[regionId] = { data: new Uint8ClampedArray(data), w: width, h: height };

    const validPixels = (width - 1) * (height - 1);
    const gradMean  = gradSum  / Math.max(1, validPixels * 2);
    const glareFrac = glareCount / Math.max(1, validPixels);
    const darkFrac  = darkCount  / Math.max(1, validPixels);
    const motionMean = hasPrev ? (motionDiffSum / Math.max(1, validPixels)) : 0;
    const meanR = rSum / Math.max(1, validPixels);
    const meanG = gSum / Math.max(1, validPixels);
    const meanB = bSum / Math.max(1, validPixels);

    // ── Sharpness: per-region normaliser — T-zone requires pore-level crispness ──
    const sharpNorm = SHARPNESS_NORM[regionId] || 26;
    const sharpnessScore = clamp01(gradMean / sharpNorm);

    // ── Glare: HSV specular highlights ──
    const glareScore = clamp01(1 - (glareFrac / 0.07));

    // ── Exposure: clipping + 4×4 uniformity + red channel headroom ──
    const clipFrac = (clipLowCount + clipHighCount) / Math.max(1, validPixels);
    const clipPenalty = clamp01(clipFrac / 0.08);
    const cellMeans = cellLumSum.map((s, idx) => s / Math.max(1, cellCounts[idx]));
    const cellMeanAvg = cellMeans.reduce((a, b) => a + b, 0) / cellMeans.length;
    const cellVariance = cellMeans.reduce((s, v) => s + (v - cellMeanAvg) ** 2, 0) / cellMeans.length;
    const uniformityPenalty = clamp01(Math.sqrt(cellVariance) / 60);
    const redHeadroomPenalty = clamp01((rHighCount / Math.max(1, validPixels)) / 0.10);
    const exposureScore = clamp01(1 - (clipPenalty * 0.5 + uniformityPenalty * 0.3 + redHeadroomPenalty * 0.2));

    // ── Occlusion ──
    const occlusionScore = clamp01(1 - (darkFrac / 0.35));

    // ── Stability: per-region normaliser — T-zone tolerates less motion ──
    const stabilityNorm = STABILITY_NORM[regionId] || 22;
    const stabilityScore = clamp01(1 - (motionMean / stabilityNorm));

    // ── Color fidelity: replaces luminance contrast — red-channel acne signal preservation ──
    const redVariance = Math.max(0, rSqSum / Math.max(1, validPixels) - meanR * meanR);
    const redVarScore   = clamp01(Math.sqrt(redVariance) / 30);       // color variation in patch
    const rgDiffScore   = clamp01((meanR - meanG) / 20 + 0.5);        // warm skin signal; WB issues lower this
    const redRangeScore = clamp01(1 - Math.abs(meanR - 128) / 128);   // channel not blown or crushed

    let colorFidelityScore;
    if (skinBaseline && skinBaseline.r > 0) {
        // Relative to this person's baseline — works for all skin tones
        const baselineRatio = meanR / skinBaseline.r;
        const baselineScore = clamp01(1 - Math.abs(baselineRatio - 1.0) / 0.5);
        colorFidelityScore = redVarScore * 0.40 + baselineScore * 0.35 + rgDiffScore * 0.25;
    } else {
        colorFidelityScore = redVarScore * 0.50 + rgDiffScore * 0.30 + redRangeScore * 0.20;
    }

    const W = REGION_WEIGHTS[regionId] || WEIGHTS_DEFAULT;
    const qualityScore =
        sharpnessScore      * W[0] +
        glareScore          * W[1] +
        exposureScore       * W[2] +
        occlusionScore      * W[3] +
        stabilityScore      * W[4] +
        colorFidelityScore  * W[5];

    // WB sanity — used by instruction overlay and returned for logging
    let wbWarning = null;
    if (meanG / Math.max(1, meanR) > 1.8)       wbWarning = 'fluorescent';
    else if (meanB / Math.max(1, meanG) > 1.6)  wbWarning = 'cold-led';
    else if (meanR / Math.max(1, meanB) > 2.5)  wbWarning = 'warm-incandescent';

    return {
        score: Math.round(qualityScore * 100),
        sharpnessRaw: gradMean,
        wbWarning
    };
}

function updateLiveRegions(landmarks, video) {
    REGIONS.forEach(r => {
        const liveCanvas = document.getElementById(r.id);
        if (!liveCanvas) return;

        if (!regionLocks[r.id]) regionLocks[r.id] = { locked: false, quality: 0, ts: 0 };
        const lockState = regionLocks[r.id];
        const tile = liveCanvas.parentElement;
        const indicator = tile.querySelector('.refining-indicator');

        if (lockState.locked) {
            tile.dataset.state = '3';
            if (indicator) {
                indicator.textContent = 'VERIFIED';
            }
            return;
        }

        if (!captureGateState.ok) {
            tile.dataset.state = String(getRegionCaptureCategory(r.id));
            if (indicator) {
                indicator.textContent = captureGateState.reasons[0] || getRegionCaptureLabel(r.id);
            }
            return;
        }

        // Native bbox crop — real resolution, real aspect ratio, zero distortion
        const bbox = computeRegionBbox(r, landmarks, video);
        if (!bbox) return;
        const { sx, sy, sw, sh } = bbox;

        if (offscreenCanvas.width !== sw || offscreenCanvas.height !== sh) {
            offscreenCanvas.width = sw;
            offscreenCanvas.height = sh;
        }
        offscreenCtx.clearRect(0, 0, sw, sh);
        offscreenCtx.drawImage(video, sx, sy, sw, sh, 0, 0, sw, sh);

        // Single getImageData: used for both quality scoring and buffer storage
        const nativeData = offscreenCtx.getImageData(0, 0, sw, sh);
        const nowTs = Date.now();
        const quality = analyzeSampleQuality(r.id, nativeData.data, sw, sh, nowTs);

        const qualityMultiplier = r.quality || 1.0;

        // Resize live canvas to match native crop (reset buffer if size changed)
        if (liveCanvas.width !== sw || liveCanvas.height !== sh) {
            liveCanvas.width = sw;
            liveCanvas.height = sh;
            regionBuffers[r.id] = [];
        }
        const liveCtx = liveCanvas.getContext('2d', { willReadFrequently: true });

        const buffer = regionBuffers[r.id];

        // Always show current frame in live preview tile
        liveCtx.putImageData(nativeData, 0, 0);

        const effectiveScore = quality.score / qualityMultiplier;
        if (buffer.length < MAX_BUFFER_SIZE || effectiveScore > buffer[buffer.length - 1].score) {
            buffer.push({ score: effectiveScore, quality: quality.score, data: nativeData, ts: nowTs });
            buffer.sort((a, b) => b.score - a.score);
            if (buffer.length > MAX_BUFFER_SIZE) buffer.pop();

            if (quality.score >= (r.lockThreshold || 80) && buffer.length >= 3) {
                const wasLocked = lockState.locked;
                lockState.locked = true;
                lockState.quality = quality.score;
                lockState.ts = nowTs;
                LOG.ok(`Region LOCKED: ${r.name}`, { quality: quality.score, threshold: r.lockThreshold, framesInBuffer: buffer.length });
                const lockedCount = REGIONS.filter(reg => regionLocks[reg.id]?.locked).length;
                LOG.info(`Locked regions: ${lockedCount} / ${REGIONS.length}`);
                if (!wasLocked) {
                    trackAnalyticsEvent('region_locked', {
                        region: sanitizeAnalyticsText(r.name),
                        lock_time_ms: scanStartTime ? nowTs - scanStartTime : null,
                        quality_score: quality.score,
                        quality_bucket: getScoreBucket(quality.score),
                        locked_region_count: lockedCount
                    });
                }
            }
        }

        const captureCategory = getRegionCaptureCategory(r.id);
        tile.dataset.state = String(captureCategory);

        if (indicator) {
            if (lockState.locked) {
                indicator.textContent = 'VERIFIED';
            } else {
                indicator.textContent = getRegionQualityGuidance(r, quality);
            }
        }
    });

    // Update regions-ready counter (desktop only — hidden on mobile via CSS)
    if (regionReadyCount) {
        const locked = REGIONS.filter(r => getRegionCaptureCategory(r.id) === 3).length;
        const captured = REGIONS.filter(r => getRegionCaptureCategory(r.id) >= 2).length;
        const total  = REGIONS.length;
        const focusRegion = REGIONS.find(r => getRegionCaptureCategory(r.id) < 2);
        regionReadyCount.classList.remove('hidden', 'all-locked');
        if (locked === 0) {
            regionReadyCount.textContent = captured > 0
                ? `${captured} of ${total} regions captured - hold steady`
                : 'Building region checklist - hold steady';
            regionReadyCount.style.color = '';
        } else if (locked < total - 1) {
            regionReadyCount.textContent = `${locked} of ${total} regions verified - focus on ${focusRegion?.name || 'remaining regions'}`;
            regionReadyCount.style.color = '#F0A030';
        } else if (locked === total - 1) {
            regionReadyCount.textContent = `${locked} of ${total} regions verified - almost done`;
            regionReadyCount.style.color = '#a0e080';
        } else {
            regionReadyCount.textContent = `ALL ${total} REGIONS VERIFIED`;
            regionReadyCount.style.color = '#00e676';
            regionReadyCount.classList.add('all-locked');
        }
    }

    // Update mobile progress list (only meaningful when visible)
    if (mobileScanProgress && !mobileScanProgress.classList.contains('hidden')) {
        REGIONS.forEach(r => {
            const cat = getRegionCaptureCategory(r.id);

            // Category can only go up within a scan
            if (cat > (bestRegionCategory[r.id] || 0)) bestRegionCategory[r.id] = cat;
            const displayCat = bestRegionCategory[r.id] || 0;

            const item = mobileScanProgress.querySelector(`[data-region="${r.id}"]`);
            if (!item) return;
            if (parseInt(item.getAttribute('data-state')) !== displayCat) {
                item.setAttribute('data-state', displayCat);
                item.querySelector('.msp-state').textContent = CAPTURE_LABELS[displayCat];
            }
        });
    }
}

function calculateMedianImageData(buffer) {
    if (buffer.length === 0) return null;
    // Avoid blur from mixing different poses/occlusions (e.g., glasses on/off); use sharpest frame.
    return buffer[0].data;
}

function calculateLegacyMedianImageData(buffer) {
    if (buffer.length === 0) return null;
    const width = buffer[0].data.width, height = buffer[0].data.height, size = width * height * 4;
    const result = new Uint8ClampedArray(size), numFrames = buffer.length;
    for (let i = 0; i < size; i += 4) {
        for (let channel = 0; channel < 3; channel++) {
            const values = [];
            for (let f = 0; f < numFrames; f++) values.push(buffer[f].data.data[i + channel]);
            values.sort((a, b) => a - b);
            result[i + channel] = values[Math.floor(numFrames / 2)];
        }
        result[i + 3] = 255; 
    }
    return new ImageData(result, width, height);
}

/* ---------------- UTILS & LIFECYCLE ---------------- */

function detectBlink(landmarks) {
    const ear = Math.abs(landmarks[159].y - landmarks[145].y) / Math.abs(landmarks[33].x - landmarks[133].x);
    if (ear < 0.14) { if (!eyeClosed) { eyeClosed = true; blinkCount++; } } else { eyeClosed = false; }
}

function getForeheadGreen(landmarks, video) {
    const fx = landmarks[151].x * video.videoWidth, fy = landmarks[151].y * video.videoHeight;
    offscreenCtx.drawImage(video, fx - 20, fy - 10, 40, 20, 0, 0, 40, 20);
    const d = offscreenCtx.getImageData(0, 0, 40, 20).data;
    let g = 0; for (let i = 1; i < d.length; i += 4) g += d[i];
    return g / (d.length / 4);
}

function captureCurrentFaceImageBase64() {
    if (!video.videoWidth || !video.videoHeight) return null;
    const c = document.createElement('canvas');
    c.width = video.videoWidth;
    c.height = video.videoHeight;
    const ctx = c.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', 0.9);
}

function completeScan() {
    document.body.classList.remove('scan-active');
    isAnalyzing = true;
    LOG.section('completeScan() — 15s scan finished');

    // Log final region lock summary
    const lockSummary = {};
    REGIONS.forEach(r => {
        const lock = regionLocks[r.id] || {};
        const buf  = regionBuffers[r.id] || [];
        lockSummary[r.name] = { locked: lock.locked, quality: lock.quality, framesBuffered: buf.length };
    });
    LOG.table('Final region lock summary', lockSummary);

    const unlockedRegions = REGIONS.filter(r => !regionLocks[r.id]?.locked).map(r => r.name);
    if (unlockedRegions.length) {
        LOG.warn('Regions NOT locked by scan end', unlockedRegions);
    } else {
        LOG.ok('All regions successfully locked');
    }
    const lockedRegionCount = REGIONS.length - unlockedRegions.length;
    trackAnalyticsEvent('scan_completed', {
        scan_duration_ms: Math.round(goodScanMs),
        locked_region_count: lockedRegionCount,
        unlocked_region_count: unlockedRegions.length,
        result_status: unlockedRegions.length ? 'partial' : 'success'
    });

    // Use the stabilization-phase face image (most centered frame), not the current frame
    _pendingFaceImageBase64 = stabilizationFaceImage;
    LOG.info('Using stabilization face image for HF', { present: !!_pendingFaceImageBase64 });

    scannerView.classList.add('hidden');
    setCameraPendingState(false);
    liveRegionRow.classList.add('hidden');
    if (mobileScanProgress) mobileScanProgress.classList.add('hidden');
    if (instructionOverlay) instructionOverlay.classList.add('hidden');

    // Show region confirmation view before proceeding to analysis
    populateRegionConfirmation();
    document.body.classList.add('region-confirm-active');
    regionConfirmationView.classList.remove('hidden');
    trackAnalyticsStage('review', 'region_review_view', {
        locked_region_count: lockedRegionCount,
        unlocked_region_count: unlockedRegions.length
    });
    LOG.ok('Region confirmation view shown — awaiting user confirmation');
}

function populateRegionConfirmation() {
    regionImagesGrid.innerHTML = '';
    REGIONS.forEach(r => {
        const buf  = regionBuffers[r.id] || [];

        const wrapper = document.createElement('div');
        wrapper.className = `confirm-region-card confirm-${r.id.replace('live-', '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        const label = document.createElement('div');
        label.className = 'confirm-region-name';
        label.textContent = r.name.toUpperCase();

        const selector = document.createElement('label');
        selector.className = 'confirm-region-selector';
        selector.setAttribute('aria-label', `Include ${r.name} in confirmed regions`);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.dataset.region = r.id;
        checkbox.addEventListener('change', () => {
            wrapper.classList.toggle('is-excluded', !checkbox.checked);
        });
        const selectorMark = document.createElement('span');
        selectorMark.setAttribute('aria-hidden', 'true');
        selector.appendChild(checkbox);
        selector.appendChild(selectorMark);

        const imageWrap = document.createElement('div');
        imageWrap.className = 'confirm-region-image-wrap';

        const cnv = document.createElement('canvas');
        cnv.className = 'confirm-region-canvas';

        if (buf.length > 0 && buf[0].data) {
            // Render at native resolution — ImageData already carries .width and .height
            const imgData = buf[0].data;
            cnv.width  = imgData.width;
            cnv.height = imgData.height;
            cnv.getContext('2d').putImageData(imgData, 0, 0);
        } else {
            cnv.width  = 200;
            cnv.height = 150;
            const ctx = cnv.getContext('2d');
            ctx.fillStyle = '#0d0d1a';
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = '#555';
            ctx.font = 'bold 13px Montserrat,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('NO DATA', cnv.width / 2, cnv.height / 2);
        }

        imageWrap.appendChild(cnv);
        imageWrap.appendChild(selector);
        wrapper.appendChild(label);
        wrapper.appendChild(imageWrap);
        regionImagesGrid.appendChild(wrapper);
    });
}

const REGION_PAYLOAD_KEYS = {
    'live-Forehead': 'forehead',
    'live-Nose': 'nose',
    'live-Left-Cheek': 'left_cheek',
    'live-Right-Cheek': 'right_cheek',
    'live-Chin': 'chin',
    'live-Jawline': 'jawline'
};

function metricClamp(v) {
    return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0));
}

function metricRound(v) {
    return Math.round(metricClamp(v) * 1000) / 1000;
}

function getConfirmedRegionIds() {
    const boxes = regionImagesGrid.querySelectorAll('.confirm-region-selector input[type="checkbox"]');
    if (!boxes.length) return new Set(REGIONS.map(r => r.id));
    return new Set([...boxes].filter(box => box.checked).map(box => box.dataset.region));
}

function extractSkinSignalMetrics(region, imgData, lockState) {
    const data = imgData?.data;
    const width = imgData?.width || 0;
    const height = imgData?.height || 0;
    if (!data || width < 2 || height < 2) return null;

    let lumSum = 0, lumSqSum = 0, gradSum = 0;
    let rSum = 0, gSum = 0, bSum = 0;
    let redCount = 0, redBrightCount = 0, glareCount = 0, darkSpotCount = 0;
    let leftLumSum = 0, rightLumSum = 0, leftCount = 0, rightCount = 0;
    const valid = (width - 1) * (height - 1);

    for (let y = 0; y < height - 1; y++) {
        for (let x = 0; x < width - 1; x++) {
            const i = (y * width + x) * 4;
            const r = data[i], g = data[i + 1], b = data[i + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            const lumX = 0.299 * data[i + 4] + 0.587 * data[i + 5] + 0.114 * data[i + 6];
            const rowNext = i + width * 4;
            const lumY = 0.299 * data[rowNext] + 0.587 * data[rowNext + 1] + 0.114 * data[rowNext + 2];

            lumSum += lum;
            lumSqSum += lum * lum;
            gradSum += Math.abs(lum - lumX) + Math.abs(lum - lumY);
            rSum += r; gSum += g; bSum += b;

            const redExcess = r - ((g + b) / 2);
            if (redExcess > 22 && r > 65) redCount++;
            if (redExcess > 28 && r > 120 && g > 55) redBrightCount++;

            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const v = maxC / 255;
            const s = maxC > 0 ? (maxC - minC) / maxC : 0;
            if (v > 0.90 && s < 0.16) glareCount++;

            if (x < width / 2) { leftLumSum += lum; leftCount++; }
            else { rightLumSum += lum; rightCount++; }
        }
    }

    const meanLum = lumSum / Math.max(1, valid);
    for (let y = 0; y < height - 1; y++) {
        for (let x = 0; x < width - 1; x++) {
            const i = (y * width + x) * 4;
            const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            if (lum < meanLum - 24) darkSpotCount++;
        }
    }

    const lumStd = Math.sqrt(Math.max(0, lumSqSum / Math.max(1, valid) - meanLum * meanLum));
    const gradMean = gradSum / Math.max(1, valid * 2);
    const redFrac = redCount / Math.max(1, valid);
    const redBrightFrac = redBrightCount / Math.max(1, valid);
    const glareFrac = glareCount / Math.max(1, valid);
    const darkFrac = darkSpotCount / Math.max(1, valid);
    const leftMean = leftLumSum / Math.max(1, leftCount);
    const rightMean = rightLumSum / Math.max(1, rightCount);

    const texture = metricClamp((gradMean / 30) * 0.58 + (lumStd / 58) * 0.42);
    const redness = metricClamp(redFrac / 0.14);
    const shine = metricClamp(glareFrac / 0.08);
    const pigmentation = metricClamp(darkFrac / 0.20);
    const toneVariance = metricClamp(lumStd / 62);
    const toneAsymmetry = metricClamp(Math.abs(leftMean - rightMean) / 58);
    const hydration = metricClamp(1 - (texture * 0.34 + pigmentation * 0.18 + shine * 0.16));
    const poreTexture = metricClamp((gradMean / 34) * 0.72 + shine * 0.18 + texture * 0.10);
    const fineLines = metricClamp((gradMean / 42) * 0.70 + (lumStd / 70) * 0.30);
    const acneRedness = metricClamp(redness * 0.70 + texture * 0.18 + shine * 0.12);

    const key = REGION_PAYLOAD_KEYS[region.id];
    const metrics = {
        _meta: {
            selected: true,
            source: 'client_image_proxy',
            metrics_version: 'visible-signal-v1',
            quality: Math.round(lockState?.quality || regionBuffers[region.id]?.[0]?.quality || 0),
            locked: !!lockState?.locked,
            crop_width: width,
            crop_height: height
        },
        erythema_index: metricRound(redness),
        texture_variance: metricRound(texture),
        hydration_proxy: metricRound(hydration)
    };

    if (['forehead', 'nose'].includes(key)) {
        metrics.gloss_reflectance_score = metricRound(shine);
        metrics.pore_diameter_variance = metricRound(poreTexture);
        metrics.comedone_density = metricRound(metricClamp((poreTexture * 0.55) + (shine * 0.30) + (darkFrac / 0.24) * 0.15));
    }
    if (['left_cheek', 'right_cheek'].includes(key)) {
        metrics.pih_density = metricRound(pigmentation);
        metrics.hyperpigmented_lesion_count = metricRound(metricClamp(darkFrac / 0.12));
        metrics.melanin_variance_score = metricRound(toneVariance);
        metrics.tone_asymmetry_score = metricRound(toneAsymmetry);
        metrics.papule_density = metricRound(acneRedness);
    }
    if (key === 'chin' || key === 'jawline') {
        metrics.papule_density = metricRound(acneRedness);
        metrics.pustule_density = metricRound(metricClamp(redBrightFrac / 0.08));
        metrics.comedone_density = metricRound(metricClamp((poreTexture * 0.45) + (darkFrac / 0.20) * 0.25));
    }
    if (key === 'forehead' || key === 'jawline') {
        metrics.wrinkle_depth_index = metricRound(fineLines);
        metrics.fine_line_density = metricRound(fineLines);
    }
    if (key === 'jawline') {
        metrics.sagging_index = metricRound(metricClamp(toneAsymmetry * 0.45 + texture * 0.22));
        metrics.elasticity_proxy = metricRound(metricClamp(1 - (texture * 0.34 + toneAsymmetry * 0.26)));
    }

    return metrics;
}

function buildVerifiedRegionPayload() {
    const selectedIds = getConfirmedRegionIds();
    const regions = {};
    const region_meta = {};
    const region_images = {};

    REGIONS.forEach(region => {
        const key = REGION_PAYLOAD_KEYS[region.id];
        const selected = selectedIds.has(region.id);
        const lockState = regionLocks[region.id] || {};
        const best = regionBuffers[region.id]?.[0];

        region_meta[key] = {
            selected,
            locked: !!lockState.locked,
            quality: Math.round(lockState.quality || best?.quality || 0),
            frames_buffered: regionBuffers[region.id]?.length || 0
        };

        if (!selected || !best?.data) return;

        // Capture base64 of the verified region crop
        try {
            const tempCnv = document.createElement('canvas');
            tempCnv.width = best.data.width;
            tempCnv.height = best.data.height;
            tempCnv.getContext('2d').putImageData(best.data, 0, 0);
            region_images[key] = tempCnv.toDataURL('image/jpeg', 0.8);
        } catch (e) {
            LOG.err(`Failed to capture base64 for region ${key}`, e);
        }

        const metrics = extractSkinSignalMetrics(region, best.data, lockState);
        if (metrics) regions[key] = metrics;
    });

    return { regions, region_meta, region_images };
}

async function proceedToAnalysis() {
    LOG.section('proceedToAnalysis() — user confirmed regions, preparing backend payload');

    // faceImageBase64 was captured at stabilization and stored
    const faceImageBase64 = _pendingFaceImageBase64;

    document.body.classList.remove('region-confirm-active');
    document.body.classList.remove('home-active');
    regionConfirmationView.classList.add('hidden');
    analysisView.classList.remove('hidden');

    const bpm = BIOMETRIC_PLACEHOLDERS.bpm;
    const resp = BIOMETRIC_PLACEHOLDERS.respiration;
    const blinks = BIOMETRIC_PLACEHOLDERS.blinkRate;

    LOG.info('Biometric sampling disabled — sending placeholders for backend compatibility', {
        bpm,
        respiration: resp,
        blinkRate: blinks
    });

    previewBPM.textContent = '--';
    previewResp.textContent = '--';
    previewBlink.textContent = '--';

    const verifiedPayload = buildVerifiedRegionPayload();
    const selectedRegionCount = Object.values(verifiedPayload.region_meta).filter(r => r.selected).length;
    if (selectedRegionCount === 0) {
        LOG.warn('No regions selected at confirmation; backend will return low-confidence result');
    }
    trackAnalyticsStage('analysis', 'analysis_requested', {
        selected_region_count: selectedRegionCount,
        payload_region_count: Object.keys(verifiedPayload.regions).length
    });
    const analyticsContext = await getAnalyticsContextForBackend();

    const payload = {
        regions:           verifiedPayload.regions,
        region_meta:       verifiedPayload.region_meta,
        region_images:     verifiedPayload.region_images,
        global:            { environment_type: "urban" },
        biometrics:        { bpm, respiration: resp, blinkRate: blinks },
        face_image_base64: faceImageBase64,
        analytics_context: analyticsContext
    };

    LOG.group('FULL PAYLOAD BEING SENT TO POST /analyze-face', () => {
        LOG.info('regions (keys present)', Object.keys(payload.regions));
        LOG.info('global', payload.global);
        LOG.info('biometrics (placeholders; live sampling disabled)', payload.biometrics);
        LOG.info('region_meta', payload.region_meta);
        LOG.info('face_image_base64 source', faceImageBase64 ? 'stabilization snapshot' : 'none');
        LOG.info('regions source', 'selected verified region crops → visible-signal proxy metrics');
        const payloadSizeKB = Math.round(JSON.stringify({ ...payload, face_image_base64: '...' }).length / 1024);
        LOG.info('Payload size (excl. image)', payloadSizeKB + ' KB');
    });

    const analysisExpectedMs = 30000;
    const loadingStages = [
        { at: 0, stage: 0, text: 'Preparing your verified face crops...' },
        { at: 4500, stage: 0, text: 'Packaging full-face and region images...' },
        { at: 9000, stage: 1, text: 'AI skin review is reading visible signals...' },
        { at: 15500, stage: 1, text: 'Checking scores against region evidence...' },
        { at: 21500, stage: 2, text: 'Building your priority care map...' },
        { at: 28500, stage: 2, text: 'Finalizing your shareable report...' }
    ];
    const analysisStart = Date.now();
    let activeLoadingIndex = -1;
    const updateAnalysisLoading = () => {
        const elapsed = Date.now() - analysisStart;
        const progress = elapsed <= analysisExpectedMs
            ? Math.min(94, Math.round((elapsed / analysisExpectedMs) * 94))
            : Math.min(98, 94 + Math.round(((elapsed - analysisExpectedMs) / 30000) * 4));
        deepProgressFill.style.width = `${progress}%`;
        const nextIndex = loadingStages.reduce((last, stage, index) => elapsed >= stage.at ? index : last, 0);
        if (nextIndex !== activeLoadingIndex) {
            activeLoadingIndex = nextIndex;
            const current = loadingStages[nextIndex];
            if (dynamicLoadingText) dynamicLoadingText.textContent = current.text;
            setAnalysisStageState(current.stage);
        }
        if (analysisTimeHint) {
            const elapsedSec = Math.max(1, Math.round(elapsed / 1000));
            analysisTimeHint.textContent = elapsed < analysisExpectedMs ? `${elapsedSec}s / up to 30s` : 'Still working';
        }
    };
    updateAnalysisLoading();
    const deepTimer = setInterval(updateAnalysisLoading, 300);
    let fetchStart = Date.now();

    try {
        LOG.info('Sending POST /analyze-face...');
        fetchStart = Date.now();

        let response;
        try {
            response = await fetch('https://face3layerscanner.onrender.com/analyze-face', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (netErr) {
            LOG.warn('Direct fetch failed, trying local proxy fallback...', { error: netErr });
            response = await fetch('/analyze-face/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        }

        const fetchMs = Date.now() - fetchStart;
        LOG.ok(`Response received in ${fetchMs}ms`, { status: response.status, ok: response.ok });

        clearInterval(deepTimer);
        if (!response.ok) {
            let errorMessage = `Request failed (${response.status})`;
            try {
                const errorPayload = await response.json();
                errorMessage = errorPayload.message || errorMessage;
            } catch (_) {}
            LOG.err('Backend returned error', { status: response.status, message: errorMessage });
            throw new Error(errorMessage);
        }

        deepProgressFill.style.width = '100%';
        if (dynamicLoadingText) dynamicLoadingText.textContent = 'Report ready. Opening results...';
        if (analysisTimeHint) analysisTimeHint.textContent = `${Math.max(1, Math.round(fetchMs / 1000))}s`;
        setAnalysisStageState(0, true);

        const result = await response.json();
        const markerCount = getDiagnosisMarkerCount(result.diagnoses?.diagnosis_2 || result);
        trackAnalyticsEvent('analysis_completed', {
            analysis_duration_ms: fetchMs,
            confidence_score: Number(result.confidence) || 0,
            confidence_bucket: getScoreBucket(result.confidence),
            marker_count: markerCount,
            marker_count_bucket: getCountBucket(markerCount),
            result_status: 'success'
        });

        LOG.group('BACKEND RESPONSE', () => {
            LOG.info('success', result.success);
            LOG.info('confidence', result.confidence + '%');
            LOG.info('age_estimation', result.age_estimation);
            LOG.info('demographics', result.demographics);
            LOG.info('dermatology_summary', result.dermatology_summary);
            LOG.info('data_source', result.data_source);
            LOG.info('full_diagnoses', result.diagnoses);
            if (result.analysis_warnings?.length) LOG.warn('analysis_warnings', result.analysis_warnings);
            const pillarTable = {};
            Object.entries(result.pillars || {}).forEach(([k, v]) => {
                pillarTable[k] = { score: v?.score, state: v?.state, driver: v?.driver_region };
            });
            LOG.table('Pillar scores', pillarTable);
            if (result.confidence < 50) LOG.warn('Confidence below 50% — very few metrics received by backend');
            const nullPillars = Object.entries(result.pillars || {}).filter(([, v]) => !v).map(([k]) => k);
            if (nullPillars.length) LOG.warn('Pillars returned null (no region data matched)', nullPillars);
        });

        // Save scan log to server, then show results with download button
        const scanMeta = {
            scanDate: new Date().toISOString(),
            bpm, resp, blinks,
            biometricSampling: 'disabled_placeholders',
            faceMeshTargetFps: FACE_MESH_TARGET_FPS,
            faceMeshSkippedFrameCount,
            regionAnalysisTargetFps: REGION_ANALYSIS_TARGET_FPS,
            regionAnalysisSkippedFrameCount,
            regionLockSummary: Object.fromEntries(REGIONS.map(r => [r.name, regionLocks[r.id] || {}])),
            backendResult: { confidence: result.confidence, age_estimation: result.age_estimation, dermatology_summary: result.dermatology_summary }
        };
        const savedFilename = await sendLogToServer(scanMeta);
        LOG.ok('Scan complete — proceeding to results');

        setTimeout(() => {
            analysisView.classList.add('hidden');
            showResults(result, { bpm, resp, blinks }, faceImageBase64, savedFilename, verifiedPayload.region_images);
        }, 1000);
    } catch (err) {
        clearInterval(deepTimer);
        LOG.err('Fetch/analysis failed', err.message);
        trackAnalyticsEvent('analysis_failed', {
            error_stage: 'frontend_fetch',
            error_type: sanitizeAnalyticsText(err?.name || err?.message || 'analysis_failed'),
            analysis_duration_ms: Math.max(0, Date.now() - fetchStart),
            result_status: 'failed'
        });
        alert(`Analysis Error: ${err.message}`);
        resetScanner();
    }
}

function calculateBPM(samples) {
    // Need at least 30 samples (~1s of data) to attempt a calculation
    if (samples.length < 30) {
        LOG.warn('calculateBPM: too few samples for any estimate', { samples: samples.length });
        return null;
    }
    const signal   = samples.map(s => s.g);
    const filtered = detrend(signal, 5);
    const smoothed = movingAverage(filtered, 3);
    let peaks = 0;
    const threshold = getStandardDeviation(smoothed) * 0.8;
    for (let i = 2; i < smoothed.length - 2; i++) {
        if (smoothed[i] > smoothed[i - 1] && smoothed[i] > smoothed[i + 1] && smoothed[i] > threshold) {
            peaks++;
            i += 5;
        }
    }
    const durationSecs = (samples[samples.length - 1].t - samples[0].t) / 1000;
    if (durationSecs < 0.5) return null;
    const bpm = Math.round((peaks / durationSecs) * 60);
    const reliable = samples.length >= 100;
    if (!reliable) LOG.warn('calculateBPM: result may be noisy — fewer than 100 samples', { samples: samples.length, bpm });
    return Math.min(Math.max(bpm, 40), 130); // wider range: don't over-clamp low-sample results
}

function movingAverage(arr, window) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0, count = 0;
        for (let j = Math.max(0, i - window); j <= Math.min(arr.length - 1, i + window); j++) { sum += arr[j]; count++; }
        res.push(sum / count);
    }
    return res;
}

function getStandardDeviation(array) {
    const mean = array.reduce((a, b) => a + b) / array.length;
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / array.length);
}

function calculateRespiration(samples) {
    if (samples.length < 20) {
        LOG.warn('calculateRespiration: too few samples', { samples: samples.length });
        return null;
    }
    const d = detrend(samples.map(s => s.y), 20);
    let c = 0;
    for (let i = 1; i < d.length; i++) {
        if ((d[i-1] < 0 && d[i] >= 0) || (d[i-1] > 0 && d[i] <= 0)) c++;
    }
    const durationSecs = (samples[samples.length - 1].t - samples[0].t) / 1000 || (SCAN_DURATION / 1000);
    const resp = Math.min(Math.max(Math.round((c / 2 / durationSecs) * 60), 8), 30);
    if (samples.length < 50) LOG.warn('calculateRespiration: result may be imprecise — fewer than 50 samples', { samples: samples.length, resp });
    return resp;
}

function detrend(arr, w) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const start = Math.max(0, i - w), end = Math.min(arr.length - 1, i + w);
        let s = 0; for (let j = start; j <= end; j++) s += arr[j];
        res.push(arr[i] - (s / (end - start + 1)));
    }
    return res;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[ch]));
}

function getDiagnosisOverall(diagnosis) {
    let total = 0, count = 0;
    Object.values(diagnosis?.pillars || {}).forEach(p => {
        if (p && typeof p.score === 'number') {
            total += p.score;
            count++;
        }
    });
    return count > 0 ? Math.round(total / count) : null;
}

function getDiagnosisSet(data) {
    const fallbackDiagnosis1 = {
        available: true,
        label: 'Diagnosis 1: Region Scan',
        data_source: data.data_source || 'verified_region_visible_signal_proxies',
        demographics: data.demographics,
        pillars: data.pillars,
        dermatology_summary: data.dermatology_summary,
        confidence: data.confidence,
        analysis_warnings: data.analysis_warnings || [],
        age_estimation: data.age_estimation
    };
    const d1 = data.diagnoses?.diagnosis_1 || fallbackDiagnosis1;
    const d2 = data.diagnoses?.diagnosis_2 || {
        available: false,
        label: 'Diagnosis 2: Professional AI Vision',
        confidence: 0,
        demographics: { biological_skin_age: '--', gender: '--' },
        pillars: {},
        dermatology_summary: { primary_finding: 'Full-face AI review unavailable' },
        analysis_warnings: ['Diagnosis 2 was not returned by the backend.']
    };
    return [d1, d2];
}

function getScoreStateClass(score) {
    if (score >= 80) return 'state-optimal';
    if (score < 50) return 'state-priority';
    return 'state-attention';
}

function getPillarDisplayName(pillarName) {
    const names = {
        Oil_Balance: 'Oil Balance',
        Breakouts_Skin_Calmness: 'Breakouts',
        Evenness_Marks: 'Evenness',
        Skin_Strength_Sensitivity: 'Sensitivity',
        Smoothness_Pore_Look: 'Smoothness',
        Firmness_Fine_Lines: 'Fine Lines'
    };
    return names[pillarName] || pillarName.replaceAll('_', ' ');
}

function getPillarFullName(pillarName) {
    return pillarName.replaceAll('_', ' ');
}

function setExpandedMetric(card, expand) {
    const detail = card.querySelector('.result-score-detail');
    const toggle = card.querySelector('.result-score-toggle');
    card.classList.toggle('is-open', expand);
    if (detail) detail.hidden = !expand;
    if (toggle) toggle.setAttribute('aria-expanded', expand ? 'true' : 'false');
}

function createResultScoreCard(config) {
    const card = document.createElement('div');
    card.className = `result-score-card ${config.stateClass || 'state-attention'}`;
    if (config.id) card.id = config.id;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'result-score-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `View details for ${config.fullTitle || config.title}`);
    toggle.innerHTML = `
        <span class="metric-title">${escapeHtml(config.title)}</span>
        <span class="metric-score">${escapeHtml(String(config.value ?? '--'))}</span>
        <span class="metric-unit">${escapeHtml(config.unit || 'score')}</span>
        <span class="metric-expand" aria-hidden="true">+</span>
    `;

    const detail = document.createElement('div');
    detail.className = 'result-score-detail';
    detail.hidden = true;
    detail.innerHTML = `
        <div class="result-detail-title">${escapeHtml(config.fullTitle || config.title)}</div>
        ${config.detailHtml}
    `;

    toggle.addEventListener('click', () => {
        const dashboard = card.closest('.score-dashboard');
        const shouldOpen = !card.classList.contains('is-open');
        if (dashboard) {
            dashboard.querySelectorAll('.result-score-card.is-open').forEach(openCard => {
                if (openCard !== card) setExpandedMetric(openCard, false);
            });
        }
        setExpandedMetric(card, shouldOpen);
        if (shouldOpen) {
            trackAnalyticsEvent('score_card_expand', {
                card_type: sanitizeAnalyticsText(config.analyticsType || config.title),
                pillar_name: config.pillarName ? sanitizeAnalyticsText(config.pillarName) : 'none'
            });
        }
        if (shouldOpen && window.matchMedia('(max-width: 768px)').matches) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    card.appendChild(toggle);
    card.appendChild(detail);
    return card;
}

function createPillarDetailHtml(pillar) {
    const commonalityHtml = `<p class="perf-obs">Commonality: <strong>${escapeHtml(pillar.commonality || 'Common')}</strong></p>`;
    let evidenceHtml = '';
    if (pillar.evidence_signals && pillar.evidence_signals.length > 0) {
        evidenceHtml = `<p class="perf-obs">Observations: ${pillar.evidence_signals.map(s => `<strong>${escapeHtml(s)}</strong>`).join(', ')}</p>`;
    }

    return `
        ${commonalityHtml}
        <p class="perf-obs"><strong>${escapeHtml(pillar.state)}</strong> - detected in ${escapeHtml(pillar.driver_region || 'full face')}.</p>
        ${evidenceHtml}
        <div class="perf-insight">${escapeHtml(pillar.insight || '')}</div>
    `;
}

const PILLAR_HEALTHY_THRESHOLDS = {
    Oil_Balance: 75,
    Breakouts_Skin_Calmness: 80,
    Evenness_Marks: 80,
    Skin_Strength_Sensitivity: 75,
    Smoothness_Pore_Look: 75,
    Firmness_Fine_Lines: 80
};

const REGION_LABELS = {
    forehead: 'Forehead',
    nose: 'Nose',
    left_cheek: 'Left Cheek',
    right_cheek: 'Right Cheek',
    chin: 'Chin',
    jawline: 'Jawline',
    full_face: 'Full Face'
};

const MARKER_LABELS = {
    Oil_Balance: 'Oil',
    Breakouts_Skin_Calmness: 'Breakouts',
    Evenness_Marks: 'Marks',
    Skin_Strength_Sensitivity: 'Sensitivity',
    Smoothness_Pore_Look: 'Texture',
    Firmness_Fine_Lines: 'Lines'
};

const REGION_STATUS_CHIP_LABELS = {
    stable: 'Stable crop',
    watch_only: 'Watch signals',
    highlighted: 'Highlighted',
    limited: 'Image limited',
    not_usable: 'Crop unclear'
};

const REGION_STATUS_CHIP_TONES = {
    stable: 'stable',
    watch_only: 'attention',
    highlighted: 'priority',
    limited: 'limited',
    not_usable: 'limited'
};

const REGION_CHIP_CANVAS_COLORS = {
    stable: '#9CE6BF',
    attention: '#FFD18C',
    priority: '#FFB3AE',
    limited: '#C4A898',
    region: '#9CE6BF',
    pillar: '#F6B184',
    neutral: '#C4A898'
};

function normalizeRegionKey(region) {
    return String(region || '')
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_');
}

function getMarkerPosition(regionKey, pillarName, index = 0) {
    const fallback = [
        { x: 50, y: 46 },
        { x: 38, y: 56 },
        { x: 62, y: 56 }
    ];
    const positions = {
        forehead: {
            Oil_Balance: { x: 50, y: 42 },
            Breakouts_Skin_Calmness: { x: 42, y: 54 },
            Evenness_Marks: { x: 58, y: 48 },
            Skin_Strength_Sensitivity: { x: 45, y: 46 },
            Smoothness_Pore_Look: { x: 55, y: 56 },
            Firmness_Fine_Lines: { x: 50, y: 34 }
        },
        nose: {
            Oil_Balance: { x: 50, y: 38 },
            Breakouts_Skin_Calmness: { x: 48, y: 58 },
            Evenness_Marks: { x: 56, y: 48 },
            Skin_Strength_Sensitivity: { x: 42, y: 48 },
            Smoothness_Pore_Look: { x: 52, y: 52 },
            Firmness_Fine_Lines: { x: 50, y: 32 }
        },
        left_cheek: {
            Oil_Balance: { x: 52, y: 50 },
            Breakouts_Skin_Calmness: { x: 48, y: 54 },
            Evenness_Marks: { x: 56, y: 45 },
            Skin_Strength_Sensitivity: { x: 44, y: 46 },
            Smoothness_Pore_Look: { x: 52, y: 58 },
            Firmness_Fine_Lines: { x: 62, y: 35 }
        },
        right_cheek: {
            Oil_Balance: { x: 48, y: 50 },
            Breakouts_Skin_Calmness: { x: 52, y: 54 },
            Evenness_Marks: { x: 44, y: 45 },
            Skin_Strength_Sensitivity: { x: 56, y: 46 },
            Smoothness_Pore_Look: { x: 48, y: 58 },
            Firmness_Fine_Lines: { x: 38, y: 35 }
        },
        chin: {
            Oil_Balance: { x: 50, y: 48 },
            Breakouts_Skin_Calmness: { x: 50, y: 56 },
            Evenness_Marks: { x: 58, y: 50 },
            Skin_Strength_Sensitivity: { x: 42, y: 50 },
            Smoothness_Pore_Look: { x: 50, y: 62 },
            Firmness_Fine_Lines: { x: 50, y: 38 }
        },
        jawline: {
            Oil_Balance: { x: 50, y: 46 },
            Breakouts_Skin_Calmness: { x: 34, y: 58 },
            Evenness_Marks: { x: 66, y: 54 },
            Skin_Strength_Sensitivity: { x: 42, y: 50 },
            Smoothness_Pore_Look: { x: 58, y: 56 },
            Firmness_Fine_Lines: { x: 50, y: 48 }
        }
    };
    return positions[regionKey]?.[pillarName] || fallback[index % fallback.length];
}

function markerSeverityClass(severity, score) {
    if (severity === 'strong' || score < 50) return 'priority';
    return 'attention';
}

function markerCoordinate(value, fallback) {
    return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : fallback;
}

function deriveRegionDisplayStatus(summary = {}, quality = {}) {
    if (quality.usable === false || quality.quality === 'not_usable') return 'not_usable';
    if (quality.quality === 'limited') return 'limited';
    if (summary.marker === true) return 'highlighted';
    const watchSignals = Array.isArray(summary.watch_signals) ? summary.watch_signals.filter(Boolean) : [];
    if (watchSignals.length) return 'watch_only';
    return 'stable';
}

function getRegionStatusChip(regionKey, findings, diagnosis) {
    if (findings.length) return null;
    const summary = diagnosis.region_summary?.[regionKey] || {};
    const quality = diagnosis.region_quality?.[regionKey] || {};
    const status = REGION_STATUS_CHIP_LABELS[summary.display_status]
        ? summary.display_status
        : deriveRegionDisplayStatus(summary, quality);
    const tone = ['stable', 'attention', 'priority', 'limited'].includes(summary.chip_tone)
        ? summary.chip_tone
        : REGION_STATUS_CHIP_TONES[status];
    const label = String(summary.chip_label || REGION_STATUS_CHIP_LABELS[status] || 'Crop reviewed')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 32);
    return {
        label: label || REGION_STATUS_CHIP_LABELS[status] || 'Crop reviewed',
        tone: tone || 'stable'
    };
}

function buildRegionFindingsFromGeminiMarkers(diagnosis) {
    const markers = Array.isArray(diagnosis.region_markers) ? diagnosis.region_markers : [];
    if (!markers.length) return null;

    const findings = {};
    markers.forEach((marker) => {
        const regionKey = normalizeRegionKey(marker.region);
        const pillarName = marker.pillar;
        if (!REGION_LABELS[regionKey] || !PILLAR_HEALTHY_THRESHOLDS[pillarName]) return;

        const pillar = diagnosis.pillars?.[pillarName] || {};
        const position = getMarkerPosition(regionKey, pillarName, findings[regionKey]?.length || 0);
        const score = typeof pillar.score === 'number' ? pillar.score : marker.confidence;
        findings[regionKey] ||= [];
        findings[regionKey].push({
            pillarName,
            label: marker.label || MARKER_LABELS[pillarName] || getPillarDisplayName(pillarName),
            state: pillar.state || marker.visual_basis || 'Visible signal',
            score,
            evidence: marker.visual_basis ? [marker.visual_basis] : (Array.isArray(pillar.evidence_signals) ? pillar.evidence_signals : []),
            insight: pillar.insight || marker.visual_basis || '',
            severity: markerSeverityClass(marker.severity, score),
            x: markerCoordinate(marker.x_percent, position.x),
            y: markerCoordinate(marker.y_percent, position.y)
        });
    });

    return Object.keys(findings).length ? findings : null;
}

function buildRegionFindings(diagnosis) {
    const markerFindings = buildRegionFindingsFromGeminiMarkers(diagnosis);
    if (markerFindings) return markerFindings;

    const findings = {};
    Object.entries(diagnosis.pillars || {}).forEach(([pillarName, pillar]) => {
        if (!pillar || typeof pillar.score !== 'number') return;
        const threshold = PILLAR_HEALTHY_THRESHOLDS[pillarName] ?? 75;
        if (pillar.score >= threshold) return;

        const regionKey = normalizeRegionKey(pillar.driver_region);
        if (!regionKey || regionKey === 'full_face') return;

        const position = getMarkerPosition(regionKey, pillarName, findings[regionKey]?.length || 0);
        const severity = pillar.score < 50 ? 'priority' : 'attention';
        findings[regionKey] ||= [];
        findings[regionKey].push({
            pillarName,
            label: MARKER_LABELS[pillarName] || getPillarDisplayName(pillarName),
            state: pillar.state || 'Visible signal',
            score: pillar.score,
            evidence: Array.isArray(pillar.evidence_signals) ? pillar.evidence_signals : [],
            insight: pillar.insight || '',
            severity,
            x: position.x,
            y: position.y
        });
    });
    return findings;
}

function getRegionSummary(regionKey, findings, diagnosis) {
    const regionSummary = diagnosis.region_summary?.[regionKey];
    if (regionSummary?.summary) return String(regionSummary.summary).slice(0, 220);

    if (regionSummary) {
        const positive = Array.isArray(regionSummary.positive_signals) ? regionSummary.positive_signals.filter(Boolean).slice(0, 2) : [];
        const watch = Array.isArray(regionSummary.watch_signals) ? regionSummary.watch_signals.filter(Boolean).slice(0, 2) : [];
        if (watch.length) return `Watch signals: ${watch.join(', ')}. ${positive.length ? `Stable signals: ${positive.join(', ')}.` : ''}`.slice(0, 220);
        if (positive.length) return `Stable signals: ${positive.join(', ')}. ${regionSummary.no_marker_reason || ''}`.slice(0, 220);
        if (regionSummary.no_marker_reason) return String(regionSummary.no_marker_reason).slice(0, 220);
    }

    const scratchpad = diagnosis.clinical_scratchpad || {};
    const scratch = scratchpad[regionKey] || scratchpad[regionKey.replace('_', ' ')];
    if (scratch) return String(scratch).slice(0, 220);

    if (!findings.length) {
        return 'No focused concern was highlighted in this crop. Visible balance looks comparatively stable in the submitted region.';
    }

    const states = findings.map(f => f.state).filter(Boolean).slice(0, 2).join(', ');
    const positives = findings.length === 1 ? 'Other visible signals remain comparatively lower priority.' : 'The remaining signals should be interpreted together, not in isolation.';
    return `${states || 'Visible signal'} is the main returned focus here. ${positives}`;
}

function getLowestPillarFocus(diagnosis) {
    return Object.entries(diagnosis.pillars || {})
        .filter(([, pillar]) => pillar && typeof pillar.score === 'number')
        .sort((a, b) => a[1].score - b[1].score)[0] || [];
}

function getPrimaryRegionFinding(diagnosis) {
    const regionFindings = buildRegionFindings(diagnosis);
    const severityRank = { priority: 2, attention: 1, stable: 0 };
    return Object.entries(regionFindings)
        .flatMap(([regionKey, findings]) => findings.map(finding => ({ ...finding, regionKey })))
        .sort((a, b) => (severityRank[b.severity] || 0) - (severityRank[a.severity] || 0) || (a.score ?? 100) - (b.score ?? 100))[0] || null;
}

function normalizeActionStep(item) {
    if (!item) return null;
    if (typeof item === 'object') {
        const title = String(item.title || '').trim();
        const why = String(item.why || '').trim();
        if (!title) return null;
        return { title: title.slice(0, 42), why: why.slice(0, 120) };
    }
    const title = String(item).trim();
    return title ? { title: title.slice(0, 42), why: '' } : null;
}

function getActionPlanViewModel(diagnosis) {
    const priority = diagnosis.priority_focus || {};
    const plan = diagnosis.action_plan || {};
    const rawFocus = plan.top_focus && typeof plan.top_focus === 'object' ? plan.top_focus : {};
    const primaryFinding = getPrimaryRegionFinding(diagnosis);
    const [lowestPillarName, lowestPillar] = getLowestPillarFocus(diagnosis);
    const sourcePillar = rawFocus.source_pillar || primaryFinding?.pillarName || lowestPillarName || '';
    const sourceRegion = normalizeRegionKey(rawFocus.source_region || primaryFinding?.regionKey || lowestPillar?.driver_region || '');
    const hasRawScore = rawFocus.source_score !== null && rawFocus.source_score !== undefined && rawFocus.source_score !== '';
    const sourceScore = hasRawScore && Number.isFinite(Number(rawFocus.source_score))
        ? Number(rawFocus.source_score)
        : (primaryFinding?.score ?? lowestPillar?.score ?? null);
    const markerFound = !!primaryFinding && (!sourceRegion || primaryFinding.regionKey === sourceRegion);
    const severity = ['priority', 'attention', 'stable'].includes(rawFocus.severity)
        ? rawFocus.severity
        : (sourceScore !== null ? (sourceScore < 50 ? 'priority' : (sourceScore >= 80 ? 'stable' : 'attention')) : 'attention');
    const focusLabel = String(
        rawFocus.label ||
        (typeof plan.top_focus === 'string' ? plan.top_focus : '') ||
        (sourceRegion && sourcePillar ? `${getPillarDisplayName(sourcePillar)} focus on ${REGION_LABELS[sourceRegion] || sourceRegion}` : '') ||
        priority.technical ||
        'Maintenance-only skin support'
    ).replace(/\s+/g, ' ').trim();
    const whySelected = String(
        rawFocus.why_selected ||
        plan.why_this_matters ||
        primaryFinding?.insight ||
        lowestPillar?.insight ||
        priority.layman ||
        'This is the most useful focus returned by your visible-signal scan.'
    ).replace(/\s+/g, ' ').trim();

    const actions = (Array.isArray(plan.next_7_days) ? plan.next_7_days : [])
        .map(normalizeActionStep)
        .filter(Boolean);
    const dailyScanAction = {
        title: 'Daily scan',
        why: String(plan.track || 'Take a daily scan to compare this focus and score trend.').slice(0, 120)
    };
    const hasDailyScan = actions.some(action => /daily|scan|track/i.test(`${action.title} ${action.why}`));
    const compactActions = hasDailyScan ? actions.slice(0, 3) : [...actions.slice(0, 2), dailyScanAction];
    while (compactActions.length < 3) {
        const fallback = [
            { title: 'Keep routine steady', why: 'Avoid changing too many variables while you watch this signal.' },
            { title: 'Support barrier', why: 'Keep cleansing and moisturising gentle around the focus area.' },
            dailyScanAction
        ][compactActions.length];
        compactActions.push(fallback);
    }

    const avoid = (Array.isArray(plan.avoid_for_now) ? plan.avoid_for_now : [])
        .filter(Boolean)
        .slice(0, 2)
        .map(item => String(item).trim());
    if (!avoid.length) avoid.push('Harsh scrubs', 'Too many new actives');
    const help = Array.isArray(plan.when_to_get_help) && plan.when_to_get_help.length
        ? String(plan.when_to_get_help[0]).trim()
        : 'Get help for painful, spreading, bleeding, changing, or persistent concerns.';
    const evidence = [];
    if (sourceRegion && REGION_LABELS[sourceRegion]) evidence.push({ label: REGION_LABELS[sourceRegion], tone: 'region' });
    if (sourcePillar) evidence.push({ label: getPillarDisplayName(sourcePillar), tone: 'pillar' });
    if (sourceScore !== null && sourceScore !== undefined) evidence.push({ label: `${sourceScore} score`, tone: severity });
    evidence.push({ label: markerFound ? 'Marker found' : 'Score focus', tone: markerFound ? severity : 'neutral' });

    return {
        focusLabel: focusLabel.slice(0, 130),
        whySelected: whySelected.slice(0, 180),
        sourceRegion,
        sourcePillar,
        sourceScore,
        severity,
        markerFound,
        evidence,
        actions: compactActions.slice(0, 3),
        avoid,
        track: dailyScanAction.why,
        help
    };
}

function createActionPlanSection(actionPlan) {
    const section = document.createElement('div');
    const severityClass = ['priority', 'attention', 'stable'].includes(actionPlan.severity) ? actionPlan.severity : 'attention';
    section.className = `actionable-focus action-map state-${severityClass}`;
    const evidenceHtml = actionPlan.evidence.map(chip =>
        `<span class="action-evidence-chip ${escapeHtml(chip.tone)}">${escapeHtml(chip.label)}</span>`
    ).join('');
    const actionsHtml = actionPlan.actions.map((action, index) => `
        <div class="action-step-tile">
            <span class="action-step-number">${index + 1}</span>
            <strong>${escapeHtml(action.title)}</strong>
            <small>${escapeHtml(action.why)}</small>
        </div>
    `).join('');
    const avoidHtml = actionPlan.avoid.map(item => `<span>${escapeHtml(item)}</span>`).join('');
    section.innerHTML = `
        <div class="action-map-header">
            <div>
                <span>Priority Care Map</span>
                <h3>${escapeHtml(actionPlan.focusLabel)}</h3>
            </div>
            <strong>${escapeHtml(actionPlan.sourceScore ?? '--')}</strong>
        </div>
        <div class="action-evidence-row">${evidenceHtml}</div>
        <p class="action-why">${escapeHtml(actionPlan.whySelected)}</p>
        <div class="action-step-grid">${actionsHtml}</div>
        <div class="action-avoid-strip">
            <strong>Hold off</strong>
            <div>${avoidHtml}</div>
        </div>
        <div class="action-track-strip">
            <strong>Daily scan</strong>
            <span>${escapeHtml(actionPlan.track)}</span>
        </div>
        <details class="action-help-note">
            <summary>When to get help</summary>
            <p>${escapeHtml(actionPlan.help)}</p>
        </details>
    `;
    return section;
}

function createEvidenceImageItem({ label, src, findings = [], macro = false }) {
    const item = document.createElement('div');
    item.className = `evidence-item${macro ? ' macro-item' : ''}${findings.length ? ' has-markers' : ''}`;
    item.setAttribute('data-label', label);

    const img = document.createElement('img');
    img.src = src;
    img.alt = label;
    item.appendChild(img);

    findings.slice(0, 3).forEach((finding) => {
        const marker = document.createElement('span');
        marker.className = `region-marker marker-${finding.severity}`;
        marker.style.setProperty('--mx', `${finding.x}%`);
        marker.style.setProperty('--my', `${finding.y}%`);
        marker.setAttribute('aria-label', `${finding.label}: ${finding.state}`);
        marker.innerHTML = `
            <span class="marker-ring"></span>
            <span class="marker-label">${escapeHtml(finding.label)}</span>
        `;
        item.appendChild(marker);
    });

    return item;
}

function createRegionReviewCard(regionKey, base64, findings, diagnosis) {
    const card = document.createElement('div');
    card.className = `region-review-card${findings.length ? ' has-findings' : ''}`;
    card.dataset.region = regionKey;

    const image = createEvidenceImageItem({
        label: REGION_LABELS[regionKey] || regionKey.replaceAll('_', ' '),
        src: base64,
        findings
    });
    card.appendChild(image);

    const copy = document.createElement('div');
    copy.className = 'region-review-copy';
    const statusChip = getRegionStatusChip(regionKey, findings, diagnosis);
    const chips = findings.length
        ? findings.map(f => `<span class="region-finding-chip ${f.severity}">${escapeHtml(f.label)} ${escapeHtml(String(f.score))}</span>`).join('')
        : `<span class="region-finding-chip ${escapeHtml(statusChip.tone)}">${escapeHtml(statusChip.label)}</span>`;
    copy.innerHTML = `
        <div class="region-review-title">${escapeHtml(REGION_LABELS[regionKey] || regionKey.replaceAll('_', ' '))}</div>
        <div class="region-finding-chips">${chips}</div>
        <p>${escapeHtml(getRegionSummary(regionKey, findings, diagnosis))}</p>
    `;
    card.appendChild(copy);

    return card;
}

function createImageReviewSection(diagnosis, options = {}) {
    if (!options.imageBase64 && !options.regionImages) return null;

    const regionFindings = buildRegionFindings(diagnosis);
    const visibleRegionKeys = Object.keys(options.regionImages || {}).map(normalizeRegionKey);
    const highlightedRegionCount = visibleRegionKeys.filter(key => (regionFindings[key] || []).length > 0).length;
    const markerCount = Object.values(regionFindings).reduce((sum, findings) => sum + findings.length, 0);
    const boardContainer = document.createElement('div');
    boardContainer.className = 'evidence-board image-review-board';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'image-review-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = `
        <span>
            <strong>Region Image Review</strong>
            <small>${highlightedRegionCount ? `${highlightedRegionCount} region${highlightedRegionCount === 1 ? '' : 's'} highlighted` : 'No focused crop markers'}</small>
        </span>
        <span class="image-review-toggle-action">View crops +</span>
    `;
    boardContainer.appendChild(toggle);

    if (options.imageBase64) {
        const macro = createEvidenceImageItem({
            label: 'Full Face',
            src: options.imageBase64,
            macro: true
        });
        macro.addEventListener('click', () => toggle.click());
        boardContainer.appendChild(macro);
    }

    const microGrid = document.createElement('div');
    microGrid.className = 'evidence-micro-grid region-review-grid';
    microGrid.classList.add('hidden');

    if (options.regionImages) {
        Object.entries(options.regionImages).forEach(([key, base64]) => {
            const regionKey = normalizeRegionKey(key);
            const findings = regionFindings[regionKey] || [];
            microGrid.appendChild(createRegionReviewCard(regionKey, base64, findings, diagnosis));
        });
    }

    const setExpanded = (expand) => {
        microGrid.classList.toggle('hidden', !expand);
        boardContainer.classList.toggle('is-open', expand);
        toggle.setAttribute('aria-expanded', expand ? 'true' : 'false');
        toggle.querySelector('.image-review-toggle-action').textContent = expand ? 'Hide crops -' : 'View crops +';
        trackAnalyticsEvent('image_review_toggle', {
            toggle_state: expand ? 'view' : 'hide',
            highlighted_region_count: highlightedRegionCount,
            marker_count: markerCount,
            marker_count_bucket: getCountBucket(markerCount)
        });
    };

    toggle.addEventListener('click', () => {
        setExpanded(!boardContainer.classList.contains('is-open'));
    });

    if (microGrid.childElementCount) boardContainer.appendChild(microGrid);
    return boardContainer;
}

function renderDiagnosisPanel(diagnosis, options = {}) {
    const container = document.createElement('div');
    container.className = 'diagnosis-panel';
    const demographics = diagnosis.demographics || {};
    const summary = diagnosis.dermatology_summary || {};
    const ageAnalysis = diagnosis.age_analysis || {};
    const actionPlan = getActionPlanViewModel(diagnosis);

    // 1. SCORE DASHBOARD
    const overallScore = getDiagnosisOverall(diagnosis) || 0;
    const confidenceValue = Number.isFinite(Number(diagnosis.confidence)) ? Number(diagnosis.confidence) : 0;
    const benchmark = Math.round(70 + (confidenceValue % 20));

    const dashboard = document.createElement('div');
    dashboard.className = 'score-dashboard';

    dashboard.appendChild(createResultScoreCard({
        title: 'Overall Score',
        fullTitle: 'Overall Skin Score',
        analyticsType: 'overall',
        value: overallScore,
        unit: 'score',
        stateClass: getScoreStateClass(overallScore),
        detailHtml: `
            <div class="result-detail-lockup">
                <div class="detail-primary-number">${overallScore}</div>
                <div>
                    <h4>Dermatologist Verdict</h4>
                    <div class="verdict-text">${escapeHtml(summary.primary_finding || 'Skin Health Assessment')}</div>
                    <div class="peer-persuasion">Better than ${benchmark}% of users</div>
                </div>
            </div>
        `
    }));

    dashboard.appendChild(createResultScoreCard({
        title: 'Skin Age',
        fullTitle: 'Biological Skin Age',
        analyticsType: 'skin_age',
        value: demographics.biological_skin_age || '--',
        unit: 'years',
        stateClass: 'state-optimal',
        detailHtml: `
            <p class="perf-obs">${escapeHtml(ageAnalysis.basis || 'Determined by structural facial signals')}</p>
        `
    }));

    Object.entries(diagnosis.pillars || {}).forEach(([name, p]) => {
        if (!p) return;
        const score = p.score || 0;
        dashboard.appendChild(createResultScoreCard({
            title: getPillarDisplayName(name),
            fullTitle: getPillarFullName(name),
            analyticsType: 'pillar',
            pillarName: name,
            value: score,
            unit: 'score',
            stateClass: getScoreStateClass(score),
            id: `pillar-${name.toLowerCase().replace(/[^a-z]/g, '-')}`,
            detailHtml: createPillarDetailHtml(p)
        }));
    });

    const dashboardHint = document.createElement('div');
    dashboardHint.className = 'score-dashboard-hint';
    dashboardHint.textContent = 'Tap any score to view the supporting analysis.';

    container.appendChild(dashboard);
    container.appendChild(dashboardHint);

    const imageReview = createImageReviewSection(diagnosis, options);
    if (imageReview) container.appendChild(imageReview);

    container.appendChild(createActionPlanSection(actionPlan));

    return container;
}

/**
 * PHASE 5: Virality & Sharing
 */
function canvasBlob(canvas, type = 'image/jpeg', quality = 0.92) {
    return new Promise(resolve => canvas.toBlob(resolve, type, quality));
}

function loadReportImage(src) {
    return new Promise(resolve => {
        if (!src) return resolve(null);
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });
}

function drawRoundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

function wrapCanvasText(ctx, text, maxWidth) {
    const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
    const lines = [];
    let line = '';
    words.forEach(word => {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word;
        } else {
            line = test;
        }
    });
    if (line) lines.push(line);
    return lines.length ? lines : [''];
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, options = {}) {
    ctx.font = options.font || ctx.font;
    ctx.fillStyle = options.color || ctx.fillStyle;
    ctx.textAlign = options.align || 'left';
    const lines = wrapCanvasText(ctx, text, maxWidth);
    const maxLines = options.maxLines || lines.length;
    lines.slice(0, maxLines).forEach((line, index) => {
        const suffix = index === maxLines - 1 && lines.length > maxLines ? '...' : '';
        ctx.fillText(`${line}${suffix}`, x, y + index * lineHeight);
    });
    return y + Math.min(lines.length, maxLines) * lineHeight;
}

function drawContainImage(ctx, img, x, y, w, h) {
    if (!img) return;
    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

function drawReportChip(ctx, text, x, y, color = '#EC610E', background = 'rgba(236,97,14,0.13)') {
    ctx.font = '800 18px Plus Jakarta Sans, Arial, sans-serif';
    const w = ctx.measureText(text).width + 24;
    drawRoundRect(ctx, x, y, w, 34, 17);
    ctx.fillStyle = background;
    ctx.fill();
    ctx.fillStyle = color;
    ctx.fillText(text, x + 12, y + 23);
    return w;
}

async function generateShareableCard(diagnosis, faceImageBase64, regionImages = null) {
    const reportWidth = 1080;
    const margin = 64;
    const contentWidth = reportWidth - margin * 2;
    const faceImg = await loadReportImage(faceImageBase64);
    const loadedRegions = {};
    for (const [key, src] of Object.entries(regionImages || {})) {
        loadedRegions[normalizeRegionKey(key)] = await loadReportImage(src);
    }

    const regionFindings = buildRegionFindings(diagnosis);
    const actionPlan = getActionPlanViewModel(diagnosis);
    const ageAnalysis = diagnosis.age_analysis || {};
    const summary = diagnosis.dermatology_summary || {};
    const overallScore = getDiagnosisOverall(diagnosis) || '--';
    const generatedAt = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    const canvas = document.createElement('canvas');
    canvas.width = reportWidth;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    const drawReport = (paint = false) => {
        let y = 70;
        if (paint) {
            ctx.fillStyle = '#0a0a0c';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(236,97,14,0.08)';
            ctx.fillRect(0, 0, canvas.width, 10);
        }

        ctx.textAlign = 'left';
        if (paint) {
            ctx.font = '800 28px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#EC610E';
            ctx.fillText('MYMIRROR AI SKIN SCAN', margin, y);
            ctx.font = '600 18px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#7A6055';
            ctx.fillText(generatedAt, reportWidth - margin - 120, y);
        }
        y += 52;

        ctx.font = '700 54px Kantumruy Pro, Georgia, serif';
        if (paint) {
            ctx.fillStyle = '#F5EDE6';
            ctx.fillText('Detailed Skin Report', margin, y);
        }
        y += 54;

        ctx.font = '600 26px Plus Jakarta Sans, Arial, sans-serif';
        if (paint) {
            ctx.fillStyle = '#C4A898';
            y = drawWrappedCanvasText(ctx, summary.primary_finding || 'Visible skin signal review', margin, y, contentWidth, 34, { color: '#C4A898' });
        } else {
            y += wrapCanvasText(ctx, summary.primary_finding || 'Visible skin signal review', contentWidth).length * 34;
        }
        y += 34;

        const heroH = 330;
        if (paint) {
            drawRoundRect(ctx, margin, y, contentWidth, heroH, 26);
            ctx.fillStyle = 'rgba(255,255,255,0.035)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.stroke();

            if (faceImg) {
                drawRoundRect(ctx, margin + 24, y + 24, 260, 260, 24);
                ctx.save();
                ctx.clip();
                drawContainImage(ctx, faceImg, margin + 24, y + 24, 260, 260);
                ctx.restore();
            }

            ctx.font = '800 22px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#7A6055';
            ctx.fillText('OVERALL SCORE', margin + 330, y + 70);
            ctx.font = '700 92px Kantumruy Pro, Georgia, serif';
            ctx.fillStyle = '#4ABA7A';
            ctx.fillText(String(overallScore), margin + 330, y + 165);

            ctx.font = '800 22px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#7A6055';
            ctx.fillText('BIOLOGICAL SKIN AGE', margin + 610, y + 70);
            ctx.font = '700 92px Kantumruy Pro, Georgia, serif';
            ctx.fillStyle = '#4ABA7A';
            ctx.fillText(String(diagnosis.demographics?.biological_skin_age || '--'), margin + 610, y + 165);

            ctx.font = '600 22px Plus Jakarta Sans, Arial, sans-serif';
            drawWrappedCanvasText(ctx, ageAnalysis.basis || 'Determined by visible facial signals.', margin + 330, y + 225, contentWidth - 360, 30, { color: '#C4A898', maxLines: 3 });
        }
        y += heroH + 40;

        ctx.font = '800 30px Plus Jakarta Sans, Arial, sans-serif';
        if (paint) {
            ctx.fillStyle = '#F5EDE6';
            ctx.fillText('Score Details', margin, y);
        }
        y += 44;

        Object.entries(diagnosis.pillars || {}).forEach(([name, pillar]) => {
            if (!pillar) return;
            const cardY = y;
            const cardH = 190;
            if (paint) {
                drawRoundRect(ctx, margin, cardY, contentWidth, cardH, 18);
                ctx.fillStyle = 'rgba(255,255,255,0.025)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.07)';
                ctx.stroke();
                ctx.font = '800 22px Plus Jakarta Sans, Arial, sans-serif';
                ctx.fillStyle = '#F5EDE6';
                ctx.fillText(getPillarFullName(name), margin + 24, cardY + 40);
                ctx.font = '700 42px Kantumruy Pro, Georgia, serif';
                ctx.fillStyle = pillar.score < 50 ? '#EF4444' : (pillar.score >= 80 ? '#4ABA7A' : '#F59E0B');
                ctx.fillText(String(pillar.score ?? '--'), reportWidth - margin - 110, cardY + 48);
                ctx.font = '700 20px Plus Jakarta Sans, Arial, sans-serif';
                ctx.fillStyle = '#F5EDE6';
                ctx.fillText(pillar.state || 'Visible signals reviewed', margin + 24, cardY + 78);
                ctx.font = '500 19px Plus Jakarta Sans, Arial, sans-serif';
                const obs = Array.isArray(pillar.evidence_signals) ? pillar.evidence_signals.join(', ') : 'Visible signals reviewed';
                drawWrappedCanvasText(ctx, `Observations: ${obs}`, margin + 24, cardY + 112, contentWidth - 48, 26, { color: '#C4A898', maxLines: 2 });
                drawWrappedCanvasText(ctx, pillar.insight || '', margin + 24, cardY + 162, contentWidth - 48, 24, { color: '#7A6055', maxLines: 1 });
            }
            y += cardH + 14;
        });
        y += 22;

        ctx.font = '800 30px Plus Jakarta Sans, Arial, sans-serif';
        if (paint) {
            ctx.fillStyle = '#F5EDE6';
            ctx.fillText('Region Image Review', margin, y);
        }
        y += 44;

        const regionKeys = Object.keys(loadedRegions);
        if (regionKeys.length) {
            regionKeys.forEach(regionKey => {
                const img = loadedRegions[regionKey];
                const findings = regionFindings[regionKey] || [];
                const cardY = y;
                const cardH = 280;
                if (paint) {
                    drawRoundRect(ctx, margin, cardY, contentWidth, cardH, 18);
                    ctx.fillStyle = findings.length ? 'rgba(232,85,74,0.055)' : 'rgba(255,255,255,0.025)';
                    ctx.fill();
                    ctx.strokeStyle = findings.length ? 'rgba(232,85,74,0.32)' : 'rgba(255,255,255,0.07)';
                    ctx.stroke();
                    const imgX = margin + 22, imgY = cardY + 22, imgS = 220;
                    drawRoundRect(ctx, imgX, imgY, imgS, imgS, 16);
                    ctx.save();
                    ctx.clip();
                    ctx.fillStyle = '#050506';
                    ctx.fillRect(imgX, imgY, imgS, imgS);
                    drawContainImage(ctx, img, imgX, imgY, imgS, imgS);
                    findings.slice(0, 3).forEach(finding => {
                        const mx = imgX + (imgS * (finding.x || 50) / 100);
                        const my = imgY + (imgS * (finding.y || 50) / 100);
                        ctx.beginPath();
                        ctx.arc(mx, my, 18, 0, Math.PI * 2);
                        ctx.strokeStyle = finding.severity === 'priority' ? '#EF4444' : '#F59E0B';
                        ctx.lineWidth = 5;
                        ctx.stroke();
                    });
                    ctx.restore();

                    ctx.font = '800 22px Plus Jakarta Sans, Arial, sans-serif';
                    ctx.fillStyle = '#F5EDE6';
                    ctx.fillText(REGION_LABELS[regionKey] || regionKey.replaceAll('_', ' '), margin + 270, cardY + 46);
                    let chipX = margin + 270;
                    if (findings.length) {
                        findings.slice(0, 2).forEach(finding => {
                            chipX += drawReportChip(ctx, `${finding.label} ${finding.score ?? ''}`.trim(), chipX, cardY + 66, finding.severity === 'priority' ? '#FFB3AE' : '#FFD18C') + 8;
                        });
                    } else {
                        const statusChip = getRegionStatusChip(regionKey, findings, diagnosis);
                        const chipColor = REGION_CHIP_CANVAS_COLORS[statusChip.tone] || '#9CE6BF';
                        const chipBg = statusChip.tone === 'stable'
                            ? 'rgba(16,185,129,0.12)'
                            : (statusChip.tone === 'limited' ? 'rgba(196,168,152,0.12)' : 'rgba(240,160,48,0.13)');
                        drawReportChip(ctx, statusChip.label, chipX, cardY + 66, chipColor, chipBg);
                    }
                    ctx.font = '500 20px Plus Jakarta Sans, Arial, sans-serif';
                    drawWrappedCanvasText(ctx, getRegionSummary(regionKey, findings, diagnosis), margin + 270, cardY + 128, contentWidth - 300, 28, { color: '#C4A898', maxLines: 4 });
                }
                y += cardH + 14;
            });
        } else {
            y += 30;
        }
        y += 24;

        ctx.font = '800 30px Plus Jakarta Sans, Arial, sans-serif';
        if (paint) {
            ctx.fillStyle = '#F5EDE6';
            ctx.fillText('Priority Care Map', margin, y);
        }
        y += 44;

        const focusH = 188;
        if (paint) {
            drawRoundRect(ctx, margin, y, contentWidth, focusH, 18);
            ctx.fillStyle = actionPlan.severity === 'priority' ? 'rgba(232,85,74,0.075)' : 'rgba(236,97,14,0.06)';
            ctx.fill();
            ctx.strokeStyle = actionPlan.severity === 'priority' ? 'rgba(232,85,74,0.24)' : 'rgba(236,97,14,0.18)';
            ctx.stroke();
            ctx.font = '800 18px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#EC610E';
            ctx.fillText('TOP FOCUS', margin + 24, y + 34);
            ctx.font = '700 34px Kantumruy Pro, Georgia, serif';
            ctx.fillStyle = '#F5EDE6';
            drawWrappedCanvasText(ctx, actionPlan.focusLabel, margin + 24, y + 76, contentWidth - 150, 38, { color: '#F5EDE6', maxLines: 2 });
            ctx.font = '700 52px Kantumruy Pro, Georgia, serif';
            ctx.fillStyle = actionPlan.severity === 'priority' ? '#FFB3AE' : '#FFD18C';
            ctx.fillText(String(actionPlan.sourceScore ?? '--'), reportWidth - margin - 100, y + 76);
            let chipX = margin + 24;
            actionPlan.evidence.slice(0, 4).forEach(chip => {
                const color = REGION_CHIP_CANVAS_COLORS[chip.tone] || (chip.tone === 'pillar' ? '#F6B184' : '#C4A898');
                chipX += drawReportChip(ctx, chip.label, chipX, y + 105, color, 'rgba(255,255,255,0.055)') + 8;
            });
            ctx.font = '500 20px Plus Jakarta Sans, Arial, sans-serif';
            drawWrappedCanvasText(ctx, actionPlan.whySelected, margin + 24, y + 158, contentWidth - 48, 27, { color: '#C4A898', maxLines: 1 });
        }
        y += focusH + 14;

        const tileGap = 12;
        const tileW = (contentWidth - tileGap * 2) / 3;
        const tileH = 158;
        actionPlan.actions.forEach((action, index) => {
            const x = margin + index * (tileW + tileGap);
            if (paint) {
                drawRoundRect(ctx, x, y, tileW, tileH, 16);
                ctx.fillStyle = 'rgba(255,255,255,0.03)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.08)';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x + 30, y + 30, 15, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(236,97,14,0.18)';
                ctx.fill();
                ctx.font = '900 16px Plus Jakarta Sans, Arial, sans-serif';
                ctx.fillStyle = '#EC610E';
                ctx.fillText(String(index + 1), x + 25, y + 36);
                ctx.font = '800 22px Plus Jakarta Sans, Arial, sans-serif';
                drawWrappedCanvasText(ctx, action.title, x + 22, y + 70, tileW - 44, 27, { color: '#F5EDE6', maxLines: 2 });
                ctx.font = '500 18px Plus Jakarta Sans, Arial, sans-serif';
                drawWrappedCanvasText(ctx, action.why, x + 22, y + 118, tileW - 44, 24, { color: '#7A6055', maxLines: 2 });
            }
        });
        y += tileH + 14;

        const avoidH = 72;
        if (paint) {
            drawRoundRect(ctx, margin, y, contentWidth, avoidH, 16);
            ctx.fillStyle = 'rgba(232,85,74,0.055)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(232,85,74,0.16)';
            ctx.stroke();
            ctx.font = '800 18px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#FFB3AE';
            ctx.fillText('HOLD OFF', margin + 22, y + 42);
            let avoidX = margin + 150;
            actionPlan.avoid.slice(0, 2).forEach(item => {
                avoidX += drawReportChip(ctx, item, avoidX, y + 19, '#FFB3AE', 'rgba(232,85,74,0.12)') + 8;
            });
        }
        y += avoidH + 12;

        const trackH = 84;
        if (paint) {
            drawRoundRect(ctx, margin, y, contentWidth, trackH, 16);
            ctx.fillStyle = 'rgba(16,185,129,0.06)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(16,185,129,0.17)';
            ctx.stroke();
            ctx.font = '800 18px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#4ABA7A';
            ctx.fillText('DAILY SCAN', margin + 22, y + 35);
            ctx.font = '500 20px Plus Jakarta Sans, Arial, sans-serif';
            drawWrappedCanvasText(ctx, actionPlan.track, margin + 155, y + 35, contentWidth - 180, 27, { color: '#F5EDE6', maxLines: 2 });
        }
        y += trackH + 20;

        y += 34;
        if (paint) {
            ctx.font = '600 18px Plus Jakarta Sans, Arial, sans-serif';
            ctx.fillStyle = '#7A6055';
            drawWrappedCanvasText(ctx, 'Visible-signal AI review. Not a medical diagnosis. Consult a dermatologist for painful, spreading, bleeding, changing, or persistent concerns.', margin, y, contentWidth, 26, { color: '#7A6055' });
        }
        y += 80;
        return y;
    };

    const height = Math.min(12000, Math.max(1800, Math.ceil(drawReport(false))));
    canvas.height = height;
    drawReport(true);

    const blob = await canvasBlob(canvas);
    if (!blob) return { dataUrl: canvas.toDataURL('image/jpeg', 0.92), file: null };
    const file = typeof File === 'function'
        ? new File([blob], `mymirror_skin_report_${Date.now()}.jpg`, { type: 'image/jpeg' })
        : null;
    return { blob, file, dataUrl: canvas.toDataURL('image/jpeg', 0.92) };
}

const SHARE_REPORT_CAPTION = 'Here is my skin analysis report. Get your free report too at mymirror.fit/scan';

async function shareReportFile(report) {
    const title = 'MyMirror Skin Scan Report';
    const text = SHARE_REPORT_CAPTION;
    if (report.file && navigator.share && (!navigator.canShare || navigator.canShare({ files: [report.file] }))) {
        await navigator.share({ title, text, files: [report.file] });
        return true;
    }
    return false;
}

function showResults(data, vitals, submittedFaceImageBase64 = null, savedLogFilename = null, regionImages = null) {
    LOG.section('showResults() — rendering user-first UI');
    if (video.srcObject) video.srcObject.getTracks().forEach(t => t.stop());
    document.body.classList.remove('home-active');
    
    resultsSection.classList.remove('hidden');
    resultsGrid.innerHTML = '';

    const [, diagnosis] = getDiagnosisSet(data);
    const actionPlan = getActionPlanViewModel(diagnosis);
    const overallScore = getDiagnosisOverall(diagnosis) || 0;
    const markerCount = getDiagnosisMarkerCount(diagnosis);
    trackAnalyticsStage('results', 'results_viewed', {
        overall_score: overallScore,
        overall_score_bucket: getScoreBucket(overallScore),
        confidence_score: Number(diagnosis.confidence) || 0,
        confidence_bucket: getScoreBucket(diagnosis.confidence),
        top_focus_region: actionPlan.sourceRegion || 'none',
        top_focus_pillar: actionPlan.sourcePillar ? sanitizeAnalyticsText(actionPlan.sourcePillar) : 'none',
        marker_count: markerCount,
        marker_count_bucket: getCountBucket(markerCount)
    });

    const ui = renderDiagnosisPanel(diagnosis, {
        vitals,
        imageBase64: submittedFaceImageBase64,
        regionImages: data.region_images || regionImages
    });
    
    resultsGrid.appendChild(ui);
    observeAnalyticsOnce(ui.querySelector('.actionable-focus'), 'action_plan_seen', {
        top_focus_region: actionPlan.sourceRegion || 'none',
        top_focus_pillar: actionPlan.sourcePillar ? sanitizeAnalyticsText(actionPlan.sourcePillar) : 'none',
        severity: actionPlan.severity || 'attention'
    });

    // Footer actions (PHASE 6: PREMIUM CTA)
    const foot = document.createElement('div');
    foot.className = 'premium-cta-group';
    
    const shareBtn = document.createElement('button');
    shareBtn.innerHTML = '<span style="font-size:1.1rem; margin-right:8px;">📸</span> SHARE SCORECARD';
    shareBtn.className = 'premium-btn';
    shareBtn.onclick = async () => {
        const originalText = shareBtn.innerHTML;
        trackAnalyticsEvent('report_share_click', {
            report_type: 'image',
            share_supported: navigator.share ? 'yes' : 'no'
        });
        try {
            shareBtn.innerHTML = 'GENERATING...';
            const report = await generateShareableCard(diagnosis, submittedFaceImageBase64, data.region_images || regionImages);
            shareBtn.innerHTML = 'OPENING SHARE...';
            const shared = await shareReportFile(report).catch(() => false);
            if (shared) {
                trackAnalyticsEvent('report_share_success', { report_type: 'image' });
                return;
            }
            const link = document.createElement('a');
            link.download = `mymirror_skin_report_${new Date().getTime()}.jpg`;
            link.href = report.dataUrl;
            link.click();
            trackAnalyticsEvent('report_download_click', {
                report_type: 'image',
                download_reason: 'share_fallback'
            });
        } catch (error) {
            console.warn('Share report generation failed', error);
            trackAnalyticsEvent('report_share_failed', {
                error_type: sanitizeAnalyticsText(error?.name || error?.message || 'share_failed')
            });
        } finally {
            shareBtn.innerHTML = originalText;
        }
    };
    foot.appendChild(shareBtn);

    const rescanBtn = document.createElement('button');
    rescanBtn.textContent = 'RUN NEW SCAN';
    rescanBtn.className = 'text-btn';
    rescanBtn.style.marginTop = '10px';
    rescanBtn.onclick = () => {
        trackAnalyticsEvent('retake_scan_click', { button_location: 'results_footer' });
        resetScanner();
    };
    foot.appendChild(rescanBtn);

    // Subtle Log ID
    if (savedLogFilename) {
        const srv = document.createElement('span');
        srv.textContent = `ANALYSIS ID: ${savedLogFilename.split('_')[1].split('.')[0]}`;
        srv.style.cssText = 'font-size:0.55rem; color:#333; margin-top:20px; letter-spacing:0.05em;';
        foot.appendChild(srv);
    }
    
    resultsGrid.appendChild(foot);
}

function resetScanner() {
    LOG.section('resetScanner() — full state reset');
    analyticsSessionStage = 'home';
    analyticsLastEngagementAt = Date.now();
    isAnalyzing = false;
    _firstFaceLogged = false;
    _lastPeriodicLog  = 0;
    _scanGateWasPaused = false;
    stabilizationFaceImage   = null;
    _pendingFaceImageBase64  = null;
    LOG_ENTRIES.length = 0; // clear log for the next scan session
    resetStartupDiagnosticsForRun();
    resultsSection.classList.add('hidden'); analysisView.classList.add('hidden'); regionConfirmationView.classList.add('hidden');
    setupView.classList.remove('hidden'); analysisOverlay.classList.add('hidden'); liveRegionRow.classList.add('hidden');
    document.body.classList.remove('region-confirm-active');
    if (regionReadyCount) { regionReadyCount.classList.add('hidden'); regionReadyCount.classList.remove('all-locked'); regionReadyCount.textContent = 'Building region checklist'; regionReadyCount.style.color = ''; }
    if (instructionOverlay) instructionOverlay.classList.add('hidden');
    if (mobileScanProgress) {
        mobileScanProgress.classList.add('hidden');
        mobileScanProgress.querySelectorAll('.msp-item').forEach(el => {
            el.setAttribute('data-state', '0');
            el.querySelector('.msp-state').textContent = CAPTURE_LABELS[0];
        });
    }
    REGIONS.forEach(r => { bestRegionCategory[r.id] = 0; });
    scanStartTime = 0;
    stabilizationFrames = 0;
    lostFrames = 0;
    lastLandmarks = null;
    eyeClosed = false;
    captureGateState = { ok: false, reasons: [] };
    gateOpenSince = 0;
    prevGateWasOpen = false;
    lightingWarning = null;
    lightingColourWarning = null;
    shineAdvisory = false;
    shineFrameCount = 0;
    coveringDetected = null;
    skinBaseline = null;
    document.body.classList.remove('scan-active');
    document.body.classList.add('home-active');
    goodScanMs = 0;
    lastGoodFrameTime = 0;
    pulseSamples = [];
    respirationSamples = [];
    blinkCount = 0;

    // Reset visible scan/analysis UI state so next run starts clean.
    if (setupInstruction) setupInstruction.textContent = DEFAULT_SETUP_INSTRUCTION;
    startBtn.textContent = DEFAULT_START_BUTTON_TEXT;
    startBtn.disabled = false;
    statusText.textContent = "INITIALIZING...";
    statusIndicator.classList.remove('active');
    setCameraPendingState(false);
    timerText.textContent = `${(SCAN_DURATION / 1000).toFixed(1)}s`;
    progressBarFill.style.width = '0%';
    deepProgressFill.style.width = '0%';
    if (dynamicLoadingText) dynamicLoadingText.textContent = 'Preparing your verified face crops...';
    if (analysisTimeHint) analysisTimeHint.textContent = 'Up to 30 sec';
    setAnalysisStageState(0);
    previewBPM.textContent = '--';
    previewResp.textContent = '--';
    previewBlink.textContent = '--';
    const liveBPM = document.getElementById('liveBPM');
    if (liveBPM) liveBPM.textContent = '--';

    // Clear per-region image buffers and canvases.
    REGIONS.forEach(r => {
        regionBuffers[r.id] = [];
        regionLocks[r.id] = { locked: false, quality: 0, ts: 0 };
        previousSamples[r.id] = null;
        const liveCanvas = document.getElementById(r.id);
        if (liveCanvas) {
            const ctx = liveCanvas.getContext('2d');
            ctx.clearRect(0, 0, liveCanvas.width, liveCanvas.height);
        }
        const tile = liveCanvas?.parentElement;
        if (tile) tile.style.borderColor = '';
        if (tile) tile.dataset.state = '0';
        const indicator = tile?.querySelector('.refining-indicator');
        if (indicator) {
            indicator.textContent = 'FINDING';
        }
    });

    if (video.srcObject) { video.srcObject.getTracks().forEach(t => t.stop()); video.srcObject = null; }
}

// ATTACH LISTENERS
startBtn.addEventListener('click', startScanner);
resetBtn.addEventListener('click', () => {
    trackAnalyticsEvent('retake_scan_click', { button_location: 'reset_button' });
    resetScanner();
});
confirmRegionsBtn.addEventListener('click', () => {
    trackAnalyticsEvent('regions_confirmed', {
        selected_region_count: getSelectedConfirmationRegionCount()
    });
    proceedToAnalysis();
}); // uses _pendingFaceImageBase64 internally
retryScanBtn.addEventListener('click', () => {
    trackAnalyticsEvent('retake_scan_click', { button_location: 'region_retry' });
    resetScanner();
});

// INIT ON LOAD
window.addEventListener('DOMContentLoaded', () => {
    LOG.section('PAGE LOADED — DOMContentLoaded fired');
    trackAnalyticsStage('home', 'scanner_home_view');
    installStartupVideoDiagnostics();
    installStartupErrorDiagnostics();

    // Verify every critical DOM element is present
    const domChecks = {
        video, canvas, startBtn, setupTitle, setupKicker, setupView, scannerView, statusText,
        statusIndicator, timerText, progressBarFill, analysisOverlay,
        liveRegionRow, regionConfirmationView, regionImagesGrid,
        confirmRegionsBtn, retryScanBtn, analysisView, resultsSection,
        resultsGrid, resetBtn, previewBPM, previewResp, previewBlink,
        deepProgressFill
    };
    const missing = Object.entries(domChecks).filter(([, el]) => !el).map(([k]) => k);
    if (missing.length) {
        LOG.err('Missing DOM elements — check index.html IDs', missing);
    } else {
        LOG.ok('All DOM elements found');
    }

    applyLandingContext();

    LOG.info('MediaPipe availability check', {
        FaceMesh: !!(window.FaceMesh || window.faceMesh),
        Camera:   !!window.Camera,
        drawConnectors: !!window.drawConnectors,
    });

    initFaceMesh();
    scheduleFaceMeshWarmup();
});
