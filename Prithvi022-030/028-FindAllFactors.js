
// Find all factors for a given number.
const factors = function (Number) {
    console.log(`The Factors of ${Number} is`);

    // // let temp = 1;
    // while (temp <= Number) {
    //     if (!(Number % temp))
    //         console.log(temp);
    //     temp++
    // }
    for (let i = 1; i <= Number; i++) {
        if (!(Number % i)) {
            console.log(i);
        }
    }
}
factors(8)