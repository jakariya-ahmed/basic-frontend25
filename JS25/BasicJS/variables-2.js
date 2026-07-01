
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
const balance = 1500; // SyntaxError: Identifier 'balance' has already been declared





{
    console.log("This is a block");
}


console.log("Your Current Balance:", balance);



