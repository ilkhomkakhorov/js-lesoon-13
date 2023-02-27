// "use script";
//                                   FUNCTIONLAR

// // decloration function
// functionName(12, 13);
// function functionName(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return sum;
// }

// expression function
// const functionName2 = function (a, b) {
//   let sum = a - b;
//   console.log(sum);
//   return sum;
// };
// functionName2(12, 13);

// arrow function
const arrowFunction = (a = 1, b = 1) => a * b;
console.log(arrowFunction(100));
console.log(arrowFunction(100, 0.1));
 

let age = 25;

const user = {
    age:30,
};

const func = (age) => {
    age = 10;
    return age;
};

console.log(func(age));
console.log(age);

// [-----]































// call and aply
// const user = {
//   fName: "Umar",
//   lName: "Hamidov",
//   login: "umar",
//   pass: "password",
//   email: "email@gmail.com",
//   nowYear: 2023,
//   countbirthYear: function (age) {
//   const birthYear = this.nowYear - age;
//   return birthYear;
//   },
//   countbirthYear(age, sum) {
//     const birthYear = this.nowYear - age;
//     return { birthYear, sum };
//   },
// };
