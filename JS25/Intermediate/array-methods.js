/**
 * Arrays
│
├── Basic Operations
│   ├── push() -> Adds one or more elements to the end of and array and return the new length of array
│   ├── pop() -> Removes the last element from an array and return that element
│   ├── shift() -> Removes the first element form an array and return that element
│   ├── unshift() -> Adds one or more element to the begining of an array and return the new length of array.
│   ├── slice() -> return new array containint a portion of the original array
│   ├── splice() -> modify the original array by removing,adding,and replacing
│
├── Searching
│   ├── includes() -> check element is exist in array and return true/false
│   ├── indexOf() -> searchin the index number of element
│   ├── find() -> soft out one item the list of array
│   ├── findIndex() -> soft out index of item in the array
│
├── Iteration
│   ├── forEach() -> executes a callback function once for for each elements in array
│   ├── map() -> create a new array witout modify original array and it can tranforming data 
│   ├── filter() -> soft out multiple elements by using condition. 
│   ├── reduce() -> executes a callback for every element in an arrya with a single value
│   ├── some() -> checks whether at least one element in the array matches a condition
│   └── every()
│
├── Sorting
│   ├── sort() -> arrange the elements of an array and modify original array
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
    {id: 101, name: 'Jakariya Aman', department: 'Engineering', designation: 'Software Engineer', active: true},
    {id: 102, name: 'Ali Aman', department: 'Design', designation: 'Graphic Designer', active: true},
    {id: 103, name: 'Arif Akbar', department: 'Data Expert', designation: 'Data Analytics ', active: false},
    {id: 104, name: 'Sayem Talukdar', department: 'Software Development', designation: 'Web Developer', active: true},
    {id: 105, name: 'Mussadik ali', department: 'Engineering', designation: 'Software Engineer', active: false},
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
    { id: 3, name: "Keyboard", price: 56, stock: 15 },
    { id: 3, name: "Micro Phone", price: 56, stock: 0 },
    { id: 3, name: "Head Phone", price: 60, stock: 5 },
    { id: 3, name: "Air Burd", price: 66, stock: 0 },
    { id: 3, name: "Pendrive", price: 56, stock: 10 },
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

/*
discountedProducts.map((pro) => {
    console.log("product name:", pro.name)
    console.log("product name:", pro.price)
    console.log("product name:", pro.stock)
    console.log("product name:", pro.discountAmount)
    console.log("product name:", pro.discountedPrice)
});

*/

/**
 * filter()-> is an array method that creates a new array with condition
 * used for selecting data
 * does  not modify the original array
 */

/**
 * Disply only products that are currently avaiable
 * `filter()` creates a new array withour modifying the original array
 */

const stockProducts = inventory.filter((product) => {
    return product.stock !== 0;
});

/**
 * get only employees who are working in engineering department 
 */

const engineerEmployees = employees.filter((engineer) => {
    return engineer.department === 'Engineering';
});

/**
 * reduce() -> execites a callback for every element in an array and reduces the array to a single value
 * accumulator -> Stores te accumulated result
 * currentValue -> Current element being processed
 * initialValue -> Starting value of the accumulator
 */

inventory.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price
}, 0);

/**
 * Calculate the total order value
 * `reduce()` combines all product prices into a single total
 * total -> is accumulator that sotores the running result
 * product -> currently array element being processed
 */

const totalPrice = inventory.reduce((total, product) => {
    return total + product.price;
}, 0); // { } 0) is initial value of the accumulator(total)

/**
 * reduce() -> is similar to writing a loop manually
 */

let total = 0;  // reduce initial value

/**
 * Visit every product and add its price to the running total
 */
for (const product of inventory) {
    total += product.price;
}

/**
 * Count how many employees are currently active
 */
const activeEmployees = employees.reduce((count, employee) => {
    return employee.active ? count + 1 : count;
}, 0);


/**
 * Find out highest price in products list
 */

const highestProductPrice = inventory.reduce((max, product) => {
    return product.price > max ? product.price : max;
}, 0); 

/**
 * Manually count how many employees currently active  
 */

let count = 0;

/**
 * Visit every employee and increment the counter
 * if the employee is active 
 */

for (const employee of employees) {
    if (employee.active) {
        count++;
    }
}

/**
 * some() -> cheks at least element in the array matches a condition
 * return true/false
 */

/**
 * Determine whether at least one product is out of stock.
 */
const hasOutOfStockProduct = inventory.some((product) => product.stock === 0); // return boolean

/**
 * every() -> every elements are match return true / not match return false
 * Example:
 * Check every product has available in stock
 */

const productsAvaiable = inventory.every((product) => product.stock > 0); // return true/false 


/**
 * slice() -> return a new array containing a portion of the original array
 * does not modify the original array
 * used for coping or extracting elements
 * systax: array.slice(startIndex, endIndex);  // startIndex: Included, endIndex: Excluded
 */

/**
 * Example: Product list
 * 
 */

const products = ['Laptop', 'Computer', 'Keyboard', 'Mouse', 'Monitor', 'Tablet', 'Phone'];

/**
 * Display the first four products
 */

const firstPageProduct = products.slice(2, 6);


/**
 * Create a shallow copy of array
 */

const copiedRoles = userRoles.slice();


/**
 * splice() -> modifye the original array by
 * removing, adding, replacing elements.
 * Syntax: 
 * array.splice(startIndex, deleteCount, item,item2, ...);
 */


const orderIds = ['order_112389', 'order_34774', 'order_88558', 'order_084747'];

/**
 * Remove the cancelled order
 */
const removedOrders = orderIds.splice(1,3); // remove and generate new array

/**
 * Replace order Id
 */
const replaceOrder = orderIds.splice(1,3,"order_04444", "order_055555");



/**
 * sort() -> arrange elements for ordering
 * modify array
 * Example:
 * sort product by ascending price
 */

const sortByLowPrice = inventory.sort((a, b) => a.price - b.price);

/**
 * reverse() -> reverse the current ordering 
 * example:
 * Transaction history
 */

const transtions = ['Deposit', "Transfer", "Bill Payment", "ATM Withdrawal"];

/**
 * Display the latest transaction
 */

transtions.reverse();

const latestTransaction = [...transtions].reverse();


console.log(latestTransaction);
















