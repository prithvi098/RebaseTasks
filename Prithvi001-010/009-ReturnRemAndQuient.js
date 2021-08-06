//Create a function  that Returns the remainder and quotient by dividing two numbers taken as input

function returnRemAndQuo(num1, num2) {
    const quotient = num1 / num2;
    const remainder = num1 % num2;
    console.log(`Remainder ${remainder} and Quotient ${quotient}`);

}
returnRemAndQuo(4, 2)