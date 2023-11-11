// //                                  QUESTION NO 1

// Write a program that returns your age in days. (take age as an input)


 function calculateAgeInDays(age) {
     const daysInYear = 365.25;
    const ageInDays = age * daysInYear;
     return ageInDays;
  }
    const userAge = prompt('enter your age');
    const ageInDays = calculateAgeInDays(userAge);
   console.log('Your age in days is' + ' '+ageInDays+' '+'days');





// //                               QUESTION NO 2     

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//  (take number as an input)


   function num(a){
     const result= a + 1;
      return result
   }
  var userInput = +prompt('Enter any num')
  var result= num(userInput)
  console.log('your result after increment by 1 is'+" "+result)


 


// //                               QUESTION NO 3

// Create a function that takes a number as an argument, decrements the number by -1 and returns the result.


 function num(a){
    const result= a - 1;
    return result
  }
 var userInput = +prompt('Enter any num')
 var result= num(userInput)
 console.log('your result after decrement by 1 is'+" "+result)





// //                               QUESTION NO 4

// Create a function that takes a number and return square of a number


 function num(a){
     const result= a * a;
    return result
 }
 var userInput = +prompt('Enter any num')
var result= num(userInput)
 console.log('your result after taking saqure is'+" "+result)





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
  console.log("Current time in Y-m-d format" +" "+currentTime);
  




// //                               QUESTION NO 6

// Create a function that tells current time from Date object in H:i:s format


 function getCurrentTimeHIS() {
   const now = new Date();
  
    const hours = (now.getHours());
    const minutes = (now.getMinutes());
     const seconds =(now.getSeconds());
     const currentTimeHIS = `${hours}:${minutes}:${seconds}`;
  
    return currentTimeHIS;
   }
  
   const currentTimeInHIS = getCurrentTimeHIS();
   console.log("Current time in H:i:s format"+" "+ currentTimeInHIS);
  




// //                       QUESTION NO 1

// 1. Create a block of code that you can use several times.


  function num (a,b){
    let sum1= a + b
   return sum1
   }
  const sum1=num(1,2)
  console.log("Ans of frist-input"+' '+sum1)
  const sum2=num(-4,10)
  console.log("Ans of second-input"+' '+sum2)
  const sum3=num(11,100)
  console.log("Ans of third-input3"+' '+sum3)





// //                       QUESTION NO 2

// 2. Write a function that displays current date & time in your
// browser.


 function getCurrentTime(){
   let now=new Date()
  const date=now.toLocaleString()

 return date

  }
  const dateTime=getCurrentTime()
 document.write("Current Date and Time"+" "+dateTime)





// //                       QUESTION NO 3

// 3. Write a function that takes first &amp; last name and then it greets
// the user using his full name.


  function greeting(){
   let first_name=prompt('Enter your First name')
   let second_name=prompt('Enter your Second name')
    let greet="Welcome!!"
   const format=(first_name+" "+second_name+" "+greet)

    return format
  }
var format=greeting()
  console.log("Hello,"+" "+format)





// //                       QUESTION NO 4

// 4. Write a function that adds two numbers (input by user) and
// returns the sum of two numbers.


     function addTwoNumbers() {
   const num1 = +prompt("Enter the first number:");
     const num2 = +prompt("Enter the second number:");
         const sum = num1 + num2;
        
    return sum;
     }
     const sum=addTwoNumbers()
    console.log("The sum of these input" +" "+"is"+" "+sum)





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
      
        




//      function num(a){
//      const result= a * a;
//     return result
//   }
//  var userInput = +prompt('Enter any num')
//  var result= num(userInput)
//  console.log('your result after taking saqure is'+" "+result)






// function calculateFactorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * calculateFactorial(number - 1);
//     }
//   }
  
//   const userInput = prompt("enter");
//   const factorialResult = calculateFactorial(userInput);
//   console.log(`The factorial of ${userInput} is: ${factorialResult}`);





  

//    function counting(start,end){
//     for(let i=start; i<=end; i++){
//         document.write(`${i}<br>`)
//     }
// }
//   const startNum = prompt("enter");
//   const endNum =  prompt("enter");
//   counting(startNum, endNum);









