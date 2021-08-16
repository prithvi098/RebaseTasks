// Input a 2D matrix from the user such that no number is repeated. Perform sorting of the 2D matrix row-wise as well as column-wise:
// Input : mat[][] = { {12, 7, 1, 8},
//                     {20, 9, 11, 2},
//                     {15, 4, 5, 13},
//                     {3, 18, 10, 6} } 

// Output : 1 5 8 12
//          2 6 10 15
//          3 7 11 18
//          4 9 13 20

// Javascript implementation to sort the
// matrix row-wise and column-wise
//Reference from GFG
let MAX_SIZE = 10;

// function to sort each row of the matrix
function sortByRow(mat, n) {
    for (let i = 0; i < n; i++)

        // sorting row number 'i'
        mat[i].sort(function (a, b) { return a - b; });
}

// function to find transpose of the matrix
function transpose(mat, n) {
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            // swapping element at index (i, j)
            // by element at index (j, i)
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
}

// function to sort the matrix row-wise
// and column-wise
function sortMatRowAndColWise(mat, n) {
    // sort rows of mat[][]
    sortByRow(mat, n);

    // get transpose of mat[][]
    transpose(mat, n);

    // again sort rows of mat[][]
    sortByRow(mat, n);

    // again get transpose of mat[][]
    transpose(mat, n);
}

// function to print the matrix
function printMat(mat, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
            process.stdout.write((mat[i][j] + " "));
        process.stdout.write("\n")
    }
}

// Driver code
let mat = [[12, 7, 1, 8],
[20, 9, 11, 2],
[15, 4, 5, 13],
[3, 18, 10, 6]]

let n = 4;
process.stdout.write("Original Matrix:\n");
printMat(mat, n);

sortMatRowAndColWise(mat, n);
process.stdout.write("\nMatrix After Sorting:\n");
printMat(mat, n);
