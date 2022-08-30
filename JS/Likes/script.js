// var likes1 = document.querySelector("#likeCounter1");
// var likes2 = document.querySelector("#likeCounter2");
// var likes3 = document.querySelector("#likeCounter3");
// var count1 = 0;
// var count2 = 0;
// var count3 = 0;

var likes = [document.querySelector("#likeCounter1"),
document.querySelector("#likeCounter2"),
document.querySelector("#likeCounter3")];
var count = [0, 0, 0]

function likeRiser(i) {
    count[i]++;
    likes[i].innerText = count[i] + " like(s)";
}

// function likeRiser2() {
//     count2++;
//     likes2.innerText = count2 + " like(s)";
// }

// function likeRiser3() {
//     count3++;
//     likes3.innerText = count3 + " like(s)";
// }

