let [miliseconds,seconds] = [0,0]
const timerRef = document.querySelector('p');
let int = null;

document.querySelector('.start').addEventListener('click', function(){
    if(int !== null){
        clearInterval(int)
    }
    int = setInterval(displayTimer,10)
})

document.querySelector('.stop').addEventListener('click', function(){
    clearInterval(int);
})

document.querySelector('.reset').addEventListener('click', function(){
    clearInterval(int);
    [miliseconds,seconds] = [0,0]
    timerRef.innerHTML = '00 : 00'
})

function displayTimer(){
    miliseconds += 10;
    if(miliseconds == 1000){
        miliseconds = 0
        seconds++
    }

let s = seconds < 10 ? '0' + seconds : seconds;
let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

timerRef.innerText = `${s} : ${ms}`
}

