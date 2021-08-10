//Write a function which takes as input a “message” (a text string that is to be displayed),
// isRecursive (boolean value) and timeout period (an integer value of time in seconds).
// The function’s  responsibility is to print the message after a timeout of x-seconds 
// as provided while invoking the function. If the isRecursive flag is true then the message 
// should be printed every x-seconds. Explore SetTimeout and SetTimeInterval functions 
//to achieve this.

//setTimeout --> Allows us to run the function once after the interval of time 


function messagePass(msg, isRecursive, timeout) {
    setTimeout(() => {
        console.log(msg);
    }, timeout)

    if (isRecursive) {
        setInterval(() => {
            console.log(msg);
        }, timeout)

    }
}
messagePass("i am from function", true, 1000)

