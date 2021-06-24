//Arrays of password items
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbol = ["!","@","#","$","%","^"]
var number = ["0","1","2","3","4","5","6","7","8","9"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Provide generated password with all inputs
//If yes to any of the questions above, generate password with selected criteria
function generatePassword() {
  var userChoice = promptInput();

  //Stop execution of code if user had invalid input
  if (userChoice != null) {

  //adding all approved characters to a new array
  var acceptedCharacters = [];


  //all ifs will go in this section
  //if user has selected all inputs, then randomly generate password including all 
  //if user has selected an uppercase, lowercase, number, special
  if (userChoice.lowerCase === true) {
    acceptedCharacters = acceptedCharacters.concat(lowerCase); 
  }
  if(userChoice.upperCase === true) {
    acceptedCharacters = acceptedCharacters.concat(upperCase);
  }
  if(userChoice.number === true) {
    acceptedCharacters = acceptedCharacters.concat(number);
  }
  if(userChoice.special === true) {
    acceptedCharacters = acceptedCharacters.concat(symbol);
  }

  var passwordGenerationString = randomCharsfromArray(userChoice.characterLength,acceptedCharacters);
  return passwordGenerationString;
}
  else {
    return "Please try again.";
  }
}
//Function to grab all inputs from user
function promptInput() {
  
  //Hello message to user
  window.alert("Welcome to password generator wizard!  You will be selecting length and at least 1 character type, ready to begin?");
  
  //Length of characters
  var charLength = parseInt(window.prompt ("Please enter the length of characters you would like for your password, it must be more than 8 and less than 128"));
  console.log (charLength);
  
  //If # is entered, new prompt and if NaN is put in, error message
  //Boolean for if lowercase is selected or not
  if (charLength === NaN || charLength < 8 || charLength > 128) {
    window.alert ("Error: please enter a number that is between 8 or 128 characters instead.");
    return;
  }
  
  //Boolean for if lowercase is selected or not
  var lowerCaseChoice = window.confirm ("Would you like lowercase characters?");

  //Boolean for if uppercase is selected or not
  var upperCaseChoice = window.confirm ("Would you like uppercase characters?")
  
  //Boolean for if number is selected or not
  var numberChoice = window.confirm ("Would you like numbers?")
  
  //Boolean for if char is selected or not
  var charChoice = window.confirm ("Would you like symbols?")
  
  //If no to all questions, reset to main so that the user must select a symbol
  if (lowerCaseChoice === false && upperCaseChoice === false && numberChoice === false && charChoice === false) {
    window.alert ("Please choose at least one character.")
    return;
  }

  //Creating object to store all prompt inputs from user
  var allChoices = {
    characterLength: charLength,
    lowerCase: lowerCaseChoice,
    upperCase: upperCaseChoice,
    number: numberChoice,
    special: charChoice
  }
  return allChoices;
  
}


//function for Arrays (for loop that gets different indices of the array - want to round down (math.floor))
function randomCharsfromArray(characterLength,acceptedCharacters) {
  var passwordString = [];
  for (var i = 0; i < characterLength; i++) {
    passwordString = passwordString.concat(acceptedCharacters[Math.floor(Math.random()*acceptedCharacters.length)]);
  }
  return passwordString.join('');
}





