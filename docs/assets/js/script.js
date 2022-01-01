// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  var length = getLength();
  var lower = getLower();
  var upper = getUpper();
  var symbol = getSymbol();
  

  
  
    

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLength() {
  var passwordLength = window.prompt("How many characters would you like your password to be?  Select a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Pease enter a valid response.");
    return getLength();
  }
  return passwordLength;
}



