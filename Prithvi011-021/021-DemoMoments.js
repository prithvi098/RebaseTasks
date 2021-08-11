//Demonstrate all the different operations/methods that are available in momentjs.
const { months } = require('moment');
const moment = require('moment')
//to get current date of that time 
console.log('<======================//to get current date of that time ===========================>');
const currentMonth = moment().format('MMMM')
console.log(currentMonth);
const currentDay = moment().format('dddd')
console.log(currentDay);
const currentDate = moment().format('DD')
console.log(currentDate);
const currentYear = moment().format("YYYY")//if i want to print only 21 we have to YY
console.log(currentYear);
const now = moment().format('DD MMMM YYYY h:mm:ss a')
console.log(now)//This will generate current time date month and years
console.log('<======================//get Add or Subtract date,month,years===========================>');
//get Add or Subtract date,month,years
const nextMonth = moment().add(1, 'months').format('MMMM')
console.log(nextMonth);
const nextDate = moment().add(1, 'days').format('DD')
console.log(nextDate);
const Tomorrow = moment().add(1, 'days').format('dddd')
console.log(Tomorrow);
const nextYear = moment().add(1, 'years').format('YYYY')
console.log(nextYear);
//we can also add seconds and minutes

//Subtract to lastMonths, yesterDate,lastWeek,lastYears;
const lastMonth = moment().subtract(1, 'months').format('MMMM')
console.log(lastMonth);
const yesterdayDate = moment().subtract(1, 'days').format('DD')
console.log(yesterdayDate);
const yesterday = moment().subtract(1, 'days').format('dddd')
console.log(yesterday);
const lastYear = moment().subtract(1, 'years').format('YYYY')
console.log(lastYear);

console.log('<======================//startOf And endOf===========================>');
const startingYear = moment().startOf('year').format('MMMM Do');    // set to January 1st, 12:00 am this year
console.log(startingYear);
const startDate = moment().startOf('month').format('DD');   // set to the first of this month, 12:00 am
console.log(startDate);

const endOfYear = moment().endOf('year').format("YYYY DD")
console.log(endOfYear);

//// Display Date Time for now
//moment().fromNow();
//moment().fromNow(Boolean);
const years = moment([2020, 0, 29]).fromNow();
console.log(years);

//Time from  X
// moment().from(Moment | String | Number | Date | Array);
// moment().from(Moment | String | Number | Date | Array, Boolean);
let a = moment([2021, 8, 10]);
let b = moment([2021, 8, 06]);
const day = a.from(b) // "a day ago"
console.log(day);

//Difference Mehotd it will subtract from next to previous date
let nextDay = moment([2021, 8, 10])
let previousDay = moment([2021, 8, 9])
const diifDay = nextDay.diff(previousDay, 'days')// it wil show me diffence date from 10 to 2= 8
console.log(diifDay);

//Days IN months >--- it will given how many days in the monts
// moment().daysInMonth();
const daysInFeb = moment("2021-02", "YYYY-MM").daysInMonth() // 29
console.log(daysInFeb);