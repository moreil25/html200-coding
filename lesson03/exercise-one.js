/*This Regular Challenge homework is required.

Create a JavaScript file that does the following:

Do a console log after each item

Create an array, with at least 5 strings
Add an element to the end of the end of the array
Remove the third element
Create a string from the elements and comma separate them*/


let arr = ['book', 'tablet', 'kindle', 'phone', 'laptop'];

arr.push('audio');

arr.splice(2, 1);

let str = arr.join(',');

console.log(str);
