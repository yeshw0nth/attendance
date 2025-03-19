let periodCount = 0;
const periodDisplay = document.getElementById('periodCount');

function addPeriod() {
    periodCount++;
    updateDisplay();
}

function removePeriod() {
    if (periodCount > 0) {
        periodCount--;
    }
    updateDisplay();
}

function updateDisplay() {
    periodDisplay.textContent = periodCount;
}
