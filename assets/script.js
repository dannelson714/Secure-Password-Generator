// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var special_characters=["!",'"',"#","$","%","&","'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var lower_case=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper_case=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric=[0,1,2,3,4,5,6,7,8,9];




function generatePassword(){
    result = window.prompt("message?");
    return result;
}

for (var i=0; i<special_characters.length; i++){
    console.log(special_characters[i])
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//This can be achieved by the following method: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// This input can be verified by a collection of if statements'

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// User gives a yes or no (Two states - True or False - Booleans) and unlocks the corresponding array for each category (to be filled in)

//WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

//Follow the video from Monday for step-by-step for completing this. The code above will provide the final linkage to the html and so on.