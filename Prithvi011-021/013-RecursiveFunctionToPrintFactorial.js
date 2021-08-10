//13-> Write a recursive function to calculate the factorial of a number

function recursiveFactorial(num) {
    if (num == 1) {
        return 1;
    }
    //recursive function call
    let connectedFactorial = recursiveFactorial(num - 1) * num;//learn formula
    return connectedFactorial;
}
console.log(recursiveFactorial(5))