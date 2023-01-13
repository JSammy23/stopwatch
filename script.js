const resetBtn = document.getElementById('reset')
const startBtn = document.getElementById('start')
const recordBtn = document.getElementById('record')
const display = document.querySelector('.display')
let minutesDiv = document.querySelector('.minutes')
let secondsDiv = document.querySelector('.seconds')
let tensDiv = document.querySelector('.tens')
let tens = 00
let seconds = 00
let minutes = 00
let isRunning = false
let interval
let reports = []

const timeStamp = (minutes, seconds, tens) => {
    min = minutes
    sec = seconds
    ten = tens
}

window.onload = () => {
    updateDisplay()
    isRunning = false
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

resetBtn.addEventListener('click', () => {
    if(isRunning) return
    tens = 00
    seconds = 00
    minutes = 00
    isRunning = false
    updateDisplay()
})

startBtn.addEventListener('click', () => {
    if (!isRunning){
        interval = setInterval(startTimer, 10) 
        isRunning = true
        updateBtn(isRunning)
    } else if (isRunning){
        clearInterval(interval)
        isRunning = false
        updateBtn(isRunning)
    }
})

recordBtn.addEventListener('click', () => {
    recordTime() 
})

const recordTime = () => {
    let m = minutesDiv.textContent
    let s = secondsDiv.textContent
    let t = tensDiv.textContent
    report = Array.from(`${m}${s}${t}`)
    console.log(report)
    reports.push(report)

}

const updateBtn = (status) => {
    if (status){
        startBtn.classList.replace('go', 'stop')
        startBtn.textContent = 'Stop'
    } else {
        startBtn.classList.replace('stop', 'go')
        startBtn.textContent = 'Start'
    }
}

const updateDisplay = () => {
    if (tens <= 9){
        tensDiv.textContent = '0' + tens
    } else{
        tensDiv.textContent = tens
    } 
    if (tens > 99) {
        // console.log(seconds)
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

