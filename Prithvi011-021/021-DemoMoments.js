//Demonstrate all the different operations/methods that are available in momentjs.
const moment = require('moment')
//to get current date of that time 
console.log(moment().add(7, 'months').calendar());
console.log(moment().format('MMM Do YYYY')); // August 8th 2021, 12:50:20 pm
const dateString = moment().add(5, 'months').format('MMMM Do YYYY');
console.log(dateString);
moment().startOf('year');    // set to January 1st, 12:00 am this year
console.log(moment().startOf('month').format('MMMM Do YYYY'));   // set to the first of this month, 12:00 am
moment().startOf('quarter');  // set to the beginning of the current quarter, 1st day of months, 12:00 am
moment().startOf('week');    // set to the first day of this week, 12:00 am
moment().startOf('isoWeek'); // set to the first day of this week according to ISO 8601, 12:00 am
console.log(moment().startOf('day').format('MMMM Do YYYY, h: mm: ss a'));     // set to 12:00 am today we can use to display time of 2 passing second paramenter i nthe the formate
moment().startOf('date');     // set to 12:00 am today
moment().startOf('hour');    // set to now, but with 0 mins, 0 secs, and 0 ms
moment().startOf('minute');  // set to now, but with 0 seconds and 0 milliseconds
moment().startOf('second');  // same as moment().milliseconds(0);