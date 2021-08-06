//Create a function that takes two numbers (p, n) as argument.
// It prints first number and keeps incrementing and print that number by 2, n number of times. 
// In the end it returns the final incremented number. Example (2, 3) will print “2 4 6” and then return 6


function incrementingFun(p, n) {
    for (let i = 1; i <= n; i++) {
        console.log(p);
        p = p + 2;
    }
}

incrementingFun(2, 3)