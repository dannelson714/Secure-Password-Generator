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






for (var i=0; i<special_characters.length; i++){
    console.log(special_characters[i])
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Creates the first prompt to determine number of characters, returns that value.
function prompt_1(){
  result = window.prompt("How many characters would you like your password to contain?")
  if (result < 8){
    window.confirm("Password length must be at least 8 characters");
    prompt_1();
  }
  if (result > 128){
    window.confirm("Password length must be at least 128 characters");
    prompt_1();
  }
  if (isNaN(result)){
    window.confirm("Character length must be a number!");
    prompt_1();
  }
  return result;
}


i=prompt_1()
console.log(i)

//Asks whether to include lowercase letters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_2(){
  return window.confirm("Click OK to confirm including lowercase letters")
}

console.log(prompt_2())

if (prompt_2){
  var character_set=[]
  character_set.push(lower_case)
}

console.log(character_set)
//Asks whether to include uppercase letters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_3(){
  return window.confirm("Click OK to confirm including uppercase letters")
}

//Asks whether to include numerics 0-9. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_4(){
  return window.confirm("Click OK to confirm including numerics 0-9")
}

//Asks whether to include special characters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_5(){
  return window.confirm("Click OK to confirm including special characters")
}

//Function to get a random number (source: MDM)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function check_password(intended_password){
  for (i =0; i<intended_password.length; i++){
    if ((intended_password[i] in special_characters === false) && 
    (intended_password[i] in lower_case === false) &&
    (intended_password[i] in upper_case === false) &&
    (intended_password[i] in numeric === false)){
    return false
    }
  }
}

function generatePassword(){
  var character_set=[];
  var password = "";
  password_length=prompt_1();
  if (prompt_2){
    character_set.push(lower_case);
  }
  if (prompt_3){
    character_set.push(upper_case);
  }
  if (prompt_4){
    character_set.push(numeric);
  }
  if (prompt_5){
    character_set.push(special_characters);
  }
  if (character_set.length == 0){
    window.alert("Must select at least one character type!");
    generatePassword();
  }
  for (var i=0; i<password_length; i++){
    var j = getRandomInt(character_set.length);
    var k = getRandomInt(charcter_set[j].length);
    password = password + character_set[j][k];
  }
//need to formalize the above into a seperate function
  check_password(password)

  return password;
}

//WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

//Follow the video from Monday for step-by-step for completing this. The code above will provide the final linkage to the html and so on.