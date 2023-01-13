const resetBtn = document.querySelector('.reset')
const startBtn = document.getElementById('start')
const recordBtn = document.querySelector('.record')
const display = document.querySelector('.display')
let minutesDiv = document.querySelector('.minutes')
let secondsDiv = document.querySelector('.seconds')
let tensDiv = document.querySelector('.tens')
let tens = 0
let seconds = 0
let minutes = 0

function startTimer(){
    tens += 10
    if (tens == 1000){
        tens = 0
        seconds++
        if(seconds == 60){
            seconds = 0
            minutes++
        }
    }
    updateDisplay()
}

startBtn.addEventListener('click', () => {
    setInterval(startTimer, 10)
    
})

const updateDisplay = () => {
    if (tens <= 9){
        tensDiv.textContent = '0' + tens
    } else {
        tensDiv.textContent = tens
    } 
    if (seconds <= 9){
        secondsDiv.textContent = '0' + seconds
    } else {
        secondsDiv.textContent = seconds
    } 
    if (minutes <= 9){
        minutesDiv.textContent = '0' + minutes
    } else {
        minutesDiv.textContent = minutes
    }
}

// let myInterval = setInterval(myTimer, 1000);
// let i = 0;
// function myTimer() {
//   document.querySelector('.tens').innerHTML = i;
//   i++;
// }