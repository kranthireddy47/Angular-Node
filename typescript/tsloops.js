var num = [1, 2, 4, 5, 6, 7, 8];
console.log("array using loops");
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("using for in loop");
for (var i in num) {
    console.log("index is: " + i + "value is: " + num[i]);
}
console.log("using of loop");
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var i = num_1[_i];
    console.log("value is: " + i);
}
