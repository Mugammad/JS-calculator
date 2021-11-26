let sum = "";

let output = document.querySelector("#output")

function addToSum(num){
    sum = sum + num;
    dialogue.innerHTML = sum;
    if(sum != "1 + 1"){
        talkText(sum)
    }
}

function evaluateSum(){
    dialogue.innerHTML = "Answer is " + eval(sum);
    aniMode = talkNumber;
    talkText(sum)
    sum = eval(sum)
}

function clearSum(){
    aniMode = talk;
    sum = "";
    dialogue.innerHTML = sum;
    typeOut("Calculate something");
}

function delChar(){
    sum = sum.slice(0, -1)
    dialogue.innerHTML = sum;
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
let talkNumber = [3, 4, 3, 4, 3, 4,]
let angry = [0,0]
let angryTalk = [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0]
let surprised = [5]
let awkwardSmile = [2]

// this chooses the Animation to play
let aniMode = hey;

let loopIndex = 0
frameCount = 0;
let dialogue = document.querySelector(".dialogue");
dialogue.innerHTML = "Hey! I'm Cal.";

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

let sayHi = document.getElementById("sayHi")
// this is where the words generate
function talkText(answer){
    if(answer == "Say hi"){
        sayHi.classList.toggle("vanish");
        sum = ""
        aniMode = talk
        typeOut("What do you need to calculate today?");
    }else if((answer == sum && aniMode == smile) || aniMode == angry){
        sum = "";
        aniMode = angryTalk;
        typeOut("Bro!? I said hi");
    }else if(sum == "1 + 1"){
        aniMode = surprised;
        typeOut("seriously bro? You dont know?" + " it's " + eval(sum))
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
        if (aniMode == talk || aniMode == talkNumber){
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
