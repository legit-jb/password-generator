// Assignment Code
var generateBtn = document.querySelector("#generate");

//charsets
letters = "abcdefghijklmnopqrstuvwxyz";
numbers = "0123456789";
special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Random Number function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Prompts the user for the password criteria
  var pwLength = prompt ("How many characters?\n(hint: between 8 and 128)");

  // checks for the length to be between 8 and 128
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt ("Let's try this again.\nHow many characters?\n(HINT: between 8 and 128)");
  }
  
  var pwLowerCase = confirm ("We'll use at least one lowercase letter.\n(hint: OK means your cool with it, CANCEL means nah)");
  var pwUpperCase = confirm ("We'll use at least one uppercase letter.\n(hint: OK means your cool with it, CANCEL means nah)");
  var pwNumber = confirm("We'll use at least one number.\n(hint: OK means your cool with it, CANCEL means nah)")
  var pwSpecial = confirm("We'll use at least one lowercase letter.\n(hint: OK means your cool with it, CANCEL means nah)");
  
  generatePassword();

  //generates the password based on the criteria
  function generatePassword () {
    var returnPassword = "";
    var charSet = "";
    var initialChars = [];
    var i = 0;
    var temp = "";
    //first we genrate at least one of each of the selected criteria
    if (pwLowerCase) {
      initialChars [i]= letters.charAt(getRndInteger(0,25));
      i++;
      charSet += letters;
      console.log(initialChars);
      console.log (charSet);
    }

    if (pwUpperCase) {
      temp = letters.charAt(getRndInteger(0,25));
      initialChars [i]= temp.toUpperCase();
      i++;
      charSet += letters.toUpperCase ();
      console.log(initialChars);
      console.log (charSet);
    }

    if (pwNumber) {
      initialChars [i]= numbers.charAt(getRndInteger(0,9));
      i++;
      charSet += numbers;
      console.log(initialChars);
      console.log(charSet);
    }

    if (pwSpecial) {
      initialChars [i]= special.charAt(getRndInteger(0,30));
      i++;
      charSet += special;
      console.log(initialChars);
      console.log(charSet);
    }

    //now to fill in the rest of the initial pw charset with the rest of the characters
    //each character witll come from a combined pool since we don't need to include at 
    // least one from a criteria anymore although we will still only allow the preselcted criteria to form the pool
    while (i < pwLength) {
      initialChars [i] = charSet.charAt(getRndInteger(0, charSet.length -1))
      i++;
      console.log(initialChars);
    }

    // now we have an array with the right length and charater types but we preselected some of the characters in a predictable way
    // we will now randomize the order of the characters in the array using the Fisher Yates method
    for (i = initialChars.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = initialChars[i];
      initialChars[i] = initialChars[j];
      initialChars[j] = k;
    }
    console.log(initialChars);
    returnPassword = initialChars.join ("");

    console.log (returnPassword);

    return returnPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
