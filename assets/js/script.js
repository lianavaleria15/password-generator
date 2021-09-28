// Assignment Code
var generateBtn = document.querySelector("#generate");

// store arrays of character options here
let lowerCaseArray = [
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

let upperCaseArray = [
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
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacterArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "/",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function generatePassword() {
  const characterChoices = {};
  console.log(characterChoices);
  // prompt user to choose password length and convert the passwordLength string into a number
  const passwordLength = parseInt(
    prompt("How many characters should the password be?")
  );

  /* validation for password length, if password length meets criteria 
  add confirm functions for user to pick the type of characters and store into a 
  variable
  */
  if (passwordLength >= 8 && passwordLength <= 128) {
    //declare variables for each character type choice and assign them a confirm function
    const isLowerCaseType = confirm(
      "Should the password include lowercase characters?"
    );

    const isUpperCaseType = confirm(
      "Should the password include uppercase characters?"
    );

    const isNumberType = confirm("Should the password include numbers?");

    const isSpecialCharType = confirm(
      "Should the password include special characters?"
    );
    // validation at least one type of character was chosen, each answer will be added to an object, if not alert and break
    if (
      !isLowerCaseType &&
      !isUpperCaseType &&
      !isNumberType &&
      !isSpecialCharType
    ) {
      alert("At least one type of character should be selected.");
    } else {
      // add  character choice to an object
    }
  } else {
    alert("Password length should be a number between 8 and 128.");
  }

  //  declare a new variable, in which the password will be stored: pick a random array of characters, from which pick a random character and push to the new array
  //convert the array to a string and display password for user
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
