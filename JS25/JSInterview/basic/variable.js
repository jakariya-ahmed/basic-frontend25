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
    let custId;
    if (true) {
        custId = 58585959;
        var userId = 67890;
         // Block scoped variable
        console.log(secretId); // Accessible here
        console.log(custId);
    }

    console.log(secretId); // Accessible here
    console.log(userId); // Error: userId is not defined
    console.log(custId);
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
// console.log("var score:", score); // Output: var score: 30

var funcs = [];
// for (var i = 0; i < 3; i++) {
//     funcs.push(function(){console.log(i); });
// }

for (let i = 0; i < 3; i++) {
    funcs.push(function() {console.log(i); })
}

// funcs[0] ();
// funcs[1] ();
// funcs[2] ();





/* ************ 2.let Expalination with example: */
// 0.1 Block scoped => visible within the block it is defined
{
    let city = "Dhaka";
    //console.log(city); // Output: Dhaka
}
// console.log(city); // ReferenceError: city is not defined 


// 0.2 Hoisted
//console.log(usename); // ReferenceError: Cannot access 'usename' before initialization
let usename = "user123";


// 0.3 No Re-declaration but reassignment allowed
// let level = 0;
 let level = 1;
//let level = 2; // Error: Identifier 'level' has already been declared
level = 2;
level = 3; // Update is allowed
//console.log('Your lever is', level); // Output: Your lever is 3
// Block scope example: 
{
    let level = 5; // Different scope
    //console.log("Block level is:", level);
}

// 0.4 let in loop 
let funcsLet = [];
for (let i = 0; i < 4; i++) {
    funcsLet.push(i);
}

// funcsLet[0] ();
// funcsLet[1] ();
// funcsLet[2] ();
// funcsLet[3] ();
// console.log(funcsLet);
// Output: 0 1 2 3


// 0.5 let in Global
let g1 = "Global Let";
var g2 = "Global Var";
//console.log(window.g1); // Output: undefined
//console.log(window.g2); // Output: Global Var



/* ************ 3.const Expalination with example: */
// 0.1 Declaration and initialization
const pi = 3.14159;
//const b; // TypeError: missing initializer in const declaration
//pi = 3.14; // TypeError: Assignment to constant variable

//console.log(pi);


// 0.2 Hoisting
//console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am not hoisted";


// 0.3 Block scoped
{
    const country = "BD";

}
// console.log(country); // ReferenceError: country is not defined


// 0.4 No Re-declaration and no reassignment allowed
const maxScore = 50;
//maxScore = 60; // TypeError: Assignment to constant variable
//const maxScore = 70;// SyntaxError: Identifier 'maxScore' has already been declared 


// 0.5 const with objects and arrays
const person = { name: "Jakariya Ahmed"}

person.name = "jakariya Aman"; // Allowed: modifying properties
//person = {name: "jakariya Ahmad"}; // TypeError: Assignment to constant variable

const nums = [1, 2, 3];
nums.push(4)
//nums = []; // TypeError: Assignment to constant variable

console.log(nums);






















