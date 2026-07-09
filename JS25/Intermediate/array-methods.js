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

/**
 * include();
 * checks whether an array contains a specific value
 */

/**
 * Roles assigned to the authenticated user
 * `includes()` return true or false value
 */
const userRoles = ['admin', 'editor', 'moderator'];

const isAdmin = userRoles.includes('admin');
;

/**
 * indexOf()
 * Return the first index where a value appears
 */
const productIndex = shoppingCart.indexOf('mouse');


/**
 * at() -> Returns the element at specified index
 * Unlike bracket notation ([]), at() also supports negative indices 
 */

/**
 * Example:
 * Customer's order history
 */

const orders = ["Order-101", "Order-102", "Order-103"];

/**
 * Retrieve the most recent order using a negative index
 * 
 */

const latestOrder = orders.at(-1);


/**
 * user's unique id store the userId refereence 
 */
const userIds = ['123', '134', '234', '345'];

/**
 * User selected by the admin for removal.
 */
const userToRemove = '345';

/**
 * Locate the position of the user in the user list
 * If the user is not found, `indexOf()` returns -1.
 */
const userIndex = userIds.indexOf(userToRemove);

if(userIndex !== -1) {
    /**
     * Remove exactly one product from the located position
     */
    userIds.splice(productIndex, 1);
}


console.log("Index of User:", userIds);