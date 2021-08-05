##step 1 Install NodeJS on the machine. Setting up a nodejs project. Running a js file (Hello World)
1 we have to run cmd sudo apt install nodejs but in my machie node is already install 12.13 to check version node -version
2 we have to init node package in root folder
3 to run the index.js cmd is node index.js

##// //Understand and demonstrate examples of primitive types and functions in NodeJS 
//,eg. var, const, let, bool, arrays, etc. Explain the importance of use-strict. 
//Perform exporting of functions and variables from a file.

 let and var data types
 var datatype is to carry some value it will be string num bool and aaray object function  same as for let
 but big diff in var and let is var is not block scope variable and let is block scope variable
 bloack scope means it will use only inside of a function it cannot reassigne the value
 but in var is diff from let we can reassige the value from out side the function

const data
it will use when we want to unchage the value of perticular variable like pi and port etc.

// bool 
it containt only true and false but not string
there truth table t or t = t, t and t = t , t or f = t , t and f = f

//array 
array contains the multipel value and we can access through the its index number which is start from
0 and end to length-1
we can per form some action and it will be mutable 
push pop shift unshift
push will add the element at the end of the array
pop will remove the elements from the last of the array
shift will remove the element from start of array
unshift will add element at start of array

//object
object can having a key value pairs and we can access this elements from the from the property name;.,[]
object having array function,another object and int and string etc


//use strict
> The importance of use strict come in the mordern java script
> It catches some common coding bloopers, throwing exceptions.
> always use strict begining of program
//exporting function
> export funcction means the you can access the function from other directory.
> you have to module.exports = <function name>
> import the require('<filename>,<relative direcotry>')

##Writing different types of functions: function with no parameter, 
function with parameter, function with no return type, functions with return type (string, int, array, etc), a
nonymous functions, function with callback, recursive functions. [Day 3]

//function with no parameter
>it is normal function it dont takes the argument
>it will simply return of log file in given body.
>function will declare with function key word function <function_name>()

//function with parameter
>it takes the parameter such as array, object, num, string etc
>function <function_name> (<parameter>)

//anonymous function
anonymous function -> a function without name called as a anonymous function

//call backfunction 
> a function will  which call inside the function setTimeout()is the node js provided call back function

//recursive function
//Recursive Function is a function call it self some where inside the function A calling function over and over again 