const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

const randomSquare = () =>{
    squares.forEach(square => {
        square.classList.remove('mole');
        square.classList.remove('mole-whac');        
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // console.log(randomPostion)
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(sqaure => {
    sqaure.addEventListener('click', ()=>{
        if(sqaure.id == hitPosition){
            sqaure.classList.add('mole-whac');            
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

const moveMole = ()=>{
    timerId = setInterval(randomSquare, 500)
}

// randomSquare()
moveMole();

const countDown = ()=>{
    currentTime --;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`Game Over! Your final score is ${result}`)
    }
}

let countDownTimerId = setInterval(countDown, 1000);

document.getElementById('reload').onclick = ()=>{
    document.location.reload();
}