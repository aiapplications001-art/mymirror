# Design Specification: Cheek Acne Table Padding & Spacing Alignment

## Overview
This design specification defines the CSS layout and styling updates for the skincare active mapping tables on the Cheek Acne Category Page (P1) and Cheek Acne Guide Page (P2). The goal is to improve readability, density, and alignment on both desktop (DWeb) and mobile (MWeb) screen sizes, addressing user feedback regarding visual balance and first column padding/alignment.

## Target Files
1. [cheek-acne/index.html](file:///Users/tm030/acne/cheek-acne/index.html)
2. [cheek-acne-meaning/index.html](file:///Users/tm030/acne/cheek-acne-meaning/index.html)

## Layout & Spacing Adjustments

### 1. Desktop Layout (Widths >= 641px)
* **General Padding Density**:
  * Table Headers (`.acne-table th`): Change padding to `14px 20px` (previously `16px 20px`) for a tighter, more cohesive header.
  * Table Body Cells (`.acne-table td`): Change padding to `16px 20px` (previously `18px 20px`) to optimize row heights and density.
* **First Column Symmetry (Cheek Zone)**:
  * Column Width: Constrain first column (`.acne-table td:first-child`, `.acne-table th:first-child`) to a fixed `150px` width (previously `160px`) to prevent excess empty space.
  * Text Alignment: Center-align text (`text-align: center;`) for both header and cell values in the first column to balance it horizontally within its layout blocks.

### 2. Mobile Layout (Widths <= 640px)
* **Card Row Spacing**:
  * Body Cells (`.acne-table td`): Adjust vertical cell padding to `10px 0` (previously `6px 0`) to provide better vertical breathing room.
  * Card Header / First Cell (`.acne-table tr td:first-child`): Ensure top padding is zero (`padding-top: 0`) so that the title aligns perfectly with the card container's border/padding boundary. Keep bottom padding at `10px` for clear heading separation.

## Spec Self-Review
1. **Placeholder Scan**: Verified. No TODOs or placeholder values exist.
2. **Consistency Check**: Proposed padding values are consistent across both desktop and mobile styling selectors.
3. **Scope Check**: Focused exclusively on table structure, padding, and alignment properties in the CSS.
