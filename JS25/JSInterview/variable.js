/** Different between variables var, let, and const **/

// Old way to declare variables
// Function scoped => visible within the entire function 
// Hoisted => can be used before it's declared but initialized with undefined
// Can be re-declared and updated
// Before ES6(2015), the only way to declare a variable in JavaScript was var.


/* ************1. var Expalination with example: */

// Old way to declare variables
var name = "Jakariya";
var age = 25;
var isStudent = true;
function varExample() {
    var msg = "Hello," + name + "!" + "You are " + age + "years odl";
    console.log(msg);
}

// varExample();
// 0.2 Function scoped example:
function varFunctionScope() {
    var secretId = 12345; // Function scoped variable

    if (true) {
        let userId = 67890; // Block scoped variable
        console.log(secretId); // Accessible here
    }

    console.log(secretId); // Accessible here
    //console.log(userId); // Error: userId is not defined
}

// varFunctionScope();

// 0.3 Hoisted example:
//console.log(hoistedVar); // Output: undefined
//console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
var hoistedVar = "I am hoisted" ; // Declaration is hoist
let hoistedLet = "I am not hoisted"; // Declaration is not hoist


// 0.4 Re-declaration and reassignment are allowed example:
var score = 10;
var score = 20; // Re-declaration is allowed
score = 30; // Update is allowed
// let nameLet = "Alice";
// let nameLet = "Bob"; // Error: Identifier 'nameLet' has already been declared
// nameLet = "Charlie"; // Update is allowed
console.log("var score:", score); // Output: var score: 30







/* ************ 2.let Expalination with example: */









































