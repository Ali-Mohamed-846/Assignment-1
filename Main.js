//Q1//
let x = "123"
console.log(Number(x) + 7)
// ************************************************ //
//Q2//
function checkFalsyValue(value) {
    if (!value) {
        console.log("Invalid");
    } else {
        console.log("Valid");
    }
}
// ************************************************ //
//Q3//

for (i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        continue
    }
    console.log(i)
}
// ************************************************ //
//Q4//

let Numbers = [1, 2, 3, 4, 5]
let even = Numbers.filter(num => num % 2 == 0)
console.log(even)
// ************************************************ //
//Q5//

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const merge = [...arr1, ...arr2]
console.log(merge)
// ************************************************ //
//Q6//
function GetDay(DayNumber) {
    switch (DayNumber) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;
        default:
            console.log("invalid ")
    }
}
// ************************************************ //
//Q7//
function getStrLength(arr) {
    return arr.map(str => str.length);
}

const arr = ["a", "ab", "abc"];

console.log(getStrLength(arr));
// ************************************************ //
//Q8//
function CheckDivisibleBy3And5(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Divisible by both")
    }
    else {
        console.log("Can't By Divisible by both")
    }
}
// ************************************************ //
//Q9//
const SquareNum = (number) => {
    return number * number;
};
let result = SquareNum(3)
console.log(result)
// ************************************************ //
//Q10//
function PersonInfo(person) {
    const { name, age } = person;
    return `${name} is ${age} years old`;
}

const person = {
    name: "John",
    age: 25
};

console.log(PersonInfo(person));
// ************************************************ //
//Q11//
function sumNumbers(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5));
// ************************************************ //
//Q12//
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getMessage().then((message) => {
    console.log(message);
});

// ************************************************ //
//Q13//
function findTheLargestNumber(arr) {
    let largestNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}

console.log(findTheLargestNumber([1, 3, 7, 2, 4]));

// ************************************************ //
//Q14//
function getObjectKeys(obj) {
    return Object.keys(obj);
}

const Person = {
    name: "John",
    age: 30
};

console.log(getObjectKeys(Person));

// ************************************************ //
//Q15//
function splitString(str) {
    return str.split(" ");
}

console.log(splitString("The quick brown fox"));



// PART 2 //

/*
1. What is the difference between forEach and for...of? When would you use each?

forEach

 It is an array method.
Works only with arrays.
Cannot use break or continue.
Used to perform an action on every element.

const arr = [1, 2, 3];

arr.forEach(num => {
    console.log(num);
});
.................................................................................
for...of

It is a loop that works with iterable objects (arrays, strings, etc.).
Supports break and continue.
Used when you need more control over the loop.
const arr = [1, 2, 3];

for (const num of arr) {
    if (num === 2) break;
    console.log(num);
}
    when would you use each?
for of  : Use for of when you need more control over the loop
Use for of to loop through iterable objects such as arrays, strings, sets, and maps
Use for of when you need break or continue

forEach : Use forEach to perform an action on every element in an array.
Use forEach when you don't need break or continue

    ////////////////////////////////////////////////////////////////////////////////
2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting

Hoisting is JavaScript behavior of moving declarations to the top of their scope before execution.
var are hoisted and initialized with undefined.
console.log(x);
var x = 10;

Output:

undefined
.....................................................................................
Temporal Dead Zone (TDZ)

The TDZ is the time between entering a scope and declaring a let or const variable.
Accessing the variable during this period causes a Reference Error.
console.log(x);
let x = 10;

Output:

ReferenceError
/////////////////////////////////////////////////////////////////////////////////
3. What are the main differences between == and ===?

== 

Compares values only.
Performs type coercion.
5 == "5"; (true)
............................................................................
=== 

Compares both value and data type.
Does not perform type coercion.
5 === "5"; (false)
5 === 5;    (true)

Using === is recommended because it avoids unexpected results.
////////////////////////////////////////////////////////////////////////////////////
4. Explain how try-catch works and why it is important in async operations.


try : contains code that may throw an error.
If an error occurs, the catch block handles it instead of stopping the program.
try {
    console.log(a);
} catch (error) {
    console.log(error.message);
}

With async/await:

async function getData() {
    try {
        const result = await fetch(url);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Importance:

Prevents the application from crashing.
Handles API and network errors easily
///////////////////////////////////////////////////////////////////////////////////////////

5. What’s the difference between type conversion and coercion? Provide examples of each.

Type Conversion (Explicit Conversion)

The programmer manually converts one data type to another.
let x = "10";

console.log(Number(x)); // 10

Type Coercion (Implicit Conversion)

JavaScript automatically converts data types when needed.
"10" * 2; (20)
5 + "5";   ("55")

Difference:

Type Conversion: Manual conversion by the programmer.
Type Coercion: Automatic conversion by JavaScript. */

