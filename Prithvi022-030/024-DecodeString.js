//Take an input string from the user. Encode the statement so that each character is
// right shifted by x - places in circular fashion. (take x as input as well).
// For example if the input string is “PrithviXYZ” and the x value is 2 then the output should be:   "RtkvxkZAB"
// const stinr = "RtkvxkZAB"
// console.log(stinr.length)
// const str2 = "PrithviXYZ"
// console.log(str2.length)

const encoded = function (string, x) {

    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let val = string[i].charCodeAt(0);
        let dup = x;

        // console.log(x);//2
        if (val - x < 97 && val >= 97) {
            x += (97 - val);
            // console.log(x);
            x = x % 26;
            // console.log(x);

            newString += String.fromCharCode(122 - x);
        }
        else if (val - x < 65 && val <= 90) {
            x += (90 - val);
            x = x % 26;
            newString += String.fromCharCode(90 - x);

        }
        else {

            newString += String.fromCharCode(val - x);
        }
        x = dup;
    }
    console.log(newString);
}

encoded("RtkvxkZAB", 4)

