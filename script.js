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

// validation criteria for at least one of the characters type
// if (!isLowerCase && !isUpperCase && !isNumericChar && !isSpecialChar) {
//   chosenCharArray = lowerCaseArray.concat(
//     upperCaseArray,
//     numericArray,
//     specialCharArray
//   );
//   console.log(chosenCharArray);
// } else if (isLowerCase && !isUpperCase && isNumeric){

// }else if (){}

// else {
alert("At least one type of character should be chosen");
// }

// Declare function which generates password
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Declare new array to contain types of character chosen
  chosenCharArray = [];

  // Create prompt password length
  const passwordLength = prompt(
    "How many characters would you want your password to be?"
  );
  console.log(passwordLength);

  //convert string to a number
  function PasswordNumber(passwordLength, _base) {
    passwordLength = parseInt(passwordLength, 10);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed * 100;
  }
  console.log(PasswordNumber(passwordLength));

  //validation password length
  if (passwordLength >= 8 && passwordLength <= 128) {
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
    alert("Password should have between 8 and 128 characters length");
  }
  //validation type of characters chosen
  if (isLowerCase) {
    chosenCharArray = lowerCaseArray;
  }

  // Return our created password
  else return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
