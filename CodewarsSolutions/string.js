// 8 kyu
// https://www.codewars.com/kata/jennys-secret-message
// Jenny's secret message
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name) {
    return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`
}

// 8 kyu
// https://www.codewars.com/kata/55a14f75ceda999ced000048/train/javascript
// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
//     Input
// Two Strings, no validation is needed.
//     Output
// You must output a string containing the two strings with the word ```' are '```

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}
//8 kyu
// Returning Strings
// https://www.codewars.com/kata/returning-strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
}
