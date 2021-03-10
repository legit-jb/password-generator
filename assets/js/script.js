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

  var pwLength = document.querySelector("#pwLength").value;

  //This if loop checks to make sure the password length is between 8 and 128
  if (pwLength < 8 || pwLength > 128) {
    pwLength = alert("Password length is between 8 and 128 characters.");

    return;
  }

  function generatePassword() {
    var returnPassword = "";

    // these if statements will generate at least on character from the criteria selected and add that character set to the pool of characters to be randomly added in the next step
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

    // this while loop fill in the rest of the characters at random from the character pool created in the previous step
    while (i < pwLength) {
      initialChars[i] = charSet.charAt(getRndInteger(0, charSet.length - 1))
      i++;
      console.log(pwLength);
    }

    // now we have an array with the right length and charater types but we preselected some of the characters in a predictable way so we will now randomize the order of the characters in the array using the Fisher Yates method
    for (i = initialChars.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = initialChars[i];
      initialChars[i] = initialChars[j];
      initialChars[j] = k;
    }

    // this turns the array into a String
    returnPassword = initialChars.join("");

    return returnPassword;
  }
  // end generatePassword function

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



}
// end writePassword function

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