//  function calculateHypotenuse(base,perpendicular){
//      function calculateSquare(number){
//          return number * number
//     }
//  const baseSqaure= calculateSquare(base)
//  const perpendicularSqaure= calculateSquare(perpendicular)
//  const hypotenuseSquare= baseSqaure + perpendicularSqaure
//  const hypotenuse = Math.sqrt(hypotenuseSquare)

//  console.log(`The hypotenuse of the right-angled triangle is: ${hypotenuse}`);
//  return hypotenuse;
//  }

//  var baseLength=prompt("Enter base value")
//  var perpendicularLength=prompt("Enter perpendicular value")

//  const result= calculateHypotenuse(baseLength,perpendicularLength)








// function arr(){                          ////------------?????????????
//   var names = ["zoya","aliza","yusra"];
//    for (let i = 0; i < names.length; i++) {
  
//        document.write( names[i]+"<br>")
//     }
//   }
//     arr()




    

// function findLargest(...numbers) {
//     const largestNumber = Math.max(...numbers);
//     console.log(`The largest number is: ${largestNumber}`);
//     return largestNumber;
//   }
  
 
//   findLargest(15, 7, 2, 9, 423);
  





// function calculateAreaOfRectangle(width,height){
//         const result= width*height;
//         console.log("Area of rectangle is" + " "+result)
//          return result
//       }
//      var userInput1 = +prompt('Enter any num')
//      var userInput2 = +prompt('enter')
     
//      const result = calculateAreaOfRectangle(userInput1,userInput2)
    
    
    
  
    //  function calculateAreaOfRectangle(width,height){ 
    //      return width * height
    //   }
    //  console.log("Area of rectangle is "+" "+calculateAreaOfRectangle(3,2))
    





    
    //  function sortArray(inputArray) {
    //     // Use the Array.prototype.sort() method to sort the array
    //     return inputArray.sort(function(a, b) {
    //       // Compare function to specify the sorting order
    //       return a - b; // For ascending order, use `a - b`; for descending order, use `b - a`
    //     });
    //   }
    //   const myArray = [4, 2, 8, 1, 6]
    //   console.log(sortArray(myArray));
      
    



// function sumArray(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
//   const myNumbers = [1, 2, 3, 4, 5];
//   console.log(sumArray(myNumbers)); 
  


//  var param = function inner() {       ////-------------????????????
//    return typeof inner;
//    }
//   alert(param());






  
// function power(base,exponent){
//   return Math.pow(base,exponent)
// }

// console.log(power(3,2))





// function rollDice() {
//     var randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log("The dice rolled", rollDice())





// function reverseNumber(x) {
    
//     var strNumber = x.toString();
//     var reversedStr = strNumber.split('').reverse().join('');
//     var reversedNumber = parseInt(reversedStr);
  
//     return reversedNumber;
//   }
  
//   var x = 32243;
//   console.log("Original number:", x);
//   console.log("Reversed number:", reverseNumber(x));
  
//  
                                            //  EXPLAINATION OF ABOVE CODE  //
// In this function, toString() is used to convert the number to a string, 
// split('') is used to split the string into an array of characters,
// reverse() is used to reverse the array, 
// and join('') is used to join the characters back into a string. 
// Finally, parseInt() is used to convert the reversed string back to a number










// function isPalindrome(str){
//     var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
// var reversedStrg = cleanedStr.split('').reverse().join('')
// return cleanedStr === reversedStrg
// }
// var testString= "madam"
// if(isPalindrome(testString)){
//     console.log(testString + " "+ "is a palindrome.")
// } else{
//     console.log(testString + " "+"is not a palindrome.")
// }



// function capitalizeWords(inputString) {
//     var words = inputString.split(' ');
//     var capitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     var resultString = capitalizedWords.join(' ');
  
//     return resultString;
//   }
  
//   var inputString = "the quick brown fox";
//   var outputString = capitalizeWords(inputString);
//   console.log("Original string", inputString);
//   console.log("Capitalized string", outputString);
  

   


// function findLongestWord(inputString) {
//     var words = inputString.split(' ');
//     var longestWord = '';
//     var maxLength = 0;
  
