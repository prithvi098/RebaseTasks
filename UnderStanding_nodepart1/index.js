"use strict"
const hellow = require('./app.js')
//task 1 to print hello world and initialize npm packages and also install node on system
console.log("Hello Wrold")
// //Understand and demonstrate examples of primitive types and functions in NodeJS 
//,eg. var, const, let, bool, arrays, etc. Explain the importance of use-strict. 
//Perform exporting of functions and variables from a file.

// let key word is used to declare a variable and it is block scope variable
let name = "prithvi"
// var also key word to declare the variable and by default in js without declare keyword automatticaly add var
var num =1;

//bool type is only having the true and false
let isElegible = true;

//array  can containes the multiple value and we can access throught the index number[0] from first and last elemnet by lenght - 1
const cars = ["toyota","jeez","maruti","hero"];

//objects are also datatype that can contains the keys and value and this value can be access through the property value. and [] operator
const prithvi ={
    age : 23,
    hobbies:"singing",
    place:"Bhayander west",
    books:["wings of fire","rich dad and poor","japanees rules"],

}
console.log(prithvi.books[1]);

//undefined when we dont initialized the variable then it will show undefined
let gopal
console.log(gopal)//it will show the undefined value in log

//"use strict" it provides us to avoid undeclared variable and throws the errors in the console like that
// if we declare a varialbe without dt(data type) it show error using "use strict"


//when you want to get function from another function you have to export it no name of function is anonymous function
//where you want to use that function you have to require the function and pass the value to it
hellow("This from app.js")

//Writing different types of functions: function with no parameter, function with parameter, 
//function with no return type, functions with return type (string, int, array, etc),
// anonymous functions, function with callback, recursive functions. [Day 3]


//function without parameter and it does not return it will only log the data
function helloWorld() { // this is my function declaration
    console.log("Hello This is my No function parameter")
    }
    
    helloWorld();
    
    //function with parameters
    // it can take more than one parameter if we want it return float number
    function area(radius) {
        const pi = 3.14;
        return pi*radius*radius;
    }
    
    const areaCircle = area(4);
    console.log(areaCircle)
    
    //return string
    function fullName(fname) {
    return fname;
    }
    const fullNameofPrithvi = fullName("Prithvinarayan");
    console.log(fullNameofPrithvi)
    
    //return array in the function
    function cricketStadium(arr){
        return arr;
    
    }
    const indianCricketStadium = cricketStadium(["Wankhedty","modistadius","xyz"])
    console.log(indianCricketStadium);
    
    //anonymous function -> a function without name called as a anonymous function
    
    const add = function (a,b) {
        return a+b;
    }
    const addOfTwoNum = add(3,4);
    console.log(addOfTwoNum);
    
    //call backfunction a function will  which call inside the function setTimeout()is the node js provided call back function
     setTimeout(function(){
    console.log("I will call after 3 sec")
     },3000)
    
    
     //example 2
     function createQuote(quote, callback){ 
        var myQuote = "Like I always say, " + quote;
        callback(myQuote); 
      }
      
      function logQuote(quote){
        console.log(quote);
      }
      
      createQuote("eat your vegetables!", logQuote);
    
      //recursive function
    //Recursive Function is a function call it self some where inside the function A calling function over and over again 
    
    function countDownNumbers(n){
    if(n<=0) {
        console.log("Yeah we got it");
        return
    } 
    console.log("number"+n)
    countDownNumbers(n-1);
    }
    countDownNumbers(3)