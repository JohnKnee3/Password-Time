// Assignment Code
var generateBtn = document.querySelector("#generate");

//main function that writes the password
function writePassword() {
  //storage of answers from the questions
  
  var length = getLength();
  var lower = getLower();
  var upper = getUpper();
  var symbol = getSymbol();
  

  const typesCount = lower + upper + symbol;

  const typesArr = [{lower}, {upper}, {symbol}, {length}].filter
  (item => Object.values(item)[0]);

  console.log('typesArr: ', typesArr);


  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + getCharacter() 
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


function getCharacter() {

   //Check to what was selected Yes
  var functions = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol];

  //Randomize Yes statements to pick one if not present Otherwise select at random
  var result = functions[Math.floor(Math.random() * functions.length)]();
  return result;  
}

//Go into randomly selected function and return character
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols= '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}

//the call that starts it all
generateBtn.addEventListener("click", writePassword);



