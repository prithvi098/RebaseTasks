//Write a JavaScript function to split a string and convert it into an array of words
//Eg Prithvi Narayan => Narayan Prithvi

let str = "Prithvi Narayan Tamang"
console.log(str);
//convert to array by using split()
let myArray = str.split(" ");
//this will rever the the array in two index position
let reverArray = myArray.reverse()

const joint = reverArray.join(" ")
console.log(joint);
