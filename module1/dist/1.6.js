"use strict";
// Learning Function
// Normal function
// Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
var addArrow = function (num1, num2) { return num1 + num2; };
var poorUser = {
    name: "Asad",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is ".concat(this.balance + balance);
    }
};
var arr = [1, 3, 4];
var newArray = arr.map(function (element) { return element * element; });
