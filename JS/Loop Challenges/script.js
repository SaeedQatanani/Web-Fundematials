for (let index1 = 1; index1 <= 20; index1++) {
    if (index1 % 2 == 1) {
        console.log(index1)
    }
}

for (var index2 = 100; index2 > 0; index2--) {
    if (index2 % 3 == 0) {
        console.log(index2)
    }
}

for (var index3 = 4; index3 >= -3.5; index3 -= 1.5) {
    console.log(index3)
}

var sum = 0;
for (let index4 = 1; index4 <= 100; index4++) {
    sum += index4;
}
console.log(sum);

var product=1;
for(var index5=1;index5<=12;index5++){
    product *= index5;
}
console.log(product);