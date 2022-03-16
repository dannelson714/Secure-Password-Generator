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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creates the first prompt to determine number of characters, returns that value.
function prompt_1(){
  result = window.prompt("How many characters would you like your password to contain?");
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

//Asks whether to include lowercase letters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_2(){
  return window.confirm("Click OK to confirm including lowercase letters");
}

console.log(character_set)
//Asks whether to include uppercase letters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_3(){
  return window.confirm("Click OK to confirm including uppercase letters");
}

//Asks whether to include numerics 0-9. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_4(){
  return window.confirm("Click OK to confirm including numerics 0-9");
}

//Asks whether to include special characters. If response is "OK" then will return Boolean.
//Feed a True value into later function.
function prompt_5(){
  return window.confirm("Click OK to confirm including special characters");
}

//Function to get a random number (source: MDM)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Function to check if password includes at least one of each included character type
function check_password(intended_password, list_of_characters){
  for (i =0; i<intended_password.length; i++){
    false_list=[];
    for (j=0; j<list_of_characters.length; j++){
      if (list_of_characters[j].includes(intended_password[i])){
        false_list.push(true);
      }
      else{
        false_list.push(false);
      }
    }
    if (!false_list.include(true)){
      return false;
    }
  }
    return true;
}

//A function to tie together the random number generation and the user inputs to produce
//a password. Returns the password unless the check determines not all the character sets
//were used.
function final_generate(pw_length,char_set,pw){
  for (var i=0; i<pw_length; i++){
    var j = getRandomInt(char_set.length);
    var k = getRandomInt(char_set[j].length);
    pw = pw + char_set[j][k];
  }
  if (check_password(pw,char_set) === false){
    final_generate(pw_length, char_set,pw);
  }
  else{
    return pw;
  }
}

//MAIN function to generate a password.
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
  password = final_generate(password_length, character_set, password);

  return password;
}

