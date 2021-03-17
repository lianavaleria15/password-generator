// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare characters arrays in global memory
const lowerCaseArray = [
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

const upperCaseArray = [
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

const numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharArray = [
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

// //get random index of options array
//
// // get random character from the random array

// Declare function which generates password
function generatePassword() {
  const passwordArray = [];
  const passwordLength = prompt(
    "How many characters would you want your password to be?"
  );
  console.log(passwordLength);
  const passwordLengthNumber = parseInt(passwordLength, 10);
  console.log(passwordLengthNumber);

  //validation password length and confirm type of characters
  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    // confirm popup box for lowercase characters
    isLowerCase = confirm(
      "Do you want password to include lowercase characters?"
    );
    console.log(isLowerCase);
    //confirm popup box for uppercase characters
    isUpperCase = confirm(
      "Do you want password to include uppercase characters?"
    );
    console.log(isUpperCase);
    //confirm popup box for numeric characters
    isNumericChar = confirm(
      "Do you want password to include numeric characters?"
    );
    console.log(isNumericChar);
    //confirm popup box for special character
    isSpecialChar = confirm(
      "Do you want password to include special characters?"
    );
    console.log(isSpecialChar);
  } else {
    alert("Password should be between 8 and 128 characters");
  }

  // add validation function for character type and forms a new array with type characters chose
  if (isLowerCase) {
    chosenCharArray.push(lowerCaseArray);
  }
  if (isUpperCase) {
    chosenCharArray.push(upperCaseArray);
  }
  if (isNumericChar) {
    chosenCharArray.push(numericArray);
  }
  if (isSpecialChar) {
    chosenCharArray.push(specialCharArray);
  }
  if (!isLowerCase && !isUpperCase && !isNumericChar && !isSpecialChar) {
    alert("At least one type of character should be selected");
  }
  console.log(chosenCharArray);

  for (let i = 0; i < passwordLengthNumber; i++) {
    let randomArray =
      chosenCharArray[Math.floor(Math.random() * chosenCharArray.length)];
    let randomCharacter =
      randomArray[Math.floor(Math.random() * randomArray.length)];

    passwordArray.push(randomCharacter);
  }
  console.log(passwordArray);

  // Create a variable to store our generated password
  const password = passwordArray.join("");

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
