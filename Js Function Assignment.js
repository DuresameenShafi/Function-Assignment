// //                                  QUESTION NO 1

// Write a program that returns your age in days. (take age as an input)


function calculateAgeInDays(age) {
  const daysInYear = 365.25;
  const ageInDays = age * daysInYear;
  return ageInDays;
}
const userAge = prompt('enter your age');
const ageInDays = calculateAgeInDays(userAge);
console.log('Your age in days is' + ' ' + ageInDays + ' ' + 'days');





// //                               QUESTION NO 2     

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//  (take number as an input)


function num(a) {
  const result = a + 1;
  return result
}
var userInput = +prompt('Enter any num')
var result = num(userInput)
console.log('your result after increment by 1 is' + " " + result)





// //                               QUESTION NO 3

// Create a function that takes a number as an argument, decrements the number by -1 and returns the result.


function num(a) {
  const result = a - 1;
  return result
}
var userInput = +prompt('Enter any num')
var result = num(userInput)
console.log('your result after decrement by 1 is' + " " + result)





// //                               QUESTION NO 4

// Create a function that takes a number and return square of a number


function num(a) {
  const result = a * a;
  return result
}
var userInput = +prompt('Enter any num')
var result = num(userInput)
console.log('your result after taking saqure is' + " " + result)





// //                               QUESTION NO 5

//  Create a function that tells current time in Y-m-d format.


function getCurrentDate() {
  const now = new Date();
  const year = (now.getFullYear());
  const month = (now.getMonth());
  const day = (now.getDate());
  const currentTime = `${year}-${month}-${day}`;

  return currentTime;
}

const currentTime = getCurrentDate();
console.log("Current time in Y-m-d format" + " " + currentTime);





// //                               QUESTION NO 6

// Create a function that tells current time from Date object in H:i:s format


function getCurrentTimeHIS() {
  const now = new Date();

  const hours = (now.getHours());
  const minutes = (now.getMinutes());
  const seconds = (now.getSeconds());
  const currentTimeHIS = `${hours}:${minutes}:${seconds}`;

  return currentTimeHIS;
}

const currentTimeInHIS = getCurrentTimeHIS();
console.log("Current time in H:i:s format" + " " + currentTimeInHIS);





// //                       QUESTION NO 1

// 1. Create a block of code that you can use several times.


function num(a, b) {
  let sum1 = a + b
  return sum1
}
const sum1 = num(1, 2)
console.log("Ans of frist-input" + ' ' + sum1)
const sum2 = num(-4, 10)
console.log("Ans of second-input" + ' ' + sum2)
const sum3 = num(11, 100)
console.log("Ans of third-input3" + ' ' + sum3)





// //                       QUESTION NO 2

// 2. Write a function that displays current date & time in your
// browser.


function getCurrentTime() {
  let now = new Date()
  const date = now.toLocaleString()

  return date

}
const dateTime = getCurrentTime()
document.write("Current Date and Time" + " " + dateTime)





// //                       QUESTION NO 3

// 3. Write a function that takes first &amp; last name and then it greets
// the user using his full name.


function greeting() {
  let first_name = prompt('Enter your First name')
  let second_name = prompt('Enter your Second name')
  let greet = "Welcome!!"
  const format = (first_name + " " + second_name + " " + greet)

  return format
}
var format = greeting()
console.log("Hello," + " " + format)





// //                       QUESTION NO 4

// 4. Write a function that adds two numbers (input by user) and
// returns the sum of two numbers.


function addTwoNumbers() {
  const num1 = +prompt("Enter the first number:");
  const num2 = +prompt("Enter the second number:");
  const sum = num1 + num2;

  return sum;
}
const sum = addTwoNumbers()
console.log("The sum of these input" + " " + "is" + " " + sum)





// //                       QUESTION NO 5

// 5. Calculator:
// Write a function that takes three arguments num1, num2 &amp;
// operator &amp; compute the desired operation. Return and show
// the desired result in your browser.


function calculator(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Cannot divide by zero.");
      return;
    }
  } else {
    alert("Invalid operator. Please use +, -, *, or /.");
    return;
  }

  document.write(`Result of ${num1} ${operator} ${num2} is: ${result}`);

  return result;
}

const input1 = +prompt('enter');
const input2 = +prompt("enter");
const operation = prompt("sign");
const result = calculator(input1, input2, operation);





// //                       QUESTION NO 6

// 6. Write a function that squares its argument.


function num(a) {
  const result = a * a;

  return result
}
var userInput = +prompt('Enter any num')
var result = num(userInput)
console.log('your result after taking saqure is' + " " + result)





// //                       QUESTION NO 7

// 7. Write a function that computes factorial of a number.


function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

const userInput = prompt("enter");
const factorialResult = calculateFactorial(userInput);
console.log(`The factorial of ${userInput} is: ${factorialResult}`);





// //                       QUESTION NO 8


// 8. Write a function that take start and end number as inputs &amp;
// display counting in your browser.


function counting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(`${i}<br>`)
  }
}
const startNum = prompt("enter");
const endNum = prompt("enter");
counting(startNum, endNum);





// //                       QUESTION NO 9

// 9. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(number) {
    return number * number
  }
  const baseSqaure = calculateSquare(base)
  const perpendicularSqaure = calculateSquare(perpendicular)
  const hypotenuseSquare = baseSqaure + perpendicularSqaure
  const hypotenuse = Math.sqrt(hypotenuseSquare)

  console.log(`The hypotenuse of the right-angled triangle is: ${hypotenuse}`);
  return hypotenuse;
}

var baseLength = prompt("Enter base value")
var perpendicularLength = prompt("Enter perpendicular value")

const result = calculateHypotenuse(baseLength, perpendicularLength)





// //                       QUESTION NO 10

// 10. Write a function that writes variable length arguments list in your browser.


function arr() {                          //------???????????
  var names = ["zoya", "aliza", "yusra"];
  for (let i = 0; i < names.length; i++) {

    document.write(names[i] + "<br>")
  }
}
arr()





// //                       QUESTION NO 11

// 11. Write a function that accepts any number of arguments & find largest of the number.


function findLargest(...numbers) {
  const largestNumber = Math.max(...numbers);
  console.log(`The largest number is: ${largestNumber}`);
  return largestNumber;
}
findLargest(15, 7, 2, 9, 423);





// //                       QUESTION NO 12

// 12. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a. Arguments as values
// b. Arguments as variables


function calculateRectangleAreaWithValue(width, height) {
  return width * height;
}

function calculateRectangleAreaWithVariables() {
  var width = 10;
  var height = 5;
  return width * height;
}

var areaWithValue = calculateRectangleAreaWithValue(7, 8);
console.log("Area with values:", areaWithValue);

var areaWithVariables = calculateRectangleAreaWithVariables();
console.log("Area with variables:", areaWithVariables);





// //                       QUESTION NO 13

// 13. Write a function that receives an array & returns the sorted array.


function sortArray(inputArray) {

  return inputArray.sort(function (a, b) {

    return a - b;
  });
}
const myArray = [4, 2, 8, 1, 6]
console.log(sortArray(myArray));





// //                       QUESTION NO 14

// 14. Write a function that takes numbers array, sums its elements & returns the sum.


function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const myNumbers = [1, 2, 3, 4, 5];
console.log(sumArray(myNumbers));




// //                       QUESTION NO 15

// 15. Execute &amp; monitor the output of following JS program:


var param = function inner() {
  return typeof inner;
}
alert(param());





// //                       QUESTION NO 16

// 16. Write a function that computes power of a number. E.g. 2^3 is 8.


function power(base, exponent) {
  return Math.pow(base, exponent)
}

console.log(power(3, 2))





// //                       QUESTION NO 17

// 17. Write a function that simulates a dice &amp; returns a random dice value.


function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}

console.log("The dice rolled", rollDice())





// //                       QUESTION NO 18

//  18. Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223


function reverseNumber(x) {

  var strNumber = x.toString();
  var reversedStr = strNumber.split('').reverse().join('');
  var reversedNumber = parseInt(reversedStr);

  return reversedNumber;
}

var x = 32243;
console.log("Original number:", x);
console.log("Reversed number:", reverseNumber(x));

//  
//  EXPLAINATION OF ABOVE CODE  //
// In this function, toString() is used to convert the number to a string, 
// split('') is used to split the string into an array of characters,
// reverse() is used to reverse the array, 
// and join('') is used to join the characters back into a string. 
// Finally, parseInt() is used to convert the reversed string back to a number





// //                       QUESTION NO 19

// 19. Write a JavaScript function that checks whether a passed string is palindrome or not A palindrome is word, phrase,
// or sequence that reads the same backward as forward, e.g., madam.


function isPalindrome(str) {
  var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var reversedStrg = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedStrg
}
var testString = "madam"
if (isPalindrome(testString)) {
  console.log(testString + " " + "is a palindrome.")
} else {
  console.log(testString + " " + "is not a palindrome.")
}





// //                       QUESTION NO 20

//  20. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : "the quick brown fox"; 
// EXPECTED OUTPUT : "The Quick Brown Fox";


function capitalizeWords(inputString) {
  var words = inputString.split(' ');
  var capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  var resultString = capitalizedWords.join(' ');

  return resultString;
}
var inputString = "the quick brown fox";
var outputString = capitalizeWords(inputString);
console.log("Original string", inputString);
console.log("Capitalized string", outputString);





// //                       QUESTION NO 21

// 21. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : "Web Development Tutorial"; 
// EXPECTED OUTPUT : "Development";


function findLongestWord(inputString) {
  var words = inputString.split(' ');
  var longestWord = '';
  var maxLength = 0;

  words.forEach(function (word) {
    var cleanWord = word.replace(/[^a-zA-Z]/g, '');
    if (cleanWord.length > maxLength) {
      maxLength = cleanWord.length;
      longestWord = cleanWord;
    }
  });

  return longestWord;
}

var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
console.log("Original string:", inputString);
console.log("Longest word:", longestWord);





// //                       QUESTION NO 22

// 22. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// EXAMPLE STRING : "The quick brown fox"; 
// EXPECTED OUTPUT : 5


function countVowels(inputString) {
  var lowercaseString = inputString.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;

  for (var i = 0; i < lowercaseString.length; i++) {
    if (vowels.includes(lowercaseString[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

var inputString = 'The quick brown fox';
var numberOfVowels = countVowels(inputString);
console.log("Original string:", inputString);
console.log("Number of vowels:", numberOfVowels);





// //                       QUESTION NO 23

//  23. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object,boolean, function, number, string, and undefined.


function getType(input) {
  return typeof input;
}

var value1 = 42;
var value2 = "Hello, world!";
var value3 = true;

console.log("Type of value1:", getType(value1));
console.log("Type of value2:", getType(value2));
console.log("Type of value3:", getType(value3));





// //                       QUESTION NO 24

// 24. Write a JavaScript function to extract unique characters from a string.
// EXAMPLE STRING :"thequickbrownfoxjumpsoverthelazydog";
// EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg";


function extractUniqueCharacters(inputString) {
  var uniqueCharacters = new Set();

  for (var i = 0; i < inputString.length; i++) {
    uniqueCharacters.add(inputString[i]);
  }
  var resultString = Array.from(uniqueCharacters).join('');

  return resultString;
}

var inputString = "thequickbrownfoxjumpsoverthelazydog";
var outputString = extractUniqueCharacters(inputString);
console.log("Original string:", inputString);
console.log("Unique characters:", outputString);





// //                       QUESTION NO 25

// 25. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : "JSResourceS.com", "o" 
// EXPECTED OUTPUT : 2


function countOccurrences(inputString, targetLetter) {
  var lowercaseTarget = targetLetter.toLowerCase();
  var lowercaseString = inputString.toLowerCase();
  var occurrenceCount = 0;

  for (var i = 0; i < lowercaseString.length; i++) {

    if (lowercaseString[i] === lowercaseTarget) {
      occurrenceCount++;
    }
  }

  return occurrenceCount;
}

var inputString = 'JSResourceS.com';
var targetLetter = 'o';
var numberOfOccurrences = countOccurrences(inputString, targetLetter);
console.log("Original string:", inputString);
console.log(`Number of occurrences of "${targetLetter}":`, numberOfOccurrences);





// //                       QUESTION NO 26

//  26. The Age Calculator
// Forgot how old you are? Calculate it!
//  Write a function named calculateAge that:
// o takes 2 arguments: birth year, current year.
// o calculates the 2 possible ages based on those years.
// o outputs the result to the screen like so: "You are either
// NN or NN";

//  Call the function three times with different sets of values.
//  Bonus: Figure out how to get the current year in JavaScript
// instead of passing it in.


function calculateAge(birthYear, currentYear) {

  if (!currentYear) {
    currentYear = new Date().getFullYear();
  }

  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;
  console.log("You are either " + age1 + " or " + age2);
}

calculateAge(2004, 2023);
calculateAge(1994, 2023);
calculateAge(1999);





// //                       QUESTION NO 27

// 27. The Lifetime Supply Calculator Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//  Write a function named calculateSupply that:
// o takes 2 arguments: age, amount per day.
// o calculates the amount consumed for rest of the life(based on a constant max age).
// o outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X";
//  Call that function three times, passing in different values each time.
//  Bonus: Accept floating point values for amount per day, and
// round the result to a round number.


function calculateSupply(age, amountPerDay, maxAge) {
  maxAge = maxAge || 85;

  var snack = prompt("Enter your favorite snack:");
  var age = parseInt(prompt("Enter your current age:"));
  var amountPerDay = parseFloat(prompt("Enter the amount of snacks per day:"));
  var totalAmount = Math.round((maxAge - age) * 365.25 * amountPerDay);
  console.log(`Your Favourite Sanck: ${snack}`)
  console.log(`Current Age: ${age}`)
  console.log(`Estimated Age: ${maxAge}`)
  console.log(`Amount of snack per day ${amountPerDay}`)
  console.log(`You will need ${totalAmount} ${snack} to last you until the ripe old age of ${maxAge}`)
}

calculateSupply();





// //                       QUESTION NO 28

// 28. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
//  Pass the radius to the function.
//  Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//  Pass the radius to the function.
//  Calculate the area based on the radius, and output "The area is NN".


function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  console.log(`The area is ${area.toFixed(2)}`);
}

var radius = parseFloat(prompt("Enter the radius of the circle:"));

calcCircumference(radius);
calcArea(radius);





// //                       QUESTION NO 29

// 29. The Temperature Converter
// It's hot out! Lets! make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output "NN°C is NN °F".
// Create a function called fahrenheitToCelsius:
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output "NN°F is NN°C";


function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}

var celsiusTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));
var fahrenheitTemperature = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

celsiusToFahrenheit(celsiusTemperature);
fahrenheitToCelsius(fahrenheitTemperature);
