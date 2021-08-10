//Explore momentjs library and print a date in
//all the available formats provided by momentjs.

const moment = require('moment')
//dates
console.log(moment().format('MMMM Do YYYY')); // August 8th 2021, 12:50:20 pm
console.log(moment().format('dddd'));                    // Sunday
console.log(moment().format("MMM Do YY"));               // Aug 8th 21
console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021
console.log(moment().format());

//Calender

console.log("Calender Formate ")
console.log(moment().subtract(10, 'days').calendar()); // 07/29/2021
console.log(moment().subtract(6, 'days').calendar());  // Last Monday at 12:45 PM
console.log(moment().subtract(3, 'days').calendar());  // Last Thursday at 12:45 PM
console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 12:45 PM
console.log(moment().calendar());                      // Today at 12:45 PM
console.log(moment().add(1, 'days').calendar());       // Tomorrow at 12:45 PM
console.log(moment().add(3, 'days').calendar());       // Wednesday at 12:45 PM
console.log(moment().add(10, 'days').calendar());