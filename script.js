// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","10"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "=" ];
var possibleCharacters = [];
var finalPassword = [];

function generatePassword(){
  var lengthPassword = prompt("What's the length of your password?");
  console.log(lengthPassword);
  if (lengthPassword < 8) {
    alert("Must be greater than 8.");
    return
  }
  if (lengthPassword > 128) {
    alert("Must be less than 128");
    return
  }

  console.log(isNaN(lengthPassword) );

  if (isNaN(lengthPassword)) { 
    alert("Please type a number.")
    return

  }

   
  var upperCase = confirm("Would you like an Uppercase letter?");
  console.log(upperCase);
  if (upperCase === true) {
   possibleCharacters = possibleCharacters.concat(upperCaseArray)
  }
  

  var lowerCase = confirm("Would you like an Lowercase letter?");
  console.log(lowerCase);
  if (lowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCaseArray)
  }

  var number = confirm("Would you like a Number?");
  console.log(numberArray);
  if (number === true) {
    possibleCharacters = possibleCharacters.concat(numberArray)
  }


  var special = confirm("Would you like a Special Character?");
  console.log(specialCharacters);
  if (special === true) {
   possibleCharacters = possibleCharacters.concat(specialCharacters)
  }
 for (var i = 0; i < lengthPassword; i++) {
  var randomIndex = Math.floor(Math.random()*possibleCharacters.length);
  finalPassword.push(possibleCharacters[randomIndex])
 }
 return finalPassword.join("")

  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
