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
}




