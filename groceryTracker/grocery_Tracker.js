function calculateTotal(g1, g2, g3) {
    let total = g1 + g2 + g3;
    document.getElementById("result").innerText = `Total: ${total}`;
}

// Define the outerFunction which demonstrates the concept of closures
function outerFunction() {
    // Declare a variable outerVar and assign it a string value
    const outerVar = "I am outside!";

    // Define an inner function that logs the value of outerVar to the console
    function innerFunction() {
        console.log(outerVar);
    }

    // Return the innerFunction, creating a closure
    return innerFunction;
}

// Call outerFunction and assign the returned innerFunction to the constant closure
const closure = outerFunction();

// Invoke the closure function, which logs the value of outerVar to the console
closure(); // I am outside!

// another example
function greet(name) {
    const greeting = "Hello, ";
    function sayHello() {
        console.log(greeting + name);
    }
    return sayHello;
}

const greetJohn = greet("John");
const greetJane = greet("Jane");

greetJohn(); // Hello, John
greetJane(); // Hello, Jane

// Function hoisting
sayHello();
// This works even though the function is defined below the call
function sayHello() {
    console.log("Hello!");
}