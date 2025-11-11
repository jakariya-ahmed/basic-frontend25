/* Data Types in Js 
    JavaScript has main two categories of data types:
    Primitive Data Types: 
    1. String   2. Number   3. Boolean   4. Null   5. Undefined   6. BigInt   7. Symbol

    Non-Primitive Data Types:
    1. Object   2. Array   3. Function   4. Date   5. Map/Set

*/

// Example of Primitive Data Types:
let name = "Jakariya Ahmed"; // String
let age = 25;   // Number
let isMale = true;  // Boolean
let country;  // Undefined 
let designation = null;  // Null
let bigNum = 5900230285858550558344857575757575394747474747;  // BigInt
let id = Symbol('unique'); 


// Symbol Data Type Practise 
let serialKey = Symbol('serial');
let model = 'hp elitebook'; 
let productInfo = {
    name: "HP Elitebook 450",
    [serialKey]: '29348458494', // used as property in object
}

// productInfo[serialKey] = '4844949' // Another way to use Symbol variable in object
// console.log(productInfo);





// Non-Primitive Data Types:
let user = { name: "Jakariy Aman", age: 25, designation: 'Frontend Developer'}  // Object
let skills = ['HTML', 'CSS', 'JS', 'React.js'];  // Array
function greet() {return "Hello Dear";}  // Function 
let today = new Date(); // Date 
let map = new Map([['name', 'Jakariya Ahmed'], ['age', 25]]); // Map
let set = new Set([1, 2, 3, 4]);



// Object Data Type:
const userInfo = {
    name: "Ahmed Jakariya",
    age: 26,
    desi: 'Frontend Developer'
}
// Another Variable name
const education = "Bachelor in Computer Science";
const state = "Moulvibazar";
const status = true;
/* Add education value in userInfo Object */
/* 1. using dot(.) notation
    syntax: userInfo.education = education    
object variable name . object property name = variable name ;

*/
userInfo.education = education;

/* 2. Using spread operator (...)
    Syntax: let updateUserInfo = {...userInfo, status}
            declare new object variable = carly bracket {...previousObjectVariable, objectPropertyName}
*/

const updatedUserInfo = {...userInfo, email:'dev@gmail.com'}   // most common in React.js for state update

/* 
    Syntax: userInfo[status] = status;
            object variable name . object property name = new desire variable name
*/
userInfo['status'] = status;


// console.log(userInfo);
// console.log(updatedUserInfo);


