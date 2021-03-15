# Password generator

In this project I had to write a Javascript code that would randomly generate a password for clients. To complete the task, I was given already written HTML and CSS files, which I did not need to modify. I was also given a Javascript boilerplate, which included 2 functions: `writePassword()` and `generatePassword()`. My job was to understand the given problem and implement whiteboarding technique to sketch the steps in building the solution.

## How did I approach the task?

1. I broke down the problem in little components as advised in the homework review session. For this I checked the assignment criteria for password generation and drew my `if` conditions.
2. I build the algorithm logic step-by-step on paper : e.g. prompting for password length, ask confirmation for characters to be included, declare my variables, store in the local memory of the function and then return in the global memory.

## How did I think my Javascript code?

1. I declared 4 arrays in the global memory in which I stored the lowercase, uppercase, special and numeric characters.
2. Inside `generatePassword()` I declared `prompt()`, `confirm()` and `alert()` function to ask what characters the clients wants.
3. Based on step 2, I declared a `if()` function to verify what arrays would be included in the final array from which I generate the function.
4.
