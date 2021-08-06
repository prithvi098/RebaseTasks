//Print all odd numbers from 1 - 100
function printOddNumbers(numbers) {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOddNumbers(100)