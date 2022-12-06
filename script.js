// Assignment Code

var numbers = "0123456789"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = lowerCase.toUpperCase()
var special = "!@#$%^&*"
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function that promts user for password length and that vild length is = or > 8 and < 128 and is a number
function userPasswordLength() {
  var passwordLength = prompt("Chose how long you want your password to be. 8-128 charaters.")
// The while loop checks the user password length
while (passwordLength > 128 || passwordLength < 8) {
  passwordLength = prompt("Chose how long you want your password to be. 8-128 charaters.")
} 
  return passwordLength
}
// funtion that loops thru char. sets and if user wants to include them. vailate that user chosses at least one charater set. Add all selescted chr. sets to string
function userCharaters() {
  var numbers = "0123456789"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = lowerCase.toUpperCase()
  var special = "!@#$%^&*"
  var userNumbers = confirm("Do you want numbers in your password?")
  var userLowerCase = confirm("Do you want lower case charaters?")
  var userUpperCase = confirm("Do you want upper case charaters?")
  var userSpecial = confirm("Do you want special charaters?")
  var showCharaters = ""

  if(userNumbers) {
    showCharaters += numbers
  }
  
  if(userLowerCase) {
    showCharaters += lowerCase
  }

  if(userUpperCase) {
    showCharaters += upperCase
  }

  if(userSpecial) {
    showCharaters += special
  }
  return showCharaters
}
// fuction that randomly selects a char. from the avaliable char. that the user selected. comes from line 26
function charaterGenerator(availableCharaters){
  
  var index = Math.floor(Math.random()*availableCharaters.length)
  return availableCharaters.charAt(index)
}


function generatePassword(){

  var passwordLength = userPasswordLength()
  var showCharaters = userCharaters()

  var password = '';
    for (var i = 0; i < passwordLength; i++) {
      password += charaterGenerator(showCharaters);
    }
    return password;
  }






