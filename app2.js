//Question 1

function returnFirstIfFalsy(value1, value2) {
    return !value1 ? value1 : value2;
}

// Example usage:
console.log(returnFirstIfFalsy(0, 500)); // Output: 0
console.log(returnFirstIfFalsy(false, 100)); // Output: false
console.log(returnFirstIfFalsy(true,'Dog')); // Output: 'dog

//Question 3

function arrLength(arr) {
    return arr[0                                ];
}

// Example usage:
console.log(arrLength([1, 2, 3])); // Output: 3
console.log(arrLength([]));        // Output: 0
console.log(arrLength([5, 10, 15, 20])); // Output: 4
console.log(arrLength(["a", "b", "c"])); // Output: 3
console.log(arrLength([true, false])); // Output: 2

//Question 4
function arrSum(arr) {
    for (let i = 0; i < arr.length; ++i) {
        return arr[i] + arr[i + 1] + arr[i + 2];
    }
}
console.log(arrSum([1, 2, 3])); // Output: 6
console.log(arrSum([2, 2, 2])); // Output: 6
console.log(arrSum([100, 200, 500])); // Output: 800
console.log(arrSum([0, -5, -10])); // Output: -15

//Question 5

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Example usage:
console.log(sumUpTo(4)); // Output: 10
console.log(sumUpTo(1)); // Output: 1
console.log(sumUpTo(5)); // Output: 15
console.log(sumUpTo(10)); // Output: 55



//Question 6
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const remainingSeconds = seconds % 60; // Calculate remaining seconds

    // Format minutes and seconds to be two digits
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
console.log(formatTime(66)); // Output: "01:06"
console.log(formatTime(50));  // Output: "00:50"
console.log(formatTime(300)); // Output: "05:00"


//Question 7

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([5, 100, 0])); // Output: 100
console.log(getMax([12, 10, -20])); // Output: 12
console.log(getMax([-300, -100, -200])); // Output: -100

//Question 8
function reverseString(arr) {
    return arr.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('world')); // Output: "dlrow"
console.log(reverseString('Thi is cool')); // Output: "looc si sihT"


//Question 9
function convertToZeros(arr) {
    return arr.map(item => 0);
}

console.log(convertToZeros([1, 2, 3, 4, 5])); // Output: [0, 0, 0, 0, 0]
console.log(convertToZeros([12])); // Output: [0]
console.log(convertToZeros([0, 0, 0])); // Output: [0, 0, 0]


//Question 10
function removeApples(fruits) {
    return fruits.filter(fruit => fruit !== "apple");
}

// Example usage:
const fruitsArray = ["banana", "apple", "orange", "apple", "grape"];
const updatedFruits = removeApples(fruitsArray);

console.log(updatedFruits); // Output: ["banana", "orange", "grape"]


//Question 11
function filterTruthyValues(values) {
    return values.filter(Boolean);
}

// Example usage:
const mixedArray = [0, 1, "", "Hello", null, undefined, NaN, 42, false, true];
const truthyValues = filterTruthyValues(mixedArray);

console.log(truthyValues); // Output: [1, "Hello", 42, true]

//Question 12
function convertToBoolean(arr) {
    return arr.map(Boolean);
}

console.log(convertToBoolean([500, 0, "Dom", "", []])); // Output: [true, false, true, false, false]


