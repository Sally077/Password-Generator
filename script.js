// Array of special characters to be included in password
// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.'
// ];



// Array of numeric characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
// var lowerCasedCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];



// Array of uppercase characters to be included in password
// var upperCasedCharacters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z'
// ];




var minCharacterLength = 10;
var maxCharacterLength = 64;


var len = prompt("Enter a password length between 10 and 64 : ")

//ERROR Change to iteration on next line
if (len >= minCharacterLength && len <= maxCharacterLength) { 
  alert ("Characters meet conditions set")
}
else{ 
  alert("Characters do not meet length please enter a number between 10 and 64");
  var len = prompt("Enter a password length between 10 and 64 : ")
}


 
   



var char = confirm("Would you like to include special characters : ");
var lower = confirm("Would you like lowercase characters : ");
var upper = confirm("Would you like uppercase characters :");
var number = confirm("Would you like numbers included in your password :");

console.log(len);
console.log(char);
console.log(lower);
console.log(upper);
console.log(number);




// Function to prompt user for password options



// function getPasswordOptions() {

const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const generateEl = document.getElementById("generate");

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol
};


// Code below posibly not necessary as I do not have check boxes in my html
// generate event
generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
  const hassymbol = lowercaseEl.checked;
  const hasUpper = lowercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = lowercaseEl.checked;

  generatePass(
    hassymbol,
    hasUpper,
    hasLower,
    hasNumber,
    length
    );
});

//generate password function

function generatePass(lower, upper, symbol, number, length) {
  //create a string 
  //filter out unnecessary types so it does not generate unselected values
  //generate function for each type
  // add final password to password variable
  var generatedPassword = "";

  const typesCount = lower + upper + symbol + number;
  console.log("typesCount", typesCount);
  //counts all the types that have been checked

  const typesArr = [{lower}, {upper}, {symbol}, {number}].filter
  (item => Object.values(item)[0]);
  console.log("typesArr: ", typesArr);

  //if no prompts selected
  if(typesCount === 0) {
    return "";
  }

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      // console.log("functionName: ", functionName);

      generatedPassword += randomFunction[functionName]();

    });
  }

  console.log(generatedPassword);
}


// Function for getting a random element from an array

function getRandomNumber() {

  const numericCharacters = '0123456789'
  
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}
function getRandomSymbol() {

  const specialCharacters = '*&^%$£"!)(}{~'
  
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];


}

function getRandomUpper() {
  const upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomLower() {
  

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomNumber());
console.log(getRandomSymbol());
console.log(getRandomLower());
console.log(getRandomUpper());




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');




// function generatePassword() {
//   console.log("testing to see if my button works")
//   return "generated password text should show up here"
// }

//  step 1 prompt user
//      a. to ask for the value length of password (data range >=10 and <= 64)
//      b. prompt user for uppercase/lowercase and special characters
//  step 2 input validation ( e.g. isupper?, islower?, length)
//  step 3 generate password
//  step 4 display generated password on webpage
   



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);



// Pseudo code

/*
password generator that:

generates a password when clicked 

presents a series of prompts for password criteria

at least 10 characters but no more than 64

Character Types
Lowercase
Uppercase
Numeric 
special characters
(at least one character type for each)

once prompts are answered should generate a password


Starter Codes:

1. function getPasswordOptions() { ~ I think this will select all the hold all the data in the array

2. function getRandom(arr) { ~ This should connect to all of the characters needed so the computer can randomly select characters, integers and strings 

3. function generatePassword() { ~ This should generate the actual password before submitting the password as text

4. var generateBtn = document.querySelector('#generate');   ~ this should link to the generate button and code needs adding to make it responisve when clicked

5. function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;  ~ I think that this will pass the generated password through the parameters??


  generateBtn.addEventListener('click', writePassword); ~ I think this will write the password text into the placholder?



  I need to find out what the functions above do and some of the keywords
*/




