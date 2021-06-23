//Arrays of password items
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var char = ["!","@","#","$","%","^"]
var number = ["1","2","3","4","5","6","7","8","9"]

//Function to grab all inputs from user
function promptInput() {
  
  //Hello message to user
  window.alert("Welcome to password generator wizard!  You will be selecting length and at least 1 character type, ready to begin?");
  
  //Length of characters
  var charLength = parseInt(window.prompt ("Please enter the length of characters you would like for your password, it must be more than 8 and less than 128"));
  console.log (charLength);
  
  //If # is entered, new prompt and if NaN is put in, error message
  //Boolean for if lowercase is selected or not
  if (charLength = NaN || charLength < 8 || charLength > 128) {
    window.alert ("Error: please enter a number that is between 8 or 128 characters instead.");
    return;
  }
  

  var lowerCaseChoice = window.confirm ("Would you like lowercase characters?");
  // charLength = window.prompt ("Please enter the length of characters you would like for your password, it must be more than 8 and less than 128")
  //TO DO: change this to where it returns to the main question?
  
  
  //Boolean for if uppercase is selected or not
  var upperCaseChoice = window.confirm ("Uppercase?")
  
  //Boolean for if number is selected or not
  var numberChoice = window.confirm ("Number?")
  
  //Boolean for if char is selected or not
  
  var charChoice = window.confirm ("Character?")
  
  //Provide generated password with all inputs
  //If yes to any of the questions above, generate password with selected criteria
  //If no to all questions, reset to main
  
  if (lowerCaseChoice === false && upperCaseChoice === false && numberChoice === false && charChoice === false) {
    window.alert ("Please choose at least one character.")
    return;
  }

  //Creating object to store all prompt inputs from user
  var allChoices = {
    length: charLength,
    lowerCase: lowerCaseChoice,
    upperCase: upperCaseChoice,
    number: numberChoice,
    special: charChoice
  }
  return allChoices;
}


function generatePassword() {
  promptInput();
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);