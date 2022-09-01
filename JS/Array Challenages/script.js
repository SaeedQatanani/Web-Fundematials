
// function alwaysHungry(arr) {
//     var index = 1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             index = 0;
//             console.log("yummy");
//         }
//     }
//     if (index == 1) {
//         console.log("I'm hungry");
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);


// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j] > cutoff) {
//             filteredArr.push(arr[j]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// var avg = 0;
// function betterThanAverage(arr) {
//     var sum = 0;
//     var count = 0;
//     for (var z = 0; z < arr.length; z++) {
//         sum += arr[z];
//     }
//     avg = sum / arr.length;
//     for (var z = 0; z < arr.length; z++) {
//         if (arr[z] > avg) {
//             count++;
//         }
//     }
//     // count how many values are greated than the average
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// function reverse(arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var myVariable  = arr[i]
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-i-1] = myVariable;
//     }
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
        fibArr.push(fibArr[i]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




