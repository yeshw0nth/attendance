let periodCount = parseInt(localStorage.getItem('periodCount')) || 0;
const periodDisplay = document.getElementById('periodCount');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    periodDisplay.textContent = periodCount;
    localStorage.setItem('periodCount', periodCount);
}

function addPeriod() {
    periodCount++;
    updateDisplay();
    // Add visual feedback (e.g., a temporary color change)
    periodDisplay.style.color = 'green';
    setTimeout(() => {
        periodDisplay.style.color = '#007bff';
    }, 300);
}

function removePeriod() {
    if (periodCount > 0) {
        periodCount--;
        updateDisplay();
        periodDisplay.style.color = 'red';
        setTimeout(() => {
            periodDisplay.style.color = '#007bff';
        }, 300);
    }
}

function resetPeriod() {
    periodCount = 0;
    updateDisplay();
}

addButton.addEventListener('click', addPeriod);
removeButton.addEventListener('click', removePeriod);
resetButton.addEventListener('click', resetPeriod);

updateDisplay(); // Initialize display
