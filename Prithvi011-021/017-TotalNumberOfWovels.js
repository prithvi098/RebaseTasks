//Write a function which takes as input a string statement.
//  Calculate the total number of vowels in the string, total number of consonants,
//  number of repetition of each character.

function numberOfVowelsConsonentCount(string) {
    let vCount = 0, cCount = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
            vCount++;
        } else if (string.charAt(i) >= 'a' && string.charAt(i) <= 'z') {

            cCount++;
        }
    }
    console.log("Number Of of Vowels " + vCount);
    console.log("Number Of consonent " + cCount);
}
numberOfVowelsConsonentCount("prithvi")