// Write a JavaScript function to split a string and convert it into an array of words.
//  Use shift method to bring the first element to the last in the array. 
//Eg Prithvi Narayan Tamang => Narayan Tamang Prithvi.

let string = "Prithvi Narayan Tamang"
console.log(string);
//convert to array by using split()
let myArray = string.split(" ");
//shift() remove the element from the start position of the array
const toAddElement = myArray.shift()
//push() will add the element at the end of the array
myArray.push(toAddElement)
console.log(myArray);
const myString = myArray.join(" ")// this method creates a new string with space between  the element
console.log(myString);
