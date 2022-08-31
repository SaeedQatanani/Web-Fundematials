var messageDismisser = document.querySelector("footer");
var temp = document.querySelectorAll("span");
var selectValue = document.querySelector("#temp").value;

function dismiss() {
    messageDismisser.remove();
}

function changeTemp(selectValue) {
    if (selectValue == "feh") {
        for (var i = 0; i < temp.length; i++) {
            temp[i].innerText =Math.round((temp[i].innerText * 1.8) + 32);
        }
    }
    else if (selectValue == "cel") {
        for ( i = 0; i < temp.length; i++) {
            temp[i].innerText = Math.round((temp[i].innerText - 32) * (5/9));
        }
    }
}