let count = 0; // initial count to 0

function increaseCount() {
  count++; // increase count by 1
  displayCount(); // call displayCount function
  checkCountValue(); // call checkCountValue function
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; // display count in the HTML element with id "countDisplay"
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount() {
    count = 0; // reset count to 0
    displayCount(); // call displayCount function
}