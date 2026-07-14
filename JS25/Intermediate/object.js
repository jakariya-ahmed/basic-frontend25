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


/**
 * Get all properties from first element
 */

const employeeFields = Object.values(employees[0]);

/**
 * Get keys for every employee.
 */

const employeeKeys = employees.map((empl) => {
    return Object.keys(empl);
});

/** 
 * Solution: 01
 * Remove the 'Active' property form every employee using Object methods
 */

const publicEmployees = employees.map((empl) => {
    return Object.fromEntries(
        Object.entries(empl).filter(([key]) => {
            return key !== 'active'
        })
    )
});

/**
 * Solution: 02
 * Remove the 'Active' property form every employee using Array mehtods
 * This is the most common modern JS solution.
 */

const removeActiveProperty = employees.map(({ active, ...emply}) => {
    return emply;
});

/**
 * Solution: 03
 * using spread operator and delete
 */

const removeActiveProperty3 = employees.map((emply) => {
   
    const copiedEmployee = { ...emply }
    delete copiedEmployee.active;
    return copiedEmployee;
    // console.log(emply);
});

/**
 * Solution: 04
 * using reduce() operator and push functional programming 
 */

const publicEmployees4 = employees.reduce((result, employee) => {
    const { active, ...publicEmployee } = employee;
    
    result.push(publicEmployee);
    return result;

    // console.log(publicEmployee);
}, []); 

const userList = [
    {id: 2020, name: "ahmed ali", emai: 'ali@gmail.com', designation: 'engineer'},
    {id: 2021, name: "ahmed REZA", emai: 'ali@gmail.com', designation: 'developer'},
    {id: 2022, name: "ahmed HUSSAIN", emai: 'ali@gmail.com', designation: 'archetech'},
    {id: 2023, name: "ahmed AKBAR", emai: 'ali@gmail.com', designation: 'marketing expert'},
    {id: 2024, name: "ahmed karim", emai: 'karim@gmail.com', designation: 'mentor'},
    {id: 2025, name: "ahmed kobir", emai: 'kobir@gmail.com', designation: 'engineer'},
    {id: 2026, name: "ahmed mulla", emai: 'mulla@gmail.com', designation: 'engineer'},
    {id: 2027, name: "ahmed oliur", emai: 'oliur@gmail.com', designation: 'Teacher'},
]

/**
 * Object.assign()-> Copy or merge objects
 * Example:
 * Add salary garde to every employee
 * Original employee objects remain unchaged
 */

/**
 * create a shallow copy
 */
const copyUser = Object.assign({}, user);

console.log(copyUser);

const addStatus = userList.map((user) => {
    return Object.assign({}, user, {
        status: 'active',
    });
});

/**
 * update single user object value
 * 
 */
const userNumberUpdate = userList.map((user) => {
    const radomPhoneNumber = '+8801' + Math.floor(Math.random() * 1_000_000_000)
        .toString()
        .padStart(9, "0")

    if (user.id === 2025) {
        return Object.assign({}, user, {
            phone: radomPhoneNumber
        });
    }
    return user;
});


/**
 * Object.hasOwn() -> checks an object own a property
 */


/**
 * Check Department is avaiable in employees
 */

userList.forEach((user) => {
    if (Object.hasOwn(user, "designation"))  {
        // console.log(user.designation);
    } else {
        // console.log("Department No Assigned");
    }
});


/**
 * User Setting Loaded form the database
 */

const userSetting = {
    theme: 'dark',
    language: 'Bangla'
}

/**
 * Check the user has configured notification
 */

if (Object.hasOwn(userSetting, 'notifications')) {
    console.log(`Notification: ${userSetting.notification}`);
} else {
    // console.log("Using default notification settings");
}

// console.log(userList);

































