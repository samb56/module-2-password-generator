// Assignment code here



var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"]

function generatePassword() {
  console.log("test");
  // var random = Math.floor(Math.random() * lowerLetters.length);
  // return lowerLetters[random]
  //prompt password legnth 8-128 characters
  lengthInput = (window.prompt("Choose Password Length", "Choose between 8-128 characters"));
  console.log(lengthInput);

  if (lengthInput < 8 || lengthInput > 128) {
    window.alert("Choose a password length between 8 and 128");
    return writePassword()
  } else {
    //confirm if you want lowercase,uppercase,numeric,or specialcharacters,
  } lowercaseInput = (window.prompt("Do you want to use lowercase letters within your password?", "yes or no?"));
  console.log(lowercaseInput);

  if (lowercaseInput !== "yes" && lowercaseInput !== "no") {
    window.alert("Choose yes or no");
    return writePassword()
  } else {
  }
  uppercaseInput = (window.prompt("Do you want to use uppercase letters within your password?", "yes or no?"));
  console.log(uppercaseInput);

  if (uppercaseInput !== "yes" && uppercaseInput !== "no") {
    window.alert("Choose yes or no");
    return writePassword()
  } else {
  }

  numberInput = (window.prompt("Do you want to use numbers within your password?", "yes or no?"));
  console.log(numberInput);

  if (numberInput !== "yes" && numberInput !== "no") {
    window.alert("Choose yes or no");
    return writePassword()
  } else {
  }

  specCharacterInput = (window.prompt("Do you want to use special characters within your password?", "yes or no?"));
  console.log(specCharacterInput);

  if (specCharacterInput !== "yes" && specCharacterInput !== "no") {
    window.alert("Choose yes or no");
    return writePassword()
  } else {
  }

   //validate input, at least one charater type selected

  if ((lowercaseInput === "no") && (uppercaseInput === "no") && (specCharacterInput === "no")) {
    window.alert("Choose at least 1 criteria for the characters of your password");
    return writePassword()

  }
  criteriaArray = [lowercaseInput, uppercaseInput, numberInput, specCharacterInput]
  console.log(criteriaArray[0]);













  
  //display password


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
