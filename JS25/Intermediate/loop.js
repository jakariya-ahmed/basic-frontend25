/**
 * for() -> full control over the loop
 * for...of -> Iterate over vales
 * for...in -> Iterate over property names 
 */


/**
 * for() loop is JS classic loop
 * Use it when you need index control
 */

const students = [
    "Jakariya",
    "Ahmed",
    "Rusel",
    "Ali"
];

for (let i = 0; i < students.length; i++) {
    const result = `Index: ${i}, Name: ${students[i]}`;
    // console.log(result);
}

/**
 * Retrive products 
 */
const products = [
    {name: 'laptop', price: 20000},
    {name: 'mouse', price: 300},
    {name: 'keyboard', price: 450},
    {name: 'pendrive', price: 1050},
];

/** 
 * Solution: 01
 * How to add new property in existing object
 * 
 * Add Discount Price Using for() loop
*/
for (let i = 0; i < products.length; i++) {
    /**
     * Calculate the discount price
     */
    const discountPrice = products[i].price * 0.9;

    /**
     * Add discount price to the existing object.
     */

    // products[i].discountPrice = discountPrice;

    // console.log(discountPrice);
}


/**
 * Solution: 02 => Object.assign()
 * Add new property to the existing object 
 */

for (let i = 0; i < products.length; i++) {
    /**
     * Calculate discount pric
     */
    const discountPrice = products[i].price * 0.9;
    
    /**
     * 
     * Add new property in existing object by Object.assign(); method
     */
    Object.assign(products[i], {
        // discountPrice: discountPrice 
    });

}

/**
 * 
 * Solution: 03 => Map() => Best Approach
 * Add new property to the existing object 
 * create a new array with discountPrice
 */
const discountPrice = products.map((product) => ({
    ...product,
    discountPrice: product.price * 0.9
}));

/**
 * 
 * Solution: 04 => reduce()
 * Add new property to the existing object 
 * create a new array with discountPrice
 */
const discountedPrice = products.reduce((result, product) => {
    result.push({
        ...product,
        discountPrice: product.price * 0.9,
    });
    return result;
}, []); 

/**
 * 
 * Solution: 05 => Helper Function for reuse 
 * Add new property to the existing object 
 * create a new array with discountPrice
 */
function addDiscount(product) {
    // console.log(product);
    return {
        ...product,
        discountPrice: product.price * 0.9,
    }
}
// const discountByFunction = products.map(addDiscount);

const discountByFunction = products.map(function (product) {
    return {
        ...product,
        discountPrice: product.price * 0.9,
    }
});


/**
 * for...of
 */
for (const student of students) {
    console.log(student);
}


// console.log(discountByFunction);
















