/**
 * Arrays
│
├── Basic Operations
│   ├── push() -> Adds one or more elements to the end of and array and return the new length of array
│   ├── pop() -> Removes the last element from an array and return that element
│   ├── shift() -> Removes the first element form an array and return that element
│   ├── unshift() -> Adds one or more element to the begining of an array and return the new length of array.
│   ├── slice()
│   ├── splice()
│
├── Searching
│   ├── includes()
│   ├── indexOf()
│   ├── find()
│   ├── findIndex()
│
├── Iteration
│   ├── forEach()
│   ├── map()
│   ├── filter()
│   ├── reduce()
│   ├── some()
│   └── every()
│
├── Sorting
│   ├── sort()
│   ├── reverse()
│
├── Flattening
│   ├── flat()
│   └── flatMap()
│
└── Modern ES2023+
    ├── toSorted()
    ├── toReversed()
    ├── toSpliced()
    └── with()
 * 
 */




/**
 * push() - Adds one or more elements to the end of an array and returns the new length of the array.
 * Example: 
 * Shopping cart before adding a new product 
 * 
 */

const shoppingCart = [];

/**
 * Add a newly selected product to the end of the cart
 * `push()` mutates te original array and return new length of array
 */
shoppingCart.push("Laptop", "Mouse");
shoppingCart.push("Keyboard");


/**
 * unshift() - Adds one or more elements to the begining of an array and return the new length of the array.
 * Example:
 * VIP Guest should be placed at the front of the sat
 * `unshift()` mutates the original array and return new length of array
 */

const guestList = ["Jakariya", "Ahmed", "Ali"];

/**
 * Insert a VIP guest at the begining of the list
 */

guestList.unshift("Aman Khan");

/**
 * Why used const in array?
 * In JavaScript, when you declare an array using const, it means that the reference to the array cannot be changed. 
 * However, you can still modify the contents of the array (e.g., adding or removing elements) because the array itself is mutable.
 * 
 * In JavaScript, when an array refference is declared using const, it means that 
 */




/**
 * pop() -> Removes the last elements from an array and returns that elements. 
 * Example: 
 * Remove the last product from the shopping cart
 * `pop()` mutates the original array and return te removed elements
 */

const removedItem = shoppingCart.pop();




/**
 * shift() -> Removes the first element from an array and returns that element.
 * Example: 
 * Remove the first guest from the guest list
 * `shift()` mutates the original array and return the removed elements
 */


const removedFirstGuest = guestList.shift();

/** lenght();
 * List of products currently in the customer's shopping cart
 */
const totalItem = shoppingCart.length;






console.log("Total Products Cont:", totalItem);
console.log("products:", shoppingCart);