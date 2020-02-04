/*Create an array that has at least 5 strings:

Use a for loop to console log all of the elements plus the index and a comma
Example:

// 1,cats
// 2,dogs

..and so on*/


let arr = ['carrot','cucumber','broccoli','brussel sprouts','cabbage'];

let text = ",";


for (let i = 0; i < arr.length; i++) {
  console.log(index + text + arr);
}

//Uncaught ReferenceError: index is not defined at pen.js:1
