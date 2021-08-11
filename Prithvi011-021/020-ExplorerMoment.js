//Explore momentjs library and print a date in
//all the available formats provided by momentjs.

//This is UTC Formate 2021-08-11T11:36:28+05:30
//Moment js is library which helps parsing, validating, manipulating and displaying the date and time in js
const moment = require('moment')

// it will print currunt time in UTC formate/now it can also support empy array and object
const currentDate = moment();

//// it will print in string formate that can be understand able
console.log(currentDate.toString());

/// When we creating the string from momentjs we have to first check it matches
//ISO 8601  the  formats, we then check if the string matches the RFC 2822 Date time other wise it will generate a fall back of new Date(string)
//String
const day = moment("6 Mar 2017 21:22:23 GMT").toString();
console.log(day);

//String + Formate

const formate1 = moment().format("12-25-1995", "MM-DD-YYYY");
console.log(formate1);
const formate2 = moment().format('YYYY/MM/DD');
console.log(formate2);

// If i parsing the date and time it will show me unexpected error which can 
//not be identify by normal script so we have to use 'use strict' to identifined error
const formate3 = moment('24/12/2020 09:15:00', "DD MM YYYY hh:mm:ss");
//If i pass any date formate YYYY -> 24/12/2020 it will show only 2015/09/24
console.log(formate3)

//Formates Dates
console.log(moment().format('YYYY Do MMMM, h:mm:ss a'))
moment().format('MMMM Do YYYY, h:mm:ss a'); // August 11th 2021, 12:36:20 pm if I write MMMM - August and YYYY- 2021 Do will add th to the date
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Aug 11th 21
console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021
moment().format();


//RelativeTime

moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
moment().startOf('day').fromNow();        // 13 hours ago
moment().startOf('year');    // set to January 1st, 12:00 am this year
moment().startOf('month');   // set to the first of this month, 12:00 am
moment().startOf('quarter');  // set to the beginning of the current quarter, 1st day of months, 12:00 am
moment().startOf('week');    // set to the first day of this week, 12:00 am
moment().startOf('isoWeek'); // set to the first day of this week according to ISO 8601, 12:00 am
moment().startOf('day');     // set to 12:00 am today
moment().startOf('date');     // set to 12:00 am today
moment().startOf('hour');    // set to now, but with 0 mins, 0 secs, and 0 ms
moment().startOf('minute');  // set to now, but with 0 seconds and 0 milliseconds
moment().startOf('second');  // same as moment().milliseconds(0);
moment().startOf('hour').fromNow();
//same as it work as startOf 
console.log(moment().endOf('years').fromNow());// it will show the months from now till the end of dec


//Calender Time
console.log(moment().subtract(10, 'days').calendar()); // 08/01/2021 it will subtract the 10 days from the current date
console.log(moment().subtract(6, 'days').calendar());  // Last Thursday at 12:37 PM // I am not able to under stand why it prints with time
moment().subtract(3, 'days').calendar();  // Last Sunday at 12:37 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 12:37 PM
moment().calendar();                      // Today at 12:37 PM
moment().add(1, 'days').calendar();       // Tomorrow at 12:37 PM it will add show me the next day time of the current time
moment().add(3, 'days').calendar();       // Saturday at 12:37 PM 
moment().add(10, 'days').calendar();        // if i Use .add(10,'days') it will show only the current date not the time 
//we Can also add Years Mothes , days, hours,milliseconds,quaters etc,

//Multiple Local  Support   
moment.locale();         // en
moment().format('LT');   // 12:37 PM  //Time
moment().format('LTS');  // 12:37:34 PM  //Time with seconds	
moment().format('L');    // 08/11/2021  //Month numeral, day of month, year
moment().format('l');    // 8/11/2021
moment().format('LL');   // August 11, 2021  //Month name, day of month, year
moment().format('ll');   // Aug 11, 2021
moment().format('LLL');  // August 11, 2021 12:37 PM  //Month name, day of month, year, time
moment().format('lll');  // Aug 11, 2021 12:37 PM
moment().format('LLLL'); // Wednesday, August 11, 2021 12:37 PM   Month name, day of month, day of week, year, time	
moment().format('llll');

//Array Formate
moment([2010, 1, 14, 15, 25, 50, 125]); // February 14th, 3:25:50.125 PM
moment([2010]);        // January 1st
moment([2010, 6]);     // July 1st
moment([2010, 6, 10]); // July 10th 3rd elements shows date and second shows month and first elementest shows year