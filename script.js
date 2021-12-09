// Assignment code here

// Prompts:
// length (at least 8 characters and no more than 128)
// lowercase
// uppercase
// numeric
// special characters


// Get references to the #generate element
// References the ID 'generate' in the HTML document. Tells the browser to link the 'generate' ID with the variable generateBtn. 
var generateBtn = document.querySelector("#generate");

// Prompts that come up afer clicking on generate password button
function generatePassword () {
  var passwordLength = window.prompt("Please enter the amount of characters you want for your password. Password must be at least 8 characters long, but no longer than 128.");
  var passwordLowerCase = window.confirm("Do you want to include lower case letters in your password?");
  var passwordUpperCase = window.confirm("Do you want to include upper case letters in your password?");
  var passwordNumeric = window.confirm("Do you want to include numbers in your password?");
  var passwordSpecial = window.confirm("Do you want to include special characters in your password?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When "Generate Password" button is clicked, then the writePassword function is ran and a randomly generated password will show up in the box above. 
generateBtn.addEventListener("click", writePassword);

