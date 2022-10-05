// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
