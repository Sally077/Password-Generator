// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

prompt("Enter a password length between 10 and 64 : ");
prompt("Would you like to include special characters : ");
prompt("Would you like lowercase characters : ");
prompt("Would you like uppercase characters :");


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
   

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  console.log("testing to see if my button works")
  return "generated password text should show up here"

//  step 1 prompt user
//      a. to ask for the value length of password (data range >=10 and <= 64)
//      b. prompt user for uppercase/lowercase and special characters
//  step 2 input validation ( e.g. isupper?, islower?, length)
//  step 3 generate password
//  step 4 display generated password on webpage
   

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



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




