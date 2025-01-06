function performOperation() {
    // Get user input form input fields.
    let num1 = document.getElementById(`input1`).value;
    let num2 = document.getElementById(`input2`).value;
    // Check if inputs are valid numbers.
    if(!isNaN(num1) && !isNaN(num2)) {
        // Perform operation and display result.
        let mResult = multiply(num1, num2);
        // Convert input values to numbers. Otherwise, they will be treated as strings.
        let aResult = add(Number(num1),Number(num2));
        let sResult = subtract(num1, num2);
        let dResult;
        if (Number(num2) !== 0) {
            dResult = divide(num1, num2);
        } else {
            dResult = `Cannot divide by zero`;
        }
        let result = `Multiplication: ${mResult}, Division: ${dResult}, Addition: ${aResult}, Subtraction: ${sResult}`;
        // Display result.
        displayResult(result);
    } else {
        displayResult(`Please enter valid numbers.`);
    }
}
function multiply(num1, num2) {
    //Introduce a debugger here
    // debugger;
    // Perform multiplication and return result.
    return num1 * num2;
}

function divide(num1, num2) {
    //Introduce a debugger here
    // debugger;
    // Perform division and return result.
    return num1 / num2;
}

function add(num1, num2) {
    //Introduce a debugger here
    // debugger;
    // Perform addition and return result.
    return num1 + num2;
}

function subtract(num1, num2) {
    //Introduce a debugger here
    // debugger;
    // Perform subtraction and return result.
    return num1 - num2;
}

function displayResult(result) {
    // Display result in the paragraph element.
    const resultElement = document.getElementById(`result`);
    resultElement.textContent = `The result is: ${result}`;
}