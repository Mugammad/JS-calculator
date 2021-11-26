let sum = "";

let output = document.querySelector("#output")

function addToSum(num){
    sum = sum + num;
    output.innerHTML = sum;
}

function evaluateSum(){
    sum = eval(sum)
    output.innerHTML = sum;
}

function clearSum(){
    sum = "";
    output.innerHTML = sum;
}

function delChar(){
    sum = sum.slice(0, -1)
    output.innerHTML = sum;
}

// start of ai funcionality and animation 

let img = new Image();
img.src = "assets/images/talking.jpg"

img.onload = function() {
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const width = 256;
const height = 365;

// this is for me to scale the dimentions if I need to
const scaledHeight = height*0.5
const scaledWidth = width*0.5

// making my life easier by creating the function below
function drawFrame(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, width*frameX, height*frameY, width, height, scaledWidth*canvasX, scaledHeight*canvasY, scaledWidth, scaledHeight)
}

// animations
let normal = [4,4]
let hey = [4, 3]
let smile = [3]
let talk = [3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4]
let angry = [0,0]
let angryTalk = [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0]
let surprised = [5]
let awkwardSmile = [2]

// this chooses the Animation to play
let aniMode = hey;

let loopIndex = 0
frameCount = 0;
let dialogue = document.querySelector(".dialogue");
dialogue.innerHTML = "Hey!";
let me = "woah";

// this does the typing Animation thing 
function typeOut(sentence){
    let i = 0;
    let intervalId = window.setInterval(()=>{
        dialogue.innerHTML = sentence.substring(0,i);
        i++
        if(i > sentence.length){
            window.clearInterval(intervalId);
        }
    },70)
}

// this is where the words generate
function talkText(answer){
    if(answer == "Hi"){
        aniMode = talk;
        typeOut("Welcome, feel free to use the calculator")
    } else if(answer != "Hi" && aniMode == smile){
        aniMode = angryTalk;
        typeOut(me);
    }
}


// the function that makes the animations happen
function talking(){
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(talking);
        return;
        // if frameCount is less than 15 it skips what follows and.....
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawFrame(aniMode[loopIndex], 0, 0, 0)
    loopIndex++
    if(loopIndex >= aniMode.length ){
        loopIndex = 0;
        if (aniMode == talk){
            aniMode = normal;
        } else if(aniMode == hey) {
            aniMode = smile;
        } else if(aniMode == angryTalk) {
            aniMode = angry;
        }
    }
    // .....continues here
    window.requestAnimationFrame(talking)
}

function init() {
    window.requestAnimationFrame(talking) 
  }

// end of ai 