//     words.forEach(function(word) {
//       var cleanWord = word.replace(/[^a-zA-Z]/g, '');
//       if (cleanWord.length > maxLength) {
//         maxLength = cleanWord.length;
//         longestWord = cleanWord;
//       }
//     });
  
//     return longestWord;
//   }

//   var inputString = 'Web Development Tutorial';
//   var longestWord = findLongestWord(inputString);
//   console.log("Original string:", inputString);
//   console.log("Longest word:", longestWord);
  




// function countVowels(inputString) {
//     var lowercaseString = inputString.toLowerCase();
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var vowelCount = 0;
  
//     for (var i = 0; i < lowercaseString.length; i++) {
//       if (vowels.includes(lowercaseString[i])) {
//         vowelCount++;
//       }
//     }
  
//     return vowelCount;
//   }
  
//   var inputString = 'The quick brown fox';
//   var numberOfVowels = countVowels(inputString);
//   console.log("Original string:", inputString);
//   console.log("Number of vowels:", numberOfVowels);
  




// function getType(input) {
//     return typeof input;
//   }
  
//   var value1 = 42;
//   var value2 = "Hello, world!";
//   var value3 = true;
  
//   console.log("Type of value1:", getType(value1));
//   console.log("Type of value2:", getType(value2)); 
//   console.log("Type of value3:", getType(value3)); 







// function extractUniqueCharacters(inputString) {
//     var uniqueCharacters = new Set();
  
//     for (var i = 0; i < inputString.length; i++) {
//       uniqueCharacters.add(inputString[i]);
//     }

//     var resultString = Array.from(uniqueCharacters).join('');
  
//     return resultString;
//   }
  
//   var inputString = "thequickbrownfoxjumpsoverthelazydog";
//   var outputString = extractUniqueCharacters(inputString);
//   console.log("Original string:", inputString);
//   console.log("Unique characters:", outputString);
  






// function countOccurrences(inputString, targetLetter) {
//     var lowercaseTarget = targetLetter.toLowerCase();
//     var lowercaseString = inputString.toLowerCase();
//     var occurrenceCount = 0;
  
//     for (var i = 0; i < lowercaseString.length; i++) {

//       if (lowercaseString[i] === lowercaseTarget) {
//         occurrenceCount++;
//       }
//     }
  
//     return occurrenceCount;
//   }
  
//   var inputString = 'JSResourceS.com';
//   var targetLetter = 'o';
//   var numberOfOccurrences = countOccurrences(inputString, targetLetter);
//   console.log("Original string:", inputString);
//   console.log(`Number of occurrences of "${targetLetter}":`, numberOfOccurrences);
  







// function calculateAge(birthYear, currentYear) {

//     if (!currentYear) {
//       currentYear = new Date().getFullYear();
//     }

//     var age1 = currentYear - birthYear;
//     var age2 = age1 - 1;
//     console.log("You are either " + age1 + " or " + age2);
//   }
  
//   calculateAge(2004, 2023); 
//   calculateAge(1994, 2023);
//   calculateAge(1999); 
  






// function calculateSupply(age, amountPerDay, maxAge) {
//      maxAge = maxAge || 85;
  
     
//     var snack = prompt("Enter your favorite snack:");
//      var age = parseInt(prompt("Enter your current age:"));
//      var amountPerDay = parseFloat(prompt("Enter the amount of snacks per day:"));
//      var totalAmount = Math.round((maxAge - age) * 365.25 * amountPerDay); 
//     console.log(`Your Favourite Sanck: ${snack}`)
//      console.log(`Current Age: ${age}`)
//     console.log(`Estimated Age: ${maxAge}`)
//      console.log(`Amount of snack per day ${amountPerDay}`)
//     console.log(`You will need ${totalAmount} ${snack} to last you until the ripe old age of ${maxAge}`)
   
//    }
  
//    calculateSupply();
  



// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
//   }
  
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area.toFixed(2)}`);
//   }
  
//   var radius = parseFloat(prompt("Enter the radius of the circle:"));
  
//   calcCircumference(radius);
//   calcArea(radius);
  






// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
//   }

//   function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
//   }
  
//   var celsiusTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));
//   var fahrenheitTemperature = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
  
//   celsiusToFahrenheit(celsiusTemperature);
//   fahrenheitToCelsius(fahrenheitTemperature);
  