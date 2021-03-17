// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare characters arrays in global memory
lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialCharArray = [
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ")",
  "(",
  "{",
  "}",
  "]",
  "[",
  "~",
  "-",
  "_",
];
let isLowerCase;
let isUpperCase;
let isNumericChar;
let isSpecialChar;
// Declare new array to contain types of character chosen
const chosenCharArray = [];
// Create prompt password length and convert length of password as a string in a number
const PasswordNumber = () => {
  const passwordLength = prompt(
    "How many characters would you want your password to be?"
  );
  console.log(passwordLength);
  return;
};
const passwordLengthNumber = parseInt(passwordLength, 10);
console.log(passwordLengthNumber);

//validation password length and confirm type of characters
if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
  // confirm popup box for lowercase characters
  const isLowerCase = confirm(
    "Do you want password to include lowercase characters?"
  );
  console.log(isLowerCase);
  //confirm popup box for uppercase characters
  const isUpperCase = confirm(
    "Do you want password to include uppercase characters?"
  );
  console.log(isUpperCase);
  //confirm popup box for numeric characters
  const isNumericChar = confirm(
    "Do you want password to include numeric characters?"
  );
  console.log(isNumericChar);
  //confirm popup box for special character
  const isSpecialChar = confirm(
    "Do you want password to include special characters?"
  );
  console.log(isSpecialChar);
} else {
  alert("Password should be between 8 and 128 characters");
}

// add validation function for character type
if (isLowerCase) {
  chosenCharArray.push(lowerCaseArray);
} else if (isUpperCase) {
  chosenCharArray.push(upperCaseArray);
} else if (isNumericChar) {
  chosenCharArray.push(numericArray);
} else if (isSpecialChar) {
  chosenCharArray.push(specialCharArray);
} else {
  alert("At least one type of character should be");
}

// Declare function which generates password
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Return our created password
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
