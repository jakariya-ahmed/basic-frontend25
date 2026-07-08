/**
 * Arrays
│
├── Basic Operations
│   ├── push()
│   ├── pop()
│   ├── shift()
│   ├── unshift()
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

const shoppingCart = ["Laptop", "Mouse"];

/**
 * Add a newly selected product to the end of the cart
 * `push()` mutates te original array and return new length of array
 */

shoppingCart.push("Keyboard");






console.log("Shopping Cart Products:", shoppingCart);