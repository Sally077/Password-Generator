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
var len
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
   
  


//step 3 set up if statements for confirms (now displays if true)


var char = confirm("Would you like to include special characters : ");
if (char === true)
console.log(specialCharacters);
var lower = confirm("Would you like lowercase characters : ");
if (lower === true)
console.log(lowerCasedCharacters);
var upper = confirm("Would you like uppercase characters :");
if (upper === true)
console.log(upperCasedCharacters);
var number = confirm("Would you like numbers included in your password :");
if (number === true)
console.log(numericCharacters);


console.log(len);
console.log(char);
console.log(lower);
console.log(upper);
console.log(number);

//step 3a confirm statement is true add to array (not functioning)
// function confirmTrue() {
    // specialCharacters = char.confirm(true).push(specialCharacters)
    // arrays = char.confirm(false) = char.pop()
    // arrays = lower.confirm(true) = lower.push()
    // arrays = lower.confirm(false) = lower.pop()
    // arrays = upper.confirm(true) = upper.push()
    // arrays = upper.confirm(false) = upper.pop()
    // arrays = number.confirm(true) = number.push()
    // arrays = number.confirm(false) = number.pop()
    // console.log(specialCharacters);
//  return confirmTrue()
 
 
//  }

//step 3b if no confirms selected alert to user
 if (char === false && lower === false && upper === false && number === false) 
  alert("Please select at least one of the following : Special Characters, numbers, uppercase or lowercase ")
// attempt to remove arrays if not true
//   if (char === false)
//   console.log(specialCharacters.length = 0);
//   specialCharacters;

//   if (lower === false)
//   console.log(lowerCasedCharacters.length = 0);
//   lowerCasedCharacters;

//   if (upper === false)
//   console.log(upperCasedCharacters.length = 0)
//   upperCasedCharacters;

//   if (number === false)
//   console.log(numericCharacters.length = 0)
//   numericCharacters;






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


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// step 4 include count to count arrays and check at least one statement is true ??
//initialise password variable


const randomfunc = {
    lower: lowerCasedCharacters,
    upper: upperCasedCharacters,
    number: numericCharacters,
    char: specialCharacters
};


//not working correctly needs fixing
function genPass(lower, upper, number, char, length) {
    var genpass = "" ;

    //attempt to filter arrays to select only a series of values to generate password
    const typesCount = [{lower} + {upper} + {number} + {char}].filter
    (item => Object.values(item)[0]);

    console.log("typesCount: ", typesCount);

    console.log("typesArr: ", typesArr);
    
}



// Test Data 
//attempt to count arrays, filter data from len then concat arrays

arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = ["!", "£", "$", "%", "^", "&", "*", "(", ")"]

function special() {
    for(i = 0; i <= length; i++)
    return arr2[Math.floor(Math.random() * arr2.length)]
}



function Num() {
    for(i = 0; i <= length; i++)
    return arr1[Math.floor(Math.random() * arr1.length)]
}
console.log(Num(arr1));
console.log(special(arr2));

var group = {
    arr1: Num,
    arr2: special
};

console.log(Object.entries(group)); //prints as an array but not details inside the array (perhaps try adding arrays inside?)
//console log to test and see if array will generate values up to the length entered in the prompt
console.log(arr1)
console.log(arr2)
// test to concat arrays then alter them

const catarray = arr1.concat(arr2);

console.log(catarray);



