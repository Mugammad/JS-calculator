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
