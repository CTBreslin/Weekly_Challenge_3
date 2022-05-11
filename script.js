// Assignment code here
function generatePassword () {
  console.log("The button works!");
// 1. Prompt the use for password criteria
//      a. Password Length 8 < 128
//      b. lowercase, uppercase, numbers, special etc.
// 2. Validate the input created by the user.
// 3. Display password.
  return "Password generated fromt the criteria selected";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
