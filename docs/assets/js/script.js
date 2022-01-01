// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //ask length
  var passwordLength = window.prompt("How many characters would you like your password to be?  Select a number between 8 and 10.");
  if (passwordLength == 8) {
    window.alert("Yo, this is 8 now");
  }
  else if (passwordLength == 9) {
    window.alert("Yo Yo, this is 9 now");
  }
  else if (passwordLength == 10) {
    window.alert("Yo Yo Yo, this is 10 now");
  }

  else {
    window.alert("Are you fluffing kidding me??  Try again!!!");
  }
  
    

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
