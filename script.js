let currentBallState = false;
let movingBallPosition = 0;

const box = document.getElementById("box")
const centerSection = document.getElementsByClassName("center-section")[0];
const firstBall = document.getElementById("first-ball");
const secondBall =document.getElementById("second-ball");
const movingBall =document.getElementById("moving-ball");

const maximumPath = centerSection.getBoundingClientRect().top - box.getBoundingClientRect().top - 30;

centerSection.addEventListener("click",()=>{
    currentBallState=!currentBallState
    if(currentBallState){
        firstBall.classList.add("blue")
        firstBall.classList.remove("red")
        secondBall.classList.add("red")
        secondBall.classList.remove("blue")
    }
    else{
        firstBall.classList.add("red")
        firstBall.classList.remove("blue")
        secondBall.classList.add("blue")
        secondBall.classList.remove("red")
    }
})
setInterval(()=>{
    movingBallPosition += 2;
    if( movingBallPosition >= maximumPath){
        movingBallPosition -= 2; 
    }
    movingBall.style.top=movingBallPosition+"px";
},20);


