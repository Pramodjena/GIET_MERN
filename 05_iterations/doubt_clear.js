const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let n = 0;

while (n < 3) {
  console.log(n);
  n++;
}

let num = 0;

do {
  console.log("Number is: " + num);
  num++;
} while (num);

console.log(sayName);

function sayName(name) {  // function declartion
  console.log(name);
}

sayName("Pramod")

// Arrow function :

console.log(sayName);

const sayName = (name) => {
  console.log(name);
};

sayName("Pramod"); // function invocation / function call

// Ternery Operator

const age = 22;

if (age > 18) {
  console.log("I'm an adult");
} else {
  console.log("I'm under 18");
}

age > 18 ? console.log("I'm an adult") : console.log("I'm under 18");



// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Optional Chaining 

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);