var displayDiv = document.querySelector("#display");
var placeHolder = "";

function press(num) {
    displayDiv.innerText += num;
    placeHolder +=num;
}

function setOP(op) {
    displayDiv.innerText = "";
    placeHolder += op;
}

function calculate() {
    var result = eval(placeHolder);
    displayDiv.innerText = result;
    placeHolder = result;
}

function clr() {
    displayDiv.innerText = "";
    placeHolder = "";
}
