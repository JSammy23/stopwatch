const resetBtn = document.querySelector('.reset')
const startBtn = document.getElementById('start')
const recordBtn = document.querySelector('.record')
const display = document.querySelector('.display')
let minutesDiv = document.querySelector('.minutes')
let secondsDiv = document.querySelector('.seconds')
let tensDiv = document.querySelector('.tens')
let tens = 00
let seconds = 00
let minutes = 00

window.onload = () => {
    updateDisplay()
}

function startTimer(){
    tens++
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
    } else{
        tensDiv.textContent = tens
    } 
    if (tens > 99) {
        console.log(seconds)
        seconds++
        secondsDiv.textContent = '0' + seconds
        tens = 0
        tensDiv.textContent = '0' + 0
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