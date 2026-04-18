// 1. Default Parameters
function createUser(name = "Guest", role = "User") {
    return `${name} is a ${role}`;
}

console.log(createUser());                 // Guest is a User
console.log(createUser("Alice"));          // Alice is a User
console.log(createUser("Bob", "Admin"));   // Bob is a Admin

// Using Expressions
function calculatePrice(price, tax = price * 0.1) {
    return price + tax;
}

console.log(calculatePrice(100));      // 110
console.log(calculatePrice(100, 5));   // 105

// Default parameter depending on another parameter
function greet(name, message = `Hello ${name}`) {
    return message;
}

console.log(greet("John"));                 // Hello John
console.log(greet("John", "Hi there"));     // Hi there

// 2. var vs let (Hoisting behavior) ---
console.log(a); // undefined
var a = 5;

// console.log(b); // ❌ ReferenceError
let b = 10;

// -- Closure issue --
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log("var:", i), 1000);
}

for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log("let:", j), 1000);
}

// -- Fixing var using IIFE --
for (var i = 1; i <= 3; i++) {
    (function(x) {
        setTimeout(() => console.log("fixed var:", x), 1000);
    })(i);
}

// 3. Rest Parameters
console.log("\n3. Rest Parameters");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20));

// 4. Spread Operator
console.log("\n4. Spread Operator");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);

// 5. for...of 
console.log("\n5. for...of");

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

// 6. Template Literals
console.log("\n6. Template Literals");

const name = "Alice";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);