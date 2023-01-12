const Watch = {
    milliseconds = 0
    seconds = 0
    minutes = 0
    const start = () => {
        milliseconds += 10
        if (milliseconds == 1000){
            milliseconds = 0
            seconds++
            if (seconds == 60){
                seconds = 0
                minutes++
            }
        }
    }

    const display = document.querySelector('.display')

}


const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')

startBtn.addEventListener('click', Watch.start)