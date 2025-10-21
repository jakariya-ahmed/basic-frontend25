/** Different between variables var, let, and const **/

// Old way to declare variables
// Function scoped => visible within the entire function 
// Hoisted => can be used before it's declared but initialized with undefined
// Can be re-declared and updated
// Before ES6(2015), the only way to declare a variable in JavaScript was var.


/* ************1. var 
Expalination with example:

*/

var name = "Jakariya";
var age = 25;
var isStudent = true;
function varExample() {
    var msg = "Hello," + name + "!" + "You are " + age + "years odl";
    console.log(msg);
}

// varExample();











































