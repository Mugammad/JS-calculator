let sum = "";

let output = document.querySelector("#output")

function addToSum(num){
    let result = sum.concat(num)
    sum = result
    output.innerHTML = sum;
}



