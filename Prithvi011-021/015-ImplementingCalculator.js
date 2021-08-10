//Implement a complete calculator which performs all the operations:
//addition, subtraction, multiplication, division.


const calculator = (num1, operator, num2) => {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "-") {
        return num1 - num2
    } else {
        return "Invalid Operator You input";
    }
}
// console.log(calculator(2, 3, '$'))
module.exports = calculator;