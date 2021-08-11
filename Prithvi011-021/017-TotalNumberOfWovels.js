//Write a function which takes as input a string statement.
//  Calculate the total number of vowels in the string, total number of consonants,
//  number of repetition of each character.

function numberOfVowelsConsonentCount(string) {
    let vCount = 0, cCount = 0;
    const lowerCaseAlphabate = string.toLowerCase()//It will make my capital letter to small later
    console.log(lowerCaseAlphabate);
    const vowels = ['a', 'e', 'i', 'o', 'u']// include function can pick up only spesific sitrin or charact from sitr or array
    for (let i = 0; i <= lowerCaseAlphabate.length - 1; i++) {
        if (vowels.includes(lowerCaseAlphabate[i])) {
            vCount++;
        } else {
            cCount++;
        }
    }
    console.log("Number Of of Vowels " + vCount);
    console.log("Number Of consonent " + cCount);
}
numberOfVowelsConsonentCount("Prithvi")