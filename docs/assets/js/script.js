// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  var length = getLength();
  var lower = getLower();
  var upper = getUpper();
  var symbol = getSymbol();
  
  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + getCharacter() 
  }
  
  
    

  // var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getCharacter() {
  //Check to what was selected Yes
  
  //Randomize Yes statements to pick one if not present Otherwise select at random
  //Go into randomly selected function and return character

}

function getLength() {
  var passwordLength = window.prompt("How many characters would you like your password to be?  Select a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Pease enter a valid response.");
    return getLength();
  }
  return passwordLength;
}

function getLower() {
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  var hasLower = window.prompt('Would you like to include Lower Case characters. Type "YES" or "NO".');
  hasLower = hasLower.toLowerCase();
  if (hasLower === "yes" || hasLower === "no") {
    return hasLower;
  }
  window.alert("Please enter a valid response."); 
  return getLower();
}

function getUpper() {
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  var hasUpper = window.prompt('Would you like to include Upper Case characters. Type "YES" or "NO".');
  hasUpper = hasUpper.toLowerCase();
  if (hasUpper === "yes" || hasUpper === "no") {
    return hasUpper;
  }
  window.alert("Please enter a valid response."); 
  return getUpper();
}

function getSymbol() {
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  var hasSymbol = window.prompt('Would you like to include Symbol characters. Type "YES" or "NO".');
  hasSymbol = hasSymbol.toLowerCase();
  if (hasSymbol === "yes" || hasSymbol === "no") {
    return hasSymbol;
  }
  window.alert("Please enter a valid response."); 
  return getSymbol();
}


