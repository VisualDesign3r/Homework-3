let noCaps = "abcdefghijklmnopqrstuvwxyz";
let upperCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros = "0123456789";
let specialLetters = "!$^&*-=+_?";

var generateBtn = document.querySelector("#generate");

let letterLength = parseInt(prompt("Type desire password length."));

let inputChoices = {};

function promptUser(){
  let howMany = confirm("Would you like numbers?");
  let lowLetters = confirm("Would you like lowercase");
  var upperLetters = confirm("Would you like uppercase characters?");
  var special = confirm("Would you like special characters?");

if (howMany) {
  inputChoices["numeros"] = numeros;
}
if (lowLetters) {
  inputChoices["noCaps"] = noCaps;
}
if (upperLetters) {
  inputChoices["upperCaps"] = upperCaps;
}
if (special) {
  inputChoices["specialLetters"] = specialLetters;
}

}

promptUser();

function writePassword() {
  let password = "";
  let passwordText = document.querySelector("#password");
  

  for (var i = 0; i < letterLength; i++) {
    let passOpt = Object.keys(inputChoices);
    let numChoi = passOpt[Math.floor(Math.random() * passOpt.length)];
    let num = getRandomCharacter(inputChoices[numChoi]);

  password += num;

}
passwordText.value = password;



return password;




}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();

console.log(writePassword);
generateBtn.addEventListener("click", writePassword);


