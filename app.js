//Question 1
function showRating(rating) {
    // Ensure the rating is a number and within the valid range
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return "Invalid rating";
    }

    const fullStars = Math.floor(rating); // Get the number of full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Check for half star

    // Create the rating string
    let ratingString = '*'.repeat(fullStars) + '.'.repeat(halfStar);
    
    return ratingString;
}

console.log(showRating(4.5)); // Output: "****."
console.log(showRating(3));   // Output: "***"
console.log(showRating(2.5)); // Output: "**."
console.log(showRating(4.2)); // Output: "****" (no half star since 0.2 is less than 0.5)

//QUESTION 2
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}

const array1 = [20, 40, 10, 30, 50, 10];
const sortedArray1 = sortLowToHigh(array1);
console.log(sortedArray1); // Output: [10, 10, 20, 30, 40, 50]

const array2 = [5, 10, 0, -5];
const sortedArray2 = sortLowToHigh(array2);
console.log(sortedArray2); // Output: [-5, 0, 5, 10]

const array3 = [3, 2, 1, 0];
const sortedArray3 = sortLowToHigh(array3);
console.log(sortedArray3); // Output: [0, 1, 2, 3]


//QUESTION 3
function sortHighToLow(arr) {
    return arr.sort((a, b) => b - a);
}


const array4 = [20, 40, 10, 30, 50, 10];
const sortedArray4 = sortHighToLow(array4);
console.log(sortedArray4); // Output: [50, 40, 30, 20, 10, 10]

const array5 = [5, 10, 0, -5];
const sortedArray5 = sortHighToLow(array5);
console.log(sortedArray5); // Output: [10, 5, 0, -5]

const array6 = [3, 2, 1, 0];
const sortedArray6 = sortHighToLow(array6);
console.log(sortedArray6); // Output: [3, 2, 1, 0]


//QUESTION 5
async function fetchPostsByUserId(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage:
fetchPostsByUserId(1).then(posts => console.log(posts));


//Another way

async function postByUser(usertId) {
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    
    const result = await promise.json();

    const posts = result.filter(element => element.userId === usertId);

    console.log(posts);
}

postByUser(4);


//QUESTION 6
async function firstSixIncomplete() {
    const promise = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    
    const result = await promise.json();

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0,6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6);