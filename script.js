//////1
////print (Today is:  Wed, current time is: 11AM: 8 mins 2023) to the console and the current date
const dateNow = new Date();
console.log(dateNow);
const month = dateNow.getMonth() + 1;
const weekDay = dateNow.getDay();
const day = dateNow.getDate();
console.log(day);
const hr = dateNow.getHours();
const min = dateNow.getMinutes();
const year = dateNow.getFullYear();
const dayList = ['monday', 'Tuesday', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun',];

const AmPm = (hr >= 12 ? 'PM' : 'AM');


const timePrint = function () {

  console.log(`Today is:  ${dayList[weekDay]}, current time is: ${hr}${AmPm}: ${min} mins ${year}`);
  console.log(`${day}/${month}/${year}`);
};
timePrint();

////2
///Write a JavaScript program where the program
//takes a random integer between 1 to 10, the user is then prompted
// to input a guess number. If the user input matches with guess number,
//the program will display a message "Good Work" otherwise display a message
//"Not matched"
/*
let HiddenNumber = Math.trunc(Math.random() * 10) + 1;
console.log(HiddenNumber);
const message = prompt('enter a secret number');

if (HiddenNumber === Number(message)) {
  alert('Great Job')
} else {
  alert('Try again')
};
*/

////3
//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
const multiplyBtn = document.querySelector('.btn-mul');
const divBtn = document.querySelector('.btn-div');



multiplyBtn.addEventListener('click', function () {
  const firstInput = document.querySelector('.firstN').value;
  //console.log(firstInput);
  const secondInput = document.querySelector('.secondN').value;
  const result = document.querySelector('.result');
  result.textContent = `The Result is: ${firstInput * secondInput}`;


});


divBtn.addEventListener('click', function () {
  const firstInput = document.querySelector('.firstN').value;
  //console.log(firstInput);
  const secondInput = document.querySelector('.secondN').value;
  const result = document.querySelector('.result');
  result.textContent = `The Result is: ${firstInput / secondInput}`;
});

///4
//Write a JavaScript program to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolute difference.
const diff = function (a) {
  const inpDiff = a - 13;
  if (inpDiff > 13) {
    return 2 * inpDiff;
  } else {
    return 13 - a;
  }
};
console.log(diff(35));
console.log(diff(6));

////5
//Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum.
const sum = function (a, b) {
  const add = a + b;
  if (a === b) {
    return 3 * (a + b)
  } else {
    return add
  }
};
console.log(sum(40, 10));
console.log(sum(5, 5));

///6
//Write a JavaScript program to check two given numbers and return true
// if one of the number is 50 or if their sum is 50.
const check = function (a, b) {
  return ((a == 50 || b == 50) || (a + b == 50));
};
console.log(check(30, 40));
console.log(check(30, 50));
console.log(check(20, 30));

///7
//. Write a JavaScript program to check whether a
// given integer is within 20 and 100.
const within = function (a) {
  return ((a >= 20) && (a <= 100));;
};

// console.log(within(50));
// console.log(within(10));
// console.log(within(15));
// console.log(within(70));

////8
//Write a JavaScript program to check from two given integers, 
//whether one is positive and another one is negative.
const checkPositive = function (a, b) {
  return ((a < 0) || (b < 0));

};

console.log(`This is ${checkPositive(20, -10)}`);
console.log(`This is ${checkPositive(20, 30)}`);

////9
//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.
// const newString = function (a) {
//   const input = a;
//   if (input.includes('py')) {
//     console.log(input)
//   } else {
//     console.log(`${'py' + input}`)
//   };
// };

//OR
const newString = function (a) {
  const input = a;
  if (input.substring(0, 2) === 'Py') {///checks for py at the begining
    console.log(input)
  } else {
    console.log(`${'py' + input}`)
  };
};

console.log(newString('Chibuike'));
console.log(newString('Chibuikepy'));
console.log(newString('obipython'));
console.log(newString('Emeka'));
console.log(newString('Ugochi'));
console.log('python');

////9
//Write a JavaScript program to create a new string from a given string with the 
//first character of the given string added at the front and back.
const newStr = function (a) {
  const newStrInp = a;
  const first = newStrInp.substring(0, 1);
  console.log(`${first}${newStrInp}${first}`);

};

console.log(newStr('Micheal'));
console.log(newStr('Chibuike'));

////10
/// Write a JavaScript program to check whether a string 
//starts with 'Java' and false otherwise.
const checkJava = function (a) {
  const java = a;
  return java.substring(0, 4) == 'java';///0,4 pulls ist 4 digits
  //console.log(java.substring(0, 4));
};

console.log(checkJava('javaScript'));
console.log(checkJava('javcript'));

/////11
/// Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
//if the examination is "Final-exam." the student will get A+ grade and total marks must be 
///greater than or equal to 90. Return true if the student get A+ grade or false otherwise. 
const aGrade = function (a) {
  const mark = a;
  // const A = function () {
  //   if (mark > 90) {
  //     console.log(A + "+");
  //   }
  // }
  return mark >= 89 || mark == 100;

};

console.log(aGrade(80));
console.log(aGrade(97));
console.log(aGrade(100));

////12
//
