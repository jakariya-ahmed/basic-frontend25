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
│   ├── includes() -> check element is exist in array
│   ├── indexOf() -> searchin the index number of element
│   ├── find() -> 
│   ├── findIndex() -> 
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

/**
 * Employes IDs currently registered in system
 */
const employeeIds = [102, 103, 104, 105];

/**
 * Searc a specific employee ID
 */
// const employeeId = 104;

/**
 * Findout emplyee index of the employes list
 */

const employeeIndex = employeeIds.indexOf(104);

if (employeeIndex !== -1) {
    // console.log(`Employee found at index: ${employeeIndex}`);
} else {
    // console.log("Employee not found");
}


/**
 * includes()
 * when you only need to know does this value exist?
 * It return boolean true/false
 */

const coupnsList = ['vip_coupon', 'cursor_120', 'normal_coupon'];

// console.log(`Coupon is avaiable: ${coupnsList.includes('cursor_120')}`);



/**
 * find() -> when you need the actual object value by condition is match return value or not
 * Example:
 * Employees registered in the company database
 */
const employees = [
    {id: 101, name: 'Jakariya Aman', department: 'Engineering', designation: 'Software Engineer'},
    {id: 102, name: 'Ali Aman', department: 'Design', designation: 'Graphic Designer'},
    {id: 103, name: 'Arif Akbar', department: 'Data Expert', designation: 'Data Analytics '},
    {id: 104, name: 'Sayem Talukdar', department: 'Software Development', designation: 'Web Developer'},
    {id: 105, name: 'Mussadik ali', department: 'Engineering', designation: 'Software Engineer'},
];

/**
 * Retrive the employee whose ID matches the search
 * `find()` return the employee object itself
 */

const employeeInfo = employees.find((employee) => {
    return employee.id === 104; 
});
// console.log(employeeInfo);



/**
 * findIndex() -> method return the index of array by condition
 * if nothin mathes, it return -1;
 */
const inventory = [
    { id: 1, name: "Laptop", price: 35, stock: 10 },
    { id: 2, name: "Mouse", price: 23, stock: 25 },
    { id: 3, name: "Keyboard", price: 56, stock: 15 }
];

/**
 * Find out product index before updatin its stock quantity
 */

const productLocation = inventory.findIndex((product) => {
    return product.id === 2;
});

/**
 * Update the stock only if the product exists.
 */
if (productLocation !== -1) {
    inventory[0].stock += 20;
}



/**
 * forEac() -> is an array method that executes a callback function once for each element
 * forEach() -> does not return a new array
 * forEach() -> does not mutates the array
 */

/**
 * Display each employee 
 * `forEach()` is ideal when performing an action for every element.
 */

employees.forEach((employer, i, arr) => {
    // console.log(`${ i + 1 }.`, employer);
})



/**
 * map() -> is an array method that creates and returns a new array by transforming 
 * every element of the original array
 */

/**
 * Create a new product list wit discounted price
 * `map()` is used for transform every product
 * while preserving the original array
 */
const DISCOUNT_PERCENTAGE = 15;
const discountedProducts = inventory.map((product) => {
    let discountAmount = product.price * (DISCOUNT_PERCENTAGE/100); 
    return {
        ...product,
        discountPercentage: DISCOUNT_PERCENTAGE,
        discountAmount: discountAmount,
        discountedPrice: product.price - discountAmount,
    }
});


discountedProducts.map((pro) => {
    console.log("product name:", pro.name)
    console.log("product name:", pro.price)
    console.log("product name:", pro.stock)
    console.log("product name:", pro.discountAmount)
    console.log("product name:", pro.discountedPrice)
});

// console.log(discountedProducts);
















