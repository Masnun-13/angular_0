"use strict";
function sub(num1, num2) {
    return num1 - num2;
}
console.log(sub(2, 3));
function mul(num1, num2) {
    return num1 * num2;
}
function add(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add(2, 3, 4, 5, 6, 7, 8, 9, 10));
function getItems(items) {
    return new Array().concat(items);
    let concatResult = getItems([1, 2, 3, 4, 5]);
    let concatString = getItems(["a", "b", "c", "d,", "e"]);
}
