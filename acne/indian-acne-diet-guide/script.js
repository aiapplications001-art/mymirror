function showDiagnostic(type) {
    // Hide all diagnostic results
    document.querySelectorAll('.diagnostic-result').forEach(res => {
        res.classList.remove('active');
    });
    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected
    document.getElementById(type).classList.add('active');
    // Activate clicked button
    event.currentTarget.classList.add('active');
}

function calculateScore() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let totalScore = 0;

    // Sum up values from checked boxes
    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }

    const resultBox = document.getElementById('quiz-result');
    const scoreDisplay = document.getElementById('final-score');
    const messageDisplay = document.getElementById('score-message');
    const planDisplay = document.getElementById('action-plan');

    scoreDisplay.innerText = totalScore;
    resultBox.classList.remove('hidden', 'safe-zone', 'danger-zone', 'eruption-zone');

    let status = '';
    let message = '';
    let actionPlan = '';

    if (totalScore <= 5) {
        status = 'safe-zone';
        message = 'The Clear Skin Zone 🌿';
        actionPlan = 'Your diet is currently highly acne-friendly. You are keeping your blood sugar stable, managing inflammation, and supporting your gut barrier. Keep relying on whole foods, fiber, and healthy fats!';
    } else if (totalScore <= 15) {
        status = 'danger-zone';
        message = 'The Danger Zone (Moderate Risk) ⚠️';
        actionPlan = '<strong>Fix it fast:</strong> Max out the "Skin Savior" list today. Swap your next meal for something high in fiber, drink a cup of green tea, and strictly avoid all sugar and dairy for the next 24 hours.';
    } else {
        status = 'eruption-zone';
        message = 'The Eruption Zone (High Risk) 🚨';
        actionPlan = '<strong>Fix it fast:</strong> Wash your face with a Salicylic Acid cleanser tonight to unclog pores. Cut dairy, sugar, and fried foods completely for the next 3 days. Use an acne spot treatment immediately if you feel a tender bump.';
    }

    resultBox.classList.add(status);
    messageDisplay.innerHTML = `<strong>${message}</strong>`;
    planDisplay.innerHTML = `<p>${actionPlan}</p>`;

    // Scroll to result
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
