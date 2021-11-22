let sum = "";

let output = document.querySelector("#output")

function addToSum(num){
    let result = sum.concat(num)
    sum = result
    output.innerHTML = sum;
}

function evaluateSum(){
    output.innerHTML = eval(sum);
}

function clearSum(){
    sum = "";
    output.innerHTML = sum;
}

