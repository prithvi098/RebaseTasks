//Create a function that takes the age in years and returns the age in days

function convertAgeInYears(years, name) {
    const currentYear = 2021
    const age = currentYear - years;
    console.log(`Age of Prithvi > ${age}`);
    ageInDays(age);
}
function ageInDays(age) {
    const ageInDays = age * 365;
    console.log(`He Spent ${ageInDays} Days.`);
}
convertAgeInYears(1998, "Prithvi")