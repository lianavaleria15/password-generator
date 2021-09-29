// Assignment Code
var generateBtn = document.querySelector("#generate");

// store arrays of character options here
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
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacterArray = [
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
  //declare an empty array that would store the character type choices
  const characterChoicesObject = {
    isLowerCase: "",
    isUpperCase: "",
    isNumber: "",
    isSpecial: "",
  };

  //   let index = Math.floor(Math.random() *arr.length );
  // let element = arr[index];

  const characterOptionsArray = [];

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

      const isUpperCaseType = confirm(
        "Should the password include uppercase characters?"
      );

      const isNumberType = confirm("Should the password include numbers?");

      const isSpecialCharType = confirm(
        "Should the password include special characters?"
      );

      // validation at least one type of character was chosen
      if (
        !isLowerCaseType &&
        !isUpperCaseType &&
        !isNumberType &&
        !isSpecialCharType
      ) {
        alert("At least one type of character should be selected.");
      } else {
        characterChoicesObject.isLowerCase = isLowerCaseType;
        characterChoicesObject.isUpperCase = isUpperCaseType;
        characterChoicesObject.isNumber = isNumberType;
        characterChoicesObject.isSpecial = isSpecialCharType;
      }
    } else {
      alert("Password length should be a number between 8 and 128.");
    }
    // return characterChoicesObject;
  }

  //here function to generate random password
  const characterChoices = getPasswordCriteria();
  console.log(characterChoices);

  //here check which type of characters were chosen; each choice push into an array of choices
  if (characterChoicesObject.isLowerCase) {
    characterOptionsArray.push(lowerCaseArray);
  }

  if (characterChoicesObject.isUpperCase) {
    characterOptionsArray.push(upperCaseArray);
  }

  if (characterChoicesObject.isNumber) {
    characterOptionsArray.push(numberArray);
  }

  if (characterChoicesObject.isSpecial) {
    characterOptionsArray.push(specialCharacterArray);
  }
  console.log(characterOptionsArray);

  //here pick a random array of characters; then pick a random character and push it to password array variable

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
