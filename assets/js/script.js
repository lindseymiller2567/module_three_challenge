// Assignment code here
// Get references to the #generate element
// References the ID 'generate' in the HTML document. Tells the browser to link the 'generate' ID with the variable generateBtn. 
var generateBtn = document.querySelector("#generate");

// all possible characters 
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()"

// Prompts that come up afer clicking on generate password button
function generatePassword() {

  // creates empty string which will be filled with values from the above variables if the answer to each prompt is true 
  var randomCharacters = "";

  // choose length (the answer to this will be used in the for loop at the bottom)
  var length = window.prompt("Please enter the amount of characters you want for your password. Password must be at least 8 characters long, but no longer than 128.");
  if (length < 8 || length > 128) {
    window.alert("Length of password must be 8-128 characters.");
    return null;
  };
  console.log("Length of password: " + length);

  // choose lowercase?
  var passwordLowerCase = window.confirm("Do you want to include lower case letters in your password?");
  if (passwordLowerCase === true) {
    console.log("User choose to include lower case letters");
    randomCharacters += lower;
    console.log("Random Characters: " + randomCharacters);
  };

  // choose uppercase?
  var passwordUpperCase = window.confirm("Do you want to include upper case letters in your password?");
  if (passwordUpperCase === true) {
    console.log("User choose to include upper case letters");
    randomCharacters += upper;
    console.log("Random Characters: " + randomCharacters);
  };

  // choose numbers?
  var passwordNumeric = window.confirm("Do you want to include numbers in your password?");
  if (passwordNumeric === true) {
    console.log("User choose to include numbers");
    randomCharacters += number;
    console.log("Random Characters: " + randomCharacters);
  };

  // choose special characters?
  var passwordSpecial = window.confirm("Do you want to include special characters in your password?");
  if (passwordSpecial === true) {
    console.log("User choose to include special characters");
    randomCharacters += special;
    console.log("Random Characters: " + randomCharacters);
  };

  // check to make sure user choose at least one of the options
  while (!passwordLowerCase && !passwordUpperCase && !passwordNumeric && !passwordSpecial) {
    window.alert("You must select at least one character type.");
    passwordLowerCase = window.confirm("Do you want to include lower case letters in your password?");
    passwordUpperCase = window.confirm("Do you want to include upper case letters in your password?");
    passwordNumeric = window.confirm("Do you want to include numbers in your password?");
    passwordSpecial = window.confirm("Do you want to include special characters in your password?");
    console.log(passwordLowerCase, passwordUpperCase, passwordNumeric, passwordSpecial)
  };

  // creates empty string which will be filled with a value from the below for loop
  var randomPassword = "";

  // this 'for loop' will access a random item in each characters array by generating a random float from zero to the array's length, and rounding it to it's nearest whole number 
  for (var i = 0; i < length; i++) {
    randomPassword += randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  }
  console.log("The random password is " + randomPassword);

  return randomPassword;

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword()

  // places the randomPassword variable that was created in the generatePassword function into the text area that has an ID of 'password'
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// When "Generate Password" button is clicked, then the writePassword function is ran and a randomly generated password will show up in the box above. 
generateBtn.addEventListener("click", writePassword);

