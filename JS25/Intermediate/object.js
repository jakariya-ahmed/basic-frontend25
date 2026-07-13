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
    console.log(`${key}: ${val}`);
});



// console.log(user.name);/



























