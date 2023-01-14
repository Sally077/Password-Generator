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

var minCharacterLength = 10;
var maxCharacterLength = 64;

var len = prompt("Enter a password length between 10 and 64 : ")

//ERROR cannot find a way to iterate if password does not meet length
// tried while which I feel would suit this code best, tried do and else if and for(tried len++ but unsure where to put it)
if (len >= minCharacterLength && len <= maxCharacterLength) { 
    len=alert("Characters meet condition length")
  
 }else{ (len <= minCharacterLength && len >= maxCharacterLength)
  len=alert ("Characters do not meet length please enter a number between 10 and 64");
  var len = prompt("Enter a password length between 10 and 64 : ")

}
   
  


//step 3 set up if statements for confirms
//step 4 include count to count arrays and check at least one statement is true

var char = confirm("Would you like to include special characters : ");
//if (char === true)
var lower = confirm("Would you like lowercase characters : ");
//if (lower === "true")
var upper = confirm("Would you like uppercase characters :");
//if (upper === "true")
var number = confirm("Would you like numbers included in your password :");
//if (number === "true")


console.log(len);
console.log(char);
console.log(lower);
console.log(upper);
console.log(number);

//step 3a confirm statement is true add to array
function confirmTrue() {
    arrays = char.confirm(true) = char.push(char)
    arrays = lower.confirm(true) = lower.push(lower)
    arrays = upper.confirm(true) = upper.push(upper)
    arrays = number.confirm(true) = number.push(number)
 return
}
 if (char === false && lower === false && upper === false && number === false) 
  alert("Please select at least one of the following : Special Characters, numbers, uppercase or lowercase ")






//step 1: generate random values from arrays(use mathfloor and math random)

function specialArray(){
     for(i = 0; i <= length; i++)
     return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    

}

function numberArray(){
    for(i = 0; i <= length; i++)
    return numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
}

function lowerArray(){
    for(i = 0; i <= length; i++)
    return lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
}

function upperArray(){
    for(i = 0; i <= length; i++)
    return upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
}

console.log(specialArray(specialCharacters));
console.log(numberArray(numericCharacters));
console.log(lowerArray(lowerCasedCharacters));
console.log(upperArray(upperCasedCharacters));


//step 2 concatenate arrays


const arrays = specialCharacters.concat(upperCasedCharacters, lowerCasedCharacters, numericCharacters);
    

console.log(arrays);



