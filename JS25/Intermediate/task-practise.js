/**
 * Practise Discount Price and add new property in the existing object 
 * 
 * 
 */

const produtsList = [
    {name: 't-shirt', price: '520', status: 'pending'},
    {name: 'men pent', price: '300', status: 'success'},
    {name: 'mouse', price: '340', status: 'pending'},
    {name: 'keyboard', price: '560', status: 'success'},
];


/** 
 * Solution 01:
 * By for() loop modify the original array
 */
let discountPercentage = 10;
for (let i = 0; i < produtsList.length; i++) {
    /**
     * Store Discount Amount and Discount Price
     */
    let discountAmount = produtsList[i].price * (discountPercentage / 100);
    let discountPrice = produtsList[i].price - discountAmount;

    /**
     * Add product price 
     * Add product amount
     */
    /*
    produtsList[i].discountAmount = discountAmount;
    produtsList[i].discountPrice = discountPrice;
    */

    // console.log(produtsList);

}

/** 
 * Solution 02: 
 * By for() loop && Object.assign() modify the original array
 */
for (let i = 0; i < produtsList.length; i++) {
    /**
     * Store Discount Amount and Discount Price
     */
    const discountAmount = produtsList[i].price * (discountPercentage / 100);
    const discountPrice = produtsList[i].price - discountAmount;
    /**
     * Add product price property
     * Add product amount property
     * using Object.assign() method
     */
    
    Object.assign(produtsList[i], {
        // discountAmount: discountAmount,
        // discountPrice: discountPrice,
    });
    
}


/**
* Solution 03: 
 * By map() -> create new array without modify orignal array
 */

const applyDiscount = produtsList.map((product) => {
    /**
     * Calculate discount amount
     */
    const discountAmount = product.price * (discountPercentage/100);

    return {
        ...product,
        discountAmount,
        discountPrice: product.price - discountAmount,
    }
    
});

/**
* Solution 05: 
 * By Helper Function() -> create new array without modify orignal array
 */

function addDsicount(products, percentage) {
    
    return products.map(product => {
        /**
         * Calculate the discount amount
         */
        const discountAmount = product.price * (percentage / 100);
        /**
         * create new two object properties
         */
        return {
            ...product,
            discountAmount,
            discountPrice: product.price - discountAmount,
        }
    })
}

const discountedProducts = addDsicount(produtsList, discountPercentage);


/**
* Solution 06: 
 * By reduce() -> create new array without modify orignal array
 */

const discountAbleProducts = produtsList.reduce((result, product) => {
    const discountAmount = product.price * (discountPercentage / 100);
    result.push({
        ...product,
        discountAmount,
        discountPrice: product.price - discountAmount,
    });

    return result;

}, []);


// console.log(discountAbleProducts);


