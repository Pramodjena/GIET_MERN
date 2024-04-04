# Iterations in Javascript Series (Web_Bocket):

## Instructor : Pramod Kumar Jena

- In JavaScript, "iterations" refer to the process of repeatedly executing a block of code. This is typically achieved using loops such as for, while, or do...while loops.

- Examples :

```javascript
1. for loop:

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

2. while loop:

let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

3. do... while loop:

let num = 0;

do {
  console.log("Number is: " + num);
  num++;
} while (num < 5);

```

## What is the difference between them ?

- For Loop: Used when you know the number of iterations beforehand.
- While Loop: Used when the number of iterations is uncertain and you want to check the condition before each iteration.
- Do...While Loop: Similar to a while loop, but executes the code block at least once before checking the condition

## What is JSON

```Javascript
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language, but JSON is language-independent, meaning it can be used with any programming language.

{
  "employees": [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "position": "Software Engineer",
      "department": "Engineering"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 28,
      "position": "Data Analyst",
      "department": "Analytics"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "age": 35,
      "position": "Project Manager",
      "department": "Management"
    }
  ]
}

```

## What is HOF(Higher Order Function)

- A higher-order function is a function that either takes another function as an argument or returns a function as a result. In simpler terms, it's a function that operates on other functions, either by accepting them as arguments or by returning them.

Examples: for each, filter, map, reduce etc

```Javascript
1.for each method:
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

2.map method:
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

3.filer method:
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

4.reduce method:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

