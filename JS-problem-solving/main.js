//* 1- Write a program that allows the user to enter a number then print it.
// var inputNum = +window.prompt("Enter The Number: ");
// if (isNaN(inputNum)) console.log("Please enter a valid number");
// else console.log(inputNum);

//* 2- Write a program that takes a number from the user then print yes if that number can divide by 3 and 4 at the same time, otherwise print no.
// var inputNum = +window.prompt("Enter The Number: ");
// if (isNaN(inputNum)) {
//   console.log("Please enter a valid number");
// } else if (inputNum % 3 == 0 && inputNum % 4 == 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//* 3- Write a program that allows the user to insert 2 integers then print the max.
// var inputNum1 = +window.prompt("Enter The First Number: ");
// var inputNum2 = +window.prompt("Enter The Second Number: ");
// if (isNaN(inputNum1) || isNaN(inputNum2)) {
//   console.log("Please enter a valid number");
// } else if (inputNum1 > inputNum2) {
//   console.log(inputNum1);
// } else {
//   console.log(inputNum2);
// }

//* 4- Write a program that allows the user to insert an integer then print negative if it is negative number, otherwise print positive.
// var inputNum = +window.prompt("Enter The Number: ");
// if (isNaN(inputNum)) {
//   console.log("Please enter a valid number");
// } else if (inputNum < 0) {
//   console.log("Negative");
// } else {
//   console.log("Positive");
// }

//* 5- Write a program that takes 3 integers from the user then prints the max element and the min element.
// var inputNum1 = +window.prompt("Enter The First Number: ");
// var inputNum2 = +window.prompt("Enter The Second Number: ");
// var inputNum3 = +window.prompt("Enter The Third Number: ");
// var maxNum = inputNum1;
// var minNum = inputNum1;

// if (isNaN(inputNum1) || isNaN(inputNum2) || isNaN(inputNum3))
//   console.log("Please enter a valid number");
// if (inputNum2 > maxNum) maxNum = inputNum2;
// if (inputNum3 > maxNum) maxNum = inputNum3;

// if (inputNum2 < minNum) minNum = inputNum2;
// if (inputNum3 < minNum) minNum = inputNum3;

// console.log(`a ${maxNum} is the max and ${minNum} is the min`);

//* Write a program that allows the user to insert an integer number then check If a number is even or odd.
// var inputNum = +window.prompt("Enter The Number: ");
// if (inputNum % 2 === 0) console.log("Even");
// else console.log("Odd");

//* 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant Note: lowercase and uppercase are important.
// var inputChar = window.prompt("Enter Character: ");
// if (
//   inputChar === "a" ||
//   inputChar === "A" ||
//   inputChar === "e" ||
//   inputChar === "E" ||
//   inputChar === "i" ||
//   inputChar === "I" ||
//   inputChar === "o" ||
//   inputChar === "O" ||
//   inputChar === "u" ||
//   inputChar === "U"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

//* 8- Write a program that allows the user to enter a number then print all the numbers starting from 1 to the user entered number.
// var inputNum = +window.prompt("Enter The Number: ");
// for (var i = 1; i <= inputNum; i++) {
//   console.log(i);
// }

//* 9- Write a program that allows the user to insert an integer then print a multiplication table up to 12.
// var inputNum = +window.prompt("Enter The Number: ");
// for (var i = 1; i <= 12; i++) {
//   console.log(inputNum * i);
// }

//* 10- Write a program that allows the user to enter a number then print all the only evens numbers starting from 1 to the user entered number.
// var inputNum = +window.prompt("Enter The Number: ");
// for (var i = 1; i <= inputNum; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//* 11- Write a program that allows the user to enter two numbers and print the result to make the second number power the first number.
// var inputNum1 = +window.prompt("Enter The Number One: ");
// var inputNum2 = +window.prompt("Enter The Number Two: ");
// var result = inputNum1 ** inputNum2;
// console.log(result);

//* 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var inputNum1 = +window.prompt("Enter The First Mark: ");
// var inputNum2 = +window.prompt("Enter The Second Mark: ");
// var inputNum3 = +window.prompt("Enter The Third Mark: ");
// var inputNum4 = +window.prompt("Enter The Fourth Mark: ");
// var inputNum5 = +window.prompt("Enter The Fifth Mark: ");

// var total = inputNum1 + inputNum2 + inputNum3 + inputNum4 + inputNum5;
// var avg = (inputNum1 + inputNum2 + inputNum3 + inputNum4 + inputNum5) / 5;
// var percentage = (total / 500) * 100;
// console.log(
//   "Total is: " +
//     total +
//     " and" +
//     " Average is: " +
//     avg +
//     " and" +
//     " Percentage is: " +
//     percentage +
//     "%"
// );

