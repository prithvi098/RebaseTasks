'use strict'
//It provides us to developer to avoid accidental errors
// 22.Write a function that returns the validity of strings based on certain regex expressions defined.


// Regex for allowing strings to contain only alphanumeric characters
const alpahaNumeric = function (params) {
    const regex = /[^a-z0-9A-Z]/;//Regular expression literal
    if (params.match(regex)) {
        console.log("String does not contains alpha numerics");
    } else {
        console.log("String contains Alpha numbierc ");
    }
}
alpahaNumeric("Prithvi123");

//Email Validating
// Regex for validating a string to be a valid email address

const validEmail = (email) => {
    const formateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (formateEmail.test(email)) {
        console.log("You have succsefully Login");
    } else {
        console.log("Invalid Email");
    }
}
validEmail("Prithvinarayan1234.rebase@gmail.net")

// Regex for determining if a password has at least 1 uppercase character, 1 lowercase character, 1 special character from (_, $, #, @, &), 
//and the overall length of the password is greater than 8 characters.


//UnderStanding the letter 
// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

const password = function (params) {
    let regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
    if (regex.test(params)) {
        console.log("Password Is Matching");
    } else {
        console.log("word has at least 1 uppercase character, 1 lowercase character, 1 special character from (_, $, #, @, &), ");
    }
}
password("AA!45aaa")

// Regex to determine if the given string has at least 3 vowels

const vowels = (params) => {
    let regex = /[aeiou].*[aeiou].*[aeiou]/;
    if (regex.test(params)) {
        console.log("Matched");
    } else {
        console.log("Not matched");
    }
}
vowels("Prithvio")

// Regex to determine if the given string is a valid html tag syntax

const validHTML = function (params) {
    let regex1 = /<(“[^”]*”|'[^’]*’|[^'”>])*>/;
    if (regex1.test(params)) {
        console.log("valid html tag");
    } else {
        console.log("Not valid html tag");
    }
}
validHTML("<input value = ‘>’>")