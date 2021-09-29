# Password Generator

Modified the given starter code to enable employees to generate random passwords based on the criteria they've selected.

## Link to live application

Click [here](https://lianavaleria15.github.io/password-generator/) to view the deployed application.

## Description

In this job ticket I was assigned to create a JavaScript application that would randomly generate a password based on the following criteria:

- password length should be a number between 8 and 128 characters
- users could choose to include 4 types of characters (lowercase, uppercase, number and special characters) - where at least one should be selected

To do so, I created a function called `generatePassword` which would store the user's choice, create a random password and then return to the user.

## Technical steps

1. declared array variables in which I stored the character options (e.g. `lowerCaseArray = ['a', 'b', 'c']`)
2. used `prompt` and `confirm` functions get user data for password length and character choices
3. validated user data, if it didn't meet the criteria, used `alert` functions to prompt the user
4. pushed character type choices into an object and if the key value returned `true`, I pushed each array into a different array
5. used a function to pick a random array and a random character from that array
6. used a `for` loop to iterate through the password length and called the `getRandomArrayAndCharacter` function to generate a random number, which was pushed inside a password array
7. transformed the password array into a string and displayed it for the user

## Screenshots
