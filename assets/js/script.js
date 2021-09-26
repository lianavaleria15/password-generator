// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
  // store arrays of character options here
  // prompt user to choose password length
  /* validation for password length, if password length meets criteria 
  add confirm functions for user to pick the type of characters and store into a 
  variable
  */
  // validation at least one type of character was chosen, each answer will be added to an object, if not alert and break
  //  declare a new variable, in which the password will be stored: pick a random array of characters, from which pick a random character and push to the new array
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
