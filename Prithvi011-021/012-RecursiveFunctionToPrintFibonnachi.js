//Write a recursive function to print the fibonacci sequence till 100. In fibonacci sequence, a number is always sum of its previous two numbers: eg 1, 2, 3, 5, 8,13, 21, 34, etc

function fibo(n) {
    // console.log(n);
    if (n == 0 || n == 1) {
        return n
    }
    return fibo(n - 1) + fibo(n - 2)
}
let num = 13
for (let i = 0; i <= num; i++) {
    console.log(fibo(i));
}