// 1.
// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// Solution:

function warnTheSheep(queue) {
    let index = queue.indexOf('wolf');
    return index + 1 < queue.length ? `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`
}


// 2.
// Be Concise IV - Index of an element in an array
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
// Solution:

function find(a, e) {
    return a.indexOf(e) != -1 ? a.indexOf(e) : "Not found";
}


//3.
// Generate range of integers
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// Implement a function named
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note: min < max; step > 0. The range does not HAVE to include max (depending on the step)
// Solution:


function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) arr.push(i);
    return arr;
}


// 4.
// Convert to Binary
// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Solution:

const toBinary = n => +n.toString(2);


// 5.
// Well of Ideas
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// Solution 1:

function well(x) {
    let a = (x.filter(el => el === 'good')).length;
    return a > 2 ? 'I smell a series!' : (a >= 1) ? 'Publish!' : 'Fail!';
}

// Solution 2:

function well(x) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            count++;
        }
    }
    if (count === 2 || count === 1) {
        return 'Publish!';
    } else if (count > 2) {
        return 'I smell a series!';
    } else {
        return 'Fail!';
    }
}




