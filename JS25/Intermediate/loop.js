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
    {id: 1, name: 'laptop', qty: 8, price: 20000, status: 'pending'},
    {id: 2, name: 'mouse', qty: 5, price: 300, status: 'success'},
    {id: 3, name: 'keyboard', qty: 3, price: 450, status: 'pending'},
    {id: 4, name: 'pendrive', qty: 1, price: 1050, status: 'success'},
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
// console.log(products);

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
    // discountPrice: product.price * 0.9
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
        // discountPrice: product.price * 0.9,
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
        // discountPrice: product.price * 0.9,
    }
});


/**
 * for...of
 */
let totalPrice = 0;
for (const product of products) {
    totalPrice += product.price
}


/**
 * Filter active students and store in seperate array 
 */
// Store active students 
const activeProducts = [];
/**
 * visit the every student
 */
for (const product of products) {
    /** 
     * only active stduent are added to the list
     */
    if (product.status === 'success') {
        activeProducts.push(product)
    }
}

/**
 * product discount by for..of
 */

for (const product of products) {
    /**
     * Store Product discout price
     * Store Product Discount Amount
     */
    const discountPercentage = 10;
    const discountAmount = product.price * (discountPercentage / 100);
    const discountPrice = product.price - discountAmount;
    // product.discountAmount = discountAmount;
    // product.discountPrice = discountPrice;

    // console.log(discountPrice);

}


/**
 * create discount by reduce()
 */

const discountByReduce = products.reduce((result, product) => {
    const discountAmount = product.price * (10 / 1000);
    result.push({
        ...product,
        // discountAmount,
        // discountPrice: product.price - discountAmount,
    });
    return result;
}, []);


/**
 * Industy Level problem solving
 * Product add to card and calculate total with discount
 */

/**
 * =======================================================================
 */
/**
 * Store all cart products
 */
const cart = [];

/**
 * Add product to cart
 */

const product = products.find((item) => item.id === 3);

if (product) {
    cart.push({
        ...product,
        qty: 3,
    });
}

/**
 * Calculation Total price
 */
const discountPercentage = 10;
const subtotal = cart.reduce((sum, item) => {
return sum + item.price * item.qty;
}, 0);
/**
 * Check the subtotal is >=== 500
 */
const applyDiscount = subtotal > 500 ? 10 : 0 ;
/**
 * Calculate Discount Amount
 */
const discountAmount = subtotal * (applyDiscount / 100);

/**
 * Calculate Discount price
 */
const discountedTotalPrice = subtotal - discountAmount;

/* End
 * =======================================================================
 */

console.log(`Sub Total: ${subtotal}`);
console.log(`Discount Percentage: ${discountPercentage}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Total Price: ${discountedTotalPrice}`);
console.log(product);

















