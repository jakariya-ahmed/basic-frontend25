
/** const fullName = "Jakariya Ahmed";
const dateOfBirth = "2002-12-02";
let age = 26;
const favoriteLanguage = "JavaScript";
const githubProfileUrl = "https://github.com/jakariyaahmed";
let totalScore = 10;
    totalScore += 5;
const country = "Bangladesh";
let isRemoteJobAvailable = true;
*/


const fullName = "Jakariya Ahmed";
const dateOfBirth = new Date("2002-12-02");
let currentAge = 26;
const favoriteLanguage = "JavaScript";
const githubProfileUrl = "https://github.com/jakariyaahmed";
let totalScore = 10;
    totalScore += 5;
const country = "Bangladesh";
const isRemoteJob = true;



/************ Reassignment variables: *************/
// let 
let currentBalance = 1000;
    currentBalance = 5000; // Reassigning the value of currentBalance

// console.log("Current Balance:", currentBalance); // Output: Current Balance: 1000

// var
var previousBalance = 2000;
    previousBalance = 3000; // Reassigning the value of previousBalanace
// console.log("Previous Balance:", previousBalance); // Output: Previous Balance: 2000

// const with variable and object
const favoriteColor = "Orange";
    // favoriteColor = "Sky Blue"; //TypeError: Assignment to constant value of favoriteColor
const user = { name: "Jakariya", age: 26 };
        user.age = 27; // Object property can be reassigned

        
        
/************ Redeclaration Variables: *************/
// var
var city = "Dhaka";
var city = "Chittagong"; // Redeclaring the variable city

// let
let score = 10;
// let score = 20; // SyntaxError: Identifier 'score' has already been declared

// const
const balance = 1200;
// const balance = 1500; // SyntaxError: Identifier 'balance' has already been declared


/************ Block Scope Variables *************/
// let
{
    let age = 26;
    // console.log("Your Current Age:", age);
}
// console.log("Your Current Age:", age); // ReferenceError: age is not defined

// const
{
    const accountNumber = "1234567890";
    // console.log("Your Current Number:", accountNumber); // Allowed to access inside of block scope
}

// console.log("Your Current Number:", accountNumber); // ReferenceError: accountNumber is not defined

// var
{
    var systemMessage = "System is running smoothly.";
    // console.log("System Message:", systemMessage);
}
// console.log("System Message:", systemMessage);

/// Why Block Scope is Important? Imagine a shopping cart
/*
let totalPrice = 400;
let discountPrice = totalPrice;
let discountAmount = 0;
let discountApplied = true;

if (discountApplied) {
    discountAmount = 120;
    discountPrice -= discountAmount; // Reassigning the value of discountAmount
}

*/

/*Calculate the total price, discount amount, and discount price based on 
the shopping cart scenario */

// Original product price before applying any discount
let totalPrice = 400;
// Create a separate variable to preserve the original total price
// All Discount calculations will be performed on this copy of the total price
let discountPrice = totalPrice;
// Default discount amount remains 0 unless a discount is applied
let discountAmount = 0;
// Indicate whether the customer is eligible for a discount or not
let discountAppled = true;


if (discountAppled) {
    discountAmount = 120;
    discountPrice -= discountAmount;
}

/*
console.log("Total Price:", totalPrice); // Output: Total Price: 400
console.log("Discount Amount:", discountAmount);
console.log("Discount Price:", discountPrice); // Output: Discount Price: 280
*/

J



/*====================== Function Scope with let and const ======================*/


function getUserInfo() { 
    // Store the current user's name and value only needed while this function is executes.
    let userName = "Jakariya Ahmed";
    console.log("User Name:", userName);

}











