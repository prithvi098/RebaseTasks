//Print all even numbers from 1 - 100

function printEvenNumbers(numbers) {
    for (let i = 1; i <= numbers; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
printEvenNumbers(100);