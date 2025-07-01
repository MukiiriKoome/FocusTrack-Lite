// console.log("Script is running!");

let timeLeft = 25 * 60; // 25 minutes in seconds
let timerinterval = null;
let isRunning = false;

// Function to format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2 , '0')}`
}

// Update the display
function updateDisplay() {
    document.getElementById('timer').textContent = formatTime(timeLeft);
}

// start timer
let sessions = []; // array to hold session objects

const startBtn = document.getElementById("startBtn");
function startTimer() {
    if (!isRunning) {
    isRunning = true;
    startBtn.textContent = 'Stop';
    startBtn.classList.remove('start');
    startBtn.classList.add('stop');
    document.getElementById('resetBtn').disabled = true;


    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else if (timeLeft === 0){
            clearInterval(timerInterval);
            isRunning = false;
              // 1. Save session
            const session = {
                duration: 25,
                timestamp: new Date().toISOString()
            };
            sessions.push(session);

            // 2. Update session count and total minutes
            document.getElementById("sessionCount").textContent = sessions.length;

            const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);
            document.getElementById("totalMinutes").textContent = totalMinutes;

            // 3. Update recent list
            const sessionList = document.getElementById("sessionList");
            sessionList.innerHTML = "";
            sessions.slice(-5).reverse().forEach((s) => {
                    const li = document.createElement("li");
                    li.textContent = `${s.duration} mins @ ${new Date(s.timestamp).toLocaleTimeString()}`;
                    sessionList.appendChild(li);
            

            });
            resetTimer();
            document.getElementById('resetBtn').disabled = true;
            startBtn.textContent = 'Start';
            startBtn.classList.remove('stop');
            startBtn.classList.add('start');
            alert("Session Complete!");
        }
    },
1000);

}else{
    // Stop the timer (pause)
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.textContent = 'Start';
    startBtn.classList.remove('stop');
    startBtn.classList.add('start');
    document.getElementById('resetBtn').disabled = false;

}};


// reset Timer
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  updateDisplay();
  isRunning = false;
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
