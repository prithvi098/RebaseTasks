// Write for loop to display the following 3 patterns:

//Full Diamond
function createFullDiamondShape(rows) {
    let i, j, k = 0, n;
    n = (rows + 1) / 2;
    for (i = 1; i <= rows; i++) {
        if (rows % 2 == 0) {
            if (i <= n) k++;
            if (i > n + 1) k--;

        } else {
            i <= n ? k++ : k--;
            for (j = 1; j <= rows; j++) {
                if (j >= n + 1 - k && j <= n - 1 + k) {
                    process.stdout.write("*")
                } else {
                    process.stdout.write(" ")
                }
            }
            process.stdout.write('\n')
        }

    }
    console.log("\n");
}
createFullDiamondShape(9)

//Half Diamond

function createHalfDaimondShape(n) {
    let i, j;
    for (i = 1; i <= n; i++) {
        for (j = i; j < n; j++) {
            process.stdout.write(" ");
        }
        for (j = 1; j <= i; j++) {
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
    for (i = n; i >= 1; i--) {
        for (j = i; j <= n; j++) {
            process.stdout.write(" ");
        }
        for (j = 1; j < i; j++) {
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}
createHalfDaimondShape(5);

//Hour Glass


let n = 5;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);