// Understand and explore the functions of Underscore.js collections
//https://underscorejs.org/#collections Do not explore Arrays, functions, objects, 
//  and utility as part of this question. We will do it later.
//bind() it can take funciton and also  object as an arugment 
//Incompleted Task
const bioData = {
    name: "prithvi",
    age: "23",
    genger: "Male",
    getHight: function () {
        return 5.3;
    }
}
const accessHightUndefined = bioData.getHight;
console.log(accessHightUndefined());