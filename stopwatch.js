let isRunning = false;
let startTime = 0;
let lapStartTime = 0;

function startPause()
 {
    const startPauseButton = document.getElementById("startPause");

    if (isRunning) {
        isRunning = false;
        startPauseButton.textContent = "Start";
    } 
    else 
    {
        isRunning = true;
        startPauseButton.textContent = "Pause";
        startTime = Date.now() - (lapStartTime ? Date.now() - lapStartTime : 0);
        updateDisplay();
    }
}

function reset() 
{
    isRunning = false;
    document.getElementById("startPause").textContent = "Start";
    startTime = 0;
    lapStartTime = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() 
{
    if (isRunning) {
        const lapTime = Date.now() - startTime;
        lapStartTime = Date.now();
        const lapsList = document.getElementById("laps");
        const lapItem = document.createElement("li");
        lapItem.textContent = formatTime(lapTime);
        lapsList.appendChild(lapItem);
    }
}

function updateDisplay() 
{
    const display = document.getElementById("display");
    const currentTime = isRunning ? Date.now() - startTime : 0;
    display.textContent = formatTime(currentTime);
}

function formatTime(ms) 
{
    const date = new Date(ms);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        "." +
        String(milliseconds).padStart(3, "0")
    );
}
setInterval(updateDisplay, 10);
