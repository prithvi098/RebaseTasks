//Write a function which takes as input a “message” (a text string that is to be displayed),
// isRecursive (boolean value) and timeout period (an integer value of time in seconds).
// The function’s  responsibility is to print the message after a timeout of x-seconds 
// as provided while invoking the function. If the isRecursive flag is true then the message 
// should be printed every x-seconds. Explore SetTimeout and SetTimeInterval functions 
//to achieve this.

//setTimeout --> Allows us to run the function once after the interval of time 


function messagePass(msg, isRecursive, timeout) {

    if (isRecursive) {
        setInterval(() => {// if I set isRecusrive is true then it will call automaticlly every 1 second as w
            console.log(msg);
        }, timeout)
    }
    else if (isRecursive === false) {// if I set isRecursive flat flase it will call setTimeout() 
        setTimeout(() => {
            console.log("I will on call When isRecursive is false");
        }, timeout)
    }

}
messagePass("I will call continously when isRecursive is true", false, 1000)

