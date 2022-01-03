// Assignment Code
var generateBtn = document.querySelector("#generate");

//the call that starts it all
generateBtn.addEventListener("click", writePassword);

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
  
  var password = "";

  var functions = createFunctionArray(lower, upper, symbol);
  while(true) {
    for (var i = 0; i < length; i++) {
      password = password + getCharacter(functions) 
    } 
    if (((lower && didRandomLower) || !lower) &&
        ((upper && didRandomUpper) || !upper) &&
        ((symbol && didRandomSymbol) || !symbol) && 
          didRandomNumber)
      break;  
  } 
  
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

function createFunctionArray(lower, upper, symbol) {
  const typesCount = lower + upper + symbol + 1;

  var functions = new Array(typesCount);

  var didLower = didUpper = didSymbol = false;

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
    else 
      functions[i] = getRandomNumber;  
  }
  return functions;     
}

function getCharacter(functions) {
  //Randomize Yes statements to pick one if not present Otherwise select at random
  var result = functions[Math.floor(Math.random() * functions.length)]();
  return result;  
}

//Go into randomly selected function and return character
function getRandomLower() {
  didRandomLower = true;
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  didRandomUpper = true;
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  didRandomNumber = true;
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  didRandomSymbol = true;
  const symbols= '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}




