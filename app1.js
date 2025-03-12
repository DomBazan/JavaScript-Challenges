//QUESTION 10
// Define the pairs of numbers
const pairs = [
    [4, 2],
    [7, 8],
    [9, 8]
];

// Function to calculate and log the remainder for each pair
function calculateRemainders(pairs) {
    pairs.forEach(pair => {
        const dividend = pair[0];
        const divisor = pair[1];
        const remainder = dividend % divisor;
        console.log(`The remainder of ${dividend} divided by ${divisor} is: ${remainder}`);
    });
}

// Call the function with the defined pairs
calculateRemainders(pairs);


//QUESTION 11

function isAnyOdd(num1, num2) {
    return (num1 % 2 !== 0) || (num2 % 2 !== 0);
}

// Example usage:
console.log(isAnyOdd(4, 2)); // Output: false
console.log(isAnyOdd(7, 8)); // Output: true
console.log(isAnyOdd(9, 8)); // Output: true
console.log(isAnyOdd(4, 3)); // Output: true

//QUESTION 12
function checkOddOrEven(num1) {
    // Check if either number is odd
    if (num1 % 2 !== 0) {
        return -1; // Return -1 if either number is odd
    } else {
        return 1; // Return 1 if both numbers are even
    }
}

// Example usage:
console.log(checkOddOrEven(2)); // Output: 1 (2 is even)
console.log(checkOddOrEven(7,)); // Output: -1 (7 is odd)
console.log(checkOddOrEven(9)); // Output: -1 (9 is odd)
console.log(checkOddOrEven(4)); // Output: 1 (4 is even)


//QUESTION 13
function checkStatus(status1, status2) {
    return status1 === "LOGGED_IN" && status2 === "SUBSCRIBED";
}

// Example usage:
console.log(checkStatus("LOGGED_IN", "SUBSCRIBED")); // Output: true
console.log(checkStatus("LOGGED_IN", "NOT_SUBSCRIBED")); // Output: false
console.log(checkStatus("NOT_LOGGED_IN", "SUBSCRIBED")); // Output: false
console.log(checkStatus("LOGGED_IN", "SUBSCRIBED")); // Output: true
console.log(checkStatus("LOGGED_IN", "SUBSCRIBED")); // Output: true