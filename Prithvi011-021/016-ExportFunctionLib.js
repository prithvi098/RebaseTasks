//Export the above functions as library (use module.exports). Write a function which takes
// as input an arithmetic expression string example: “8 + 4 - 2 / 5 * 2”. 
// Break the string on spaces to extract the numbers and arithmetic operations between them.
//  Start solving it from left to right. For above expression the solution will be
// a. 8 + 4 => 12
// b. 12 - 2 => 10
// c. 10 / 5 => 2
// d. 2 * 2 => 4.
// e. The final answer is 2. Ensure your solution is a recursive function.


const arithmeticExp = require('./015-ImplementingCalculator')
// const sum = add(4, 5);
// console.log(sum)
const string = "8 + 4 - 2 / 5 * 2"
const arrayOperator = string.split(" ")
console.log(arrayOperator);
let result;
result = arithmeticExp(Number(arrayOperator[0]), arrayOperator[1], Number(arrayOperator[2]))
console.log(result);

//manual testing case
// const subOperation = arithmeticExp(result, arrayOperator[3], (arrayOperator[4]))
// console.log("12 - 2 =>", subOperation);
// const divOperation = arithmeticExp(subOperation, arrayOperator[5], (arrayOperator[6]))
// console.log("10 / 5 =>", divOperation);
// const mulOperation = arithmeticExp(divOperation, arrayOperator[7], (arrayOperator[8]))
// console.log("2 * 2 =>", mulOperation);
for (let i = 0; i <= arrayOperator.length - 5; i += 2) {
    result = arithmeticExp(Number(result), arrayOperator[i + 3], Number(arrayOperator[i + 4]))
    console.log(result);
}

