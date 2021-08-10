//Write a function that takes as input a string and reverse the string. To do this convert the string to an array of characters. Use shift method on arrays to reverse the array and then convert it back to string.
//Eg: My name is Prithvi => ivhtirP si eman yM


function reverseString(str) {
    //split() method to return a new array
    var splitString = str.split("");

    // reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();

    //  join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("");
    // Return the reversed string
    return joinArray;
}

console.log(reverseString("My name is Prithvi"));