let length;
let width;

function calculateArea(length, width) {
    // parsefloat is used to convert string to float
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let area = length * width;
    // innerText is used to set the text content of the specified node
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
