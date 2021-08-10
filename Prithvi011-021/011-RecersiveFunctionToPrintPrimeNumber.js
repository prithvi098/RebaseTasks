//Write a recursive function to print all the prime numbers between 1 to 100.
// A prime number is a number 
// which can either be divided by itself or 1

let num = 100;
for (let j = 2; j <= num; j++) {
    let f = true;
    // console.log(j);
    for (let i = 2; i <= Number(j / 2); i++) {

        if (j % i == 0) {
            // console.log(i);
            f = false;
            // console.log("Not prime number");
            break;
        }
    }
    if (f) {
        console.log("prime number " + j);
    }
}