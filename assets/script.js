// Assignment code here



var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"]
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"


function generatePassword() {
  console.log("test");

  //prompt password legnth 8-128 characters
  lengthInput = (window.prompt("Choose Password Length", "Choose between 8-128 characters"));
  console.log(lengthInput);

  if (lengthInput < 8 || lengthInput > 128) {
    window.alert("Choose a password length between 8 and 128");

  } else {
    //confirm if you want lowercase,uppercase,numeric,or specialcharacters,
  } lowercaseInput = (window.prompt("Do you want to use lowercase letters within your password?", "yes or no?"));
  console.log(lowercaseInput);

  if (lowercaseInput !== "yes" && lowercaseInput !== "no") {
    window.alert("Choose yes or no");

  } else {
  }
  uppercaseInput = (window.prompt("Do you want to use uppercase letters within your password?", "yes or no?"));
  console.log(uppercaseInput);

  if (uppercaseInput !== "yes" && uppercaseInput !== "no") {
    window.alert("Choose yes or no");

  } else {
  }

  numberInput = (window.prompt("Do you want to use numbers within your password?", "yes or no?"));
  console.log(numberInput);

  if (numberInput !== "yes" && numberInput !== "no") {
    window.alert("Choose yes or no");

  } else {
  }

  specCharacterInput = (window.prompt("Do you want to use special characters within your password?", "yes or no?"));
  console.log(specCharacterInput);

  if (specCharacterInput !== "yes" && specCharacterInput !== "no") {
    window.alert("Choose yes or no");

  } else {
  }

  //validate input, at least one charater type selected

  if ((lowercaseInput === "no") && (uppercaseInput === "no") && (specCharacterInput === "no") && (numberInput === "no")) {
    window.alert("Choose at least 1 criteria for the characters of your password");


  }
  var tempArr = []

  if (lowercaseInput === 'yes') { tempArr.push(...lowerLetters) }
  if (uppercaseInput === 'yes') { tempArr.push(...upperLetters) }
  if (numberInput === 'yes') { tempArr.push(...numbers) }
  if (specCharacterInput === 'yes') { tempArr.push(...specCharacters) }

  console.log(tempArr);

  var random = Math.floor(Math.random() * tempArr.length);
  console.log(random, tempArr[random]);
  var password = ""

  for (var i = 0; i < lengthInput; i++) {
    var random = Math.floor(Math.random() * tempArr.length);
    password += tempArr[random];
  }

  console.log(password);
  //display password
  return password;


















}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
