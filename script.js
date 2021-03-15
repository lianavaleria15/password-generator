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
let chosenCharArray = [];
// Create prompt password length
const passwordLength = prompt(
  "How many characters would you want your password to be?"
);
console.log(passwordLength);

//validation password length
if (passwordLength >= 8 && passwordLength <= 128) {
  //create confirm functions for type of character and validate
  const isLowerCase = confirm(
    "Do you want password to include lowercase characters?"
  );
  console.log(isLowerCase);

  const isUpperCase = confirm(
    "Do you want password to include uppercase characters?"
  );
  console.log(isUpperCase);

  const isNumericChar = confirm(
    "Do you want password to include numeric characters?"
  );
  console.log(isNumericChar);

  const isSpecialChar = confirm(
    "Do you want password to include special characters?"
  );
  console.log(isSpecialChar);
}

// Declare function which generates password
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here
  //Create variable to store new array for password characters

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
