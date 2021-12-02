let currentBallState = false;
let movingBallPosition = 0;
let isFromBottam = false;
let movingBallColor = false;
let score = 0;
let speed = 20;
const box = document.getElementById("box")
const centerSection = document.getElementsByClassName("center-section")[0];
const firstBall = document.getElementById("first-ball");
const secondBall =document.getElementById("second-ball");
const movingBall =document.getElementById("moving-ball");
const scoreBox = document.getElementById("score");
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
});


const update = ()=>{
    movingBallPosition += 2;
    if( movingBallPosition >= maximumPath){
        if(isSuccess(currentBallState,isFromBottam,movingBallColor)){
            score++;
            speed = 20 - Math.log(score) * 5;
            console.log(speed);
        }else{
            speed = 20;
            score = 0;
        }
        movingBallPosition = 0;
        isFromBottam =!!Math.floor(Math.random()*2);
        movingBallColor = !!Math.floor(Math.random()*2);
        if(movingBallColor){
            movingBall.classList.add("red")
            movingBall.classList.remove("blue")
        }else{
            movingBall.classList.add("blue")
            movingBall.classList.remove("red")
        }
        scoreBox.innerText = score;
    }
    if(isFromBottam){
        movingBall.style.bottom=movingBallPosition+"px";
        movingBall.style.top="unset";
    }
    else{
        movingBall.style.top=movingBallPosition+"px";
        movingBall.style.bottom="unset";
    }
    setTimeout(update,speed); 
}

setTimeout(update,speed);

const isSuccess = (a,b,c)=>{
    if((!a && !b && c) || (a && !b && !c) || (!a && b && !c) || (a && b && c)) return true
    return false
}