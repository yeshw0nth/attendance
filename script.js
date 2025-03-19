const attendedInput = document.getElementById('attended');
const heldInput = document.getElementById('held');
const calculateButton = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton');
const resultDisplay = document.getElementById('result');

// Load saved data from localStorage
attendedInput.value = localStorage.getItem('attended') || '';
heldInput.value = localStorage.getItem('held') || '';

function calculateAttendance() {
    const attended = parseFloat(attendedInput.value);
    const held = parseFloat(heldInput.value);

    if (isNaN(attended) || isNaN(held)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
        return;
    }

    if (held === 0) {
        resultDisplay.textContent = 'Classes held cannot be zero.';
        return;
    }

    const attendance = (attended / held) * 100;
    resultDisplay.textContent = `Attendance: ${attendance.toFixed(2)}%`;

    //save data to local storage.
    localStorage.setItem('attended', attendedInput.value);
    localStorage.setItem('held', heldInput.value);
}

function resetCalculator() {
    attendedInput.value = '';
    heldInput.value = '';
    resultDisplay.textContent = '';
    //clear local storage.
    localStorage.removeItem('attended');
    localStorage.removeItem('held');
}

calculateButton.addEventListener('click', calculateAttendance);
resetButton.addEventListener('click', resetCalculator);