//*  13- Write a program to input the month number and print the number of days in that month.
// var inputMonth = +window.prompt("Enter The Month Number: ");
// if (
//   inputMonth === 1 ||
//   inputMonth === 3 ||
//   inputMonth === 5 ||
//   inputMonth === 7 ||
//   inputMonth === 8 ||
//   inputMonth === 10 ||
//   inputMonth === 12
// ) {
//   console.log("31 Days");
// } else if (inputMonth === 2) {
//   console.log("28 or 29 Days");
// } else if (
//   inputMonth === 4 ||
//   inputMonth === 6 ||
//   inputMonth === 9 ||
//   inputMonth === 11
// ) {
//   console.log("30 Days");
// } else {
//   console.log("Invalid month number. please enter a number between 1 to 12");
// }

//* 14- Write a program to enter marks of five subjects and find percentage and grade.
// var inputNum1 = +window.prompt("Enter The First Mark: ");
// var inputNum2 = +window.prompt("Enter The Second Mark: ");
// var inputNum3 = +window.prompt("Enter The Third Mark: ");
// var inputNum4 = +window.prompt("Enter The Fourth Mark: ");
// var inputNum5 = +window.prompt("Enter The Fifth Mark: ");
// var total = inputNum1 + inputNum2 + inputNum3 + inputNum4 + inputNum5;
// var pres = (total / 500) * 100;
// var grade;
// if (pres >= 90 && pres <= 100) {
//   grade = "A";
//   console.log(grade + " and " + pres + "%");
// } else if (pres >= 80 && pres < 90) {
//   grade = "B";
//   console.log(grade + " and " + pres + "%");
// } else if (pres >= 70 && pres < 80) {
//   grade = "C";
//   console.log(grade + " and " + pres + "%");
// } else if (pres >= 50 && pres < 70) {
//   grade = "D";
//   console.log(grade + " and " + pres + "%");
// } else {
//   grade = "f";
//   console.log(grade + " and " + pres + "%");
// }

//* 15- Write a program to input the month number and print the number of days in that month. (USING SWITCH CASE)
// var inputMonth = +window.prompt("Enter The Month Number: ");
// switch (inputMonth) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 Days");
//     break;
//   case 2:
//     console.log("28 or 29 Days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 Days");
//     break;

//   default:
//     console.log("Invalid month number. please enter a number between 1 to 12");
//     break;
// }

//* 16- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant (USING SWITCH CASE)
// var inputChar = window.prompt("Enter Character: ");
// switch (inputChar) {
//   case "a":
//   case "A":
//   case "e":
//   case "E":
//   case "i":
//   case "I":
//   case "o":
//   case "O":
//   case "u":
//   case "U":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
//     break;
// }

//* 17- Write a program that takes 2 integers from the user then prints the max element. (USING SWITCH CASE)
// var inputNum1 = +window.prompt("Enter The First Number: ");
// var inputNum2 = +window.prompt("Enter The Second Number: ");

// switch (true) {
//   case inputNum1 > inputNum2:
//     console.log("The max is " + inputNum1);
//     break;
//   case inputNum2 > inputNum1:
//     console.log("The max is " + inputNum2);
//     break;
//   default:
//     console.log("Both numbers are equal.");
//     break;
// }

//* 18- Write a program that allows the user to insert an integer number then check If a number is even or odd. (USING SWITCH CASE)
// var inputNum = +window.prompt("Enter The Number: ");
// switch (true) {
//   case inputNum % 2 === 0:
//     console.log("Even");
//     break;
//   default:
//     console.log("Odd");
//     break;
// }

// * 19- Write a program that allows the user to insert an integer then print negative if it is negative number, or print positive if it is a positive number or zero if it is zero. (USING SWITCH CASE)
// var inputNum = +window.prompt("Enter The Number: ");
// switch (true) {
//   case inputNum < 0:
//     console.log("Negative");
//     break;
//   case inputNum > 0:
//     console.log("Positive");
//     break;
//   case inputNum === 0:
//     console.log("Zero");
//     break;
//   default:
//     console.log("Please enter a valid number.");
//     break;
// }

//* 20- Write a program to create Simple Calculator.
// var inputNum1 = +window.prompt("Enter The First Number: ");
// var inputNum2 = +window.prompt("Enter The Second Number: ");
// var char = window.prompt("Enter The Math Operator: ");

// switch (char) {
//   case "+":
//     console.log(inputNum1 + inputNum2);
//     break;
//   case "-":
//     console.log(inputNum1 - inputNum2);
//     break;
//   case "*":
//     console.log(inputNum1 * inputNum2);
//     break;
//   case "/":
//     console.log(inputNum1 / inputNum2);
//     break;

//   default:
//     break;
// }
