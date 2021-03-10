// Assignment Code
var generateBtn = document.querySelector("#generate");

//charsets
letters = "abcdefghijklmnopqrstuvwxyz";
numbers = "0123456789";
special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// generate and write password to the #password input
function writePassword() {

  // VARIABLES
  var i = 0;
  var initialChars = [];
  var charSet = "";
 
  
  
  // Random Number function
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // checks for the length to be between 8 and 128
  
  var pwLength = document.querySelector("#pwLength").value;
  
  // while (pwLength < 8 || pwLength > 128) {
  //   pwLength = confirm ("Let's try this again.\nHow many characters?\n(HINT: between 8 and 128)");
  // }
  console.log (pwLength);
  function generatePassword() {
    var returnPassword = "";

    if (document.querySelector("#pwLowerCase").checked) {
      initialChars[i] = letters.charAt(getRndInteger(0, 25));
      i++;
      charSet += letters;
    }

    if (document.querySelector("#pwUpperCase").checked) {
      initialChars[i] = letters.charAt(getRndInteger(0, 25)).toUpperCase();
      i++;
      charSet += letters.toUpperCase();
    }

    if (document.querySelector("#pwNumber").checked) {
      initialChars[i] = numbers.charAt(getRndInteger(0, 9));
      i++;
      charSet += numbers;
    }

    if (document.querySelector("#pwUpperCase").checked) {
      initialChars[i] = special.charAt(getRndInteger(0, 30));
      i++;
      charSet += special;
    }
    //now to fill in the rest of the initial pw charset with the rest of the characters
    //each character will come from a combined pool since we don't need to include at 
    // least one from a criteria anymore although we will still only allow the preselcted criteria to form the pool
    while (i < pwLength) {
      initialChars[i] = charSet.charAt(getRndInteger(0, charSet.length - 1))
      i++;
      console.log(pwLength);
    }

    // now we have an array with the right length and charater types but we preselected some of the characters in a predictable way
    // we will now randomize the order of the characters in the array using the Fisher Yates method
    for (i = initialChars.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = initialChars[i];
      initialChars[i] = initialChars[j];
      initialChars[j] = k;
    }
    returnPassword = initialChars.join("");

    return returnPassword;
  }
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



}
// end writePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
