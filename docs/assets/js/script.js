// button variable
var generateBtn = document.querySelector("#generate");

//the button call that starts it all
generateBtn.addEventListener("click", writePassword);

//variables set to false for checking if lower, upper, number and symbol are included. See line 33 and 114 for lower reference
var didRandomLower = false; 
var didRandomUpper = false;
var didRandomSymbol = false;
var didRandomNumber = false;

//main function that writes the password
function writePassword() {
  //storage of answers from the questions
  var length = getLength();
  var lower = getLower();
  var upper = getUpper();
  var symbol = getSymbol();
  var number = getNumber();
  
  
  var password = "";

  if (!lower, !upper, !symbol, !number) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  var functions = createFunctionArray(lower, upper, symbol, number);

  //while loop to see if password was made correctly
  while(true) {
    
    //for loop to make the password
    for (var i = 0; i < length; i++) {
      password = password + getCharacter(functions) 
    } 
    //checking if at least one of every selected character is in the password
    if (((lower && didRandomLower) || !lower) &&
        ((upper && didRandomUpper) || !upper) &&
        ((symbol && didRandomSymbol) || !symbol) && 
        ((number && didRandomNumber) || !number)) {   
      break; 
    } 
    //if not we reset the password string  
    password = "";
    //and set all necessary variables to false so the previous "if" statement will work properly
    didRandomLower = false;
    didRandomUpper = false;
    didRandomSymbol = false;
    didRandomNumber = false;
  } 
  //writes the password in the box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Length Question
function getLength() {
  var passwordLength = window.prompt("How many characters would you like your password to be?  Select a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  window.alert("Pease enter a valid response.");
    return getLength();
  
}
//Lowercase Question
function getLower() {
  var hasLower = window.confirm('Would you like to include Lower Case characters. Click Ok for "YES" and Cancel for "NO".');
      return hasLower;
}
  
//Uppercase question 
function getUpper() {
  var hasUpper = window.confirm('Would you like to include Upper Case characters. Click Ok for "YES" and Cancel for "NO".');
      return hasUpper;
}
  
//Symbol Question
function getSymbol() {
  var hasSymbol = window.confirm('Would you like to include Symbol characters. Click Ok for "YES" and Cancel for "NO".');
      return hasSymbol;
}

//Number Question
function getNumber() {
  var hasNumber = window.confirm('Would you like to include Number characters. Click Ok for "YES" and Cancel for "NO".');
      return hasNumber;
}

//makes an Yes array for the things you decdided to add to your password
function createFunctionArray(lower, upper, symbol, number) {
  const typesCount = lower + upper + symbol + number;


  var functions = new Array(typesCount);

  

  var didLower = didUpper = didSymbol = didNumber = false;

  for (var i = 0; i < typesCount; i++) {
    if (lower && !didLower) {
      functions[i] = getRandomLower;
      didLower = true;
    }     
    else if (upper && !didUpper){
      functions[i] = getRandomUpper;
      didUpper = true;
    }
    else if (symbol && !didSymbol) {
      functions[i] = getRandomSymbol;
      didSymbol = true; 
    } 
    else if (number && !didNumber) {
      functions[i] = getRandomNumber;  
      didNumber = true;
    }
  }
  return functions;     
}
//randomizes the Yes array
function getCharacter(functions) {
  var result = functions[Math.floor(Math.random() * functions.length)]();
  return result;  
}

//random lowercase letter generator
function getRandomLower() {
  didRandomLower = true;
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//random uppercase letter generator
function getRandomUpper() {
  didRandomUpper = true;
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//random number generator
function getRandomNumber() {
  didRandomNumber = true;
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//random symbol generator
function getRandomSymbol() {
  didRandomSymbol = true;
  const symbols= '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}




