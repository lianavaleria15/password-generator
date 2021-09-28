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
  const characterChoicesObject = {
    lowercase: "",
    uppercase: "",
    number: "",
    special: "",
  };

  function getPasswordCriteria() {
    // prompt user to choose password length; convert the passwordLength string into a number
    const passwordLength = parseInt(
      prompt("How many characters should the password be?")
    );

    //validate password length; prompt for character choices; store choices in an object
    if (passwordLength >= 8 && passwordLength <= 128) {
      //declare variables for each character type choice and assign them a confirm function
      const isLowerCaseType = confirm(
        "Should the password include lowercase characters?"
      );
      // add variable value to character choices object
      characterChoicesObject.lowercase = isLowerCaseType;

      const isUpperCaseType = confirm(
        "Should the password include uppercase characters?"
      );
      characterChoicesObject.uppercase = isUpperCaseType;

      const isNumberType = confirm("Should the password include numbers?");
      characterChoicesObject.number = isNumberType;

      const isSpecialCharType = confirm(
        "Should the password include special characters?"
      );
      characterChoicesObject.special = isSpecialCharType;

      // validation at least one type of character was chosen
      if (
        !isLowerCaseType &&
        !isUpperCaseType &&
        !isNumberType &&
        !isSpecialCharType
      ) {
        alert("At least one type of character should be selected.");
      }
    } else {
      alert("Password length should be a number between 8 and 128.");
    }
    return characterChoicesObject;
  }
  var characterChoices = getPasswordCriteria();
  console.log(characterChoices);
  //pick a random key from the character choices object
  //assign the value of correspondent array of characters
  //pick a random character from the array and push it to the variable that stores the password
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
