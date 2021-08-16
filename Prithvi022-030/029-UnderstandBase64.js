//Understand base64 encoding and decoding. Show examples where base64 encoding can be used

// Base64 is a group of binary-to-text encoding 
// schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.
//program to encode a string to Base64
const message = "learning JavaScript"//Definging the string
console.log("Oringinal Message : " + message);

// The 'btoa-atob' module does not export a programmatic interface, it only provides command line utilities.

const encodedResult = Buffer.from(message).toString('base64');// This method convert the string to the Base64
console.log("Encoded String : " + encodedResult);
const decodedResult = Buffer.from(encodedResult, 'base64').toString();//It will reverse back the the string from base64
console.log("Decoded BackTo STring : " + decodedResult);