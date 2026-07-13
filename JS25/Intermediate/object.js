/* Level 1 (Daily Use)
-------------------
1. Object.keys()
2. Object.values()
3. Object.entries()
4. Object.fromEntries()

↓

Level 2
-------------------
5. Object.assign()
6. Object.hasOwn()

↓

Level 3
-------------------
7. Object.freeze()
8. Object.seal()
9. Object.is()

↓

Level 4
-------------------
10. Object.defineProperty()
11. Object.getOwnPropertyDescriptors()

↓

Level 5 (Advanced)
-------------------
12. Object.create()
13. Prototype Methods
14. Property Descriptors
15. Symbols

*/


/**
 * keys() -> returns an array containing all enumerable property names of an object
 */

const user = {
    id: 101,
    name: "Jakariya Aman",
    emai: "dev@email.com",
    role: "Software Engineer"
}

/**
 * Retrive all property names to generate UI 
 */

const userKeys = Object.keys(user);
const userLenght = Object.keys(user).length;

/**
 * value() -> returns an arrray containint all property values
 */
const userVal = Object.values(user);

/**
 * 
 */
Object.entries(user).forEach(([key,val]) => {
    // console.log(`${key}: ${val}`);
});


/**
 * Object.entries() -> converts an object into an array of key-value paris
 * 
 */
const entries = Object.entries(user);


/**
 * Invoice line item
 */

const invoice = {
    id: 202,
    laptop: 23393,
    mouse: 203,
    keboard: 430,
}

/**
 * Print invoice
 */

Object.entries(invoice).forEach(([name, price]) => {
    // console.log(`${name} - ${price}`);
});


/**
 * fromEntries() -> does the opposite of entries()
 */

const entriesData = [
    ['id', 105],
    ['Name', "Jakariya"],
    ['Role', "Frontedn Develooper"],
    ['Status', 'Active'],
];

const entriesObject = Object.fromEntries(entriesData); 

const activeEntries = Object.entries(entriesObject).filter(([key]) => {
    return key !== 'Status';
});


const discountedPrice = Object.fromEntries(
    Object.entries(invoice).map(([product, price]) => {
        return [product, price * 0.9];
    })
);




const employees = [
    {id: 101, name: 'Jakariya Aman', department: 'Engineering', designation: 'Software Engineer', active: true},
    {id: 102, name: 'Ali Aman', department: 'Design', designation: 'Graphic Designer', active: true},
    {id: 103, name: 'Arif Akbar', department: 'Data Expert', designation: 'Data Analytics ', active: false},
    {id: 104, name: 'Sayem Talukdar', department: 'Software Development', designation: 'Web Developer', active: true},
    {id: 105, name: 'Mussadik ali', department: 'Engineering', designation: 'Software Engineer', active: false},
];


console.log(invoice);
console.log(discountedPrice);



























