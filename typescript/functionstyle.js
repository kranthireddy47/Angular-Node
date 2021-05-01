//function parameter passing
function empinfo(id, name, salary) {
    console.log("is is " + id);
    console.log("Name is " + name);
    console.log("Saary is " + salary);
}
empinfo(100, "kranthi", 23456);
function welcome(namm) {
    return "Welcomeee" + namm;
}
console.log(welcome("kranthi kumar reddy"));
function add(a, b) {
    var sum = a + b;
    console.log(sum);
}
add(200, 300);
function person(id, name, age) {
    if (name === void 0) { name = "unknown"; }
    if (age === void 0) { age = 0; }
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("Age is " + age);
}
person(23, "Ravi", 45);
person(25, "ramu");
person();
