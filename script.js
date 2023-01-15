// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength=0;
var passwordType = [];
var password = "";
var upperorLower = "";
var specialChar = "";
var includeNum= "";

// Write password to the #password input
function writePassword() {
  //prompt up users for selection of the passwor types
  passwordLength = window.prompt("Pick a length for the password(8-128)");
  //if statements to make sure users pick the right selection
  if(passwordLength<8){
    window.alert("Pick a longer password");
    passwordLength = window.prompt("Pick a length for the password(8-128)");
  }else if(passwordLength>128){
    window.alert("Pick a shorter password");
    passwordLength = window.prompt("Pick a length for the password(8-128)");
  }
  upperorLower = window.prompt("include uppercase?(yes or no)");
  if(upperorLower!="yes"&&upperorLower!="no"){
    window.alert("make a valid selection");
    upperorLower = window.prompt("include uppercase?(yes or no)");
  }
  specialChar = window.prompt("include special characters?(yes or no)");
  if(specialChar!="yes"&&specialChar!="no"){
    window.alert("make a valid selection");
    specialChar = window.prompt("include special characters?(yes or no)");
  }
  includeNum = window.prompt("include numbers?(yes or no)");
  if(includeNum!="yes"&&includeNum!="no"){
    window.alert("make a valid selection");
    includeNum = window.prompt("include numbers?(yes or no)");
  }
  //variables for the type of passwords
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetList = alphabet.split("");
  var randomNum = Math.floor(Math.random()*passwordLength);
  var alphabetUpper = alphabet.toUpperCase();
  var bothAlphabet= alphabet+=alphabetUpper;
  var bothAlphabetList = bothAlphabet.split("");
  var bothAlphabetNum = bothAlphabet+="1234567890";
  var bothAlphabetNumList = bothAlphabetNum.split("");
  var bothAlphabetNumSpecial = bothAlphabetNum+=" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var bothAlphabetNumSpecialList = bothAlphabetNumSpecial.split("");
  var bothAlphabetSpecial = bothAlphabet+=" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var bothAlphabetSpecialList = bothAlphabetSpecial.split("");
  var alphabetSpecial = alphabet+=" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var alphabetSpecialList = alphabetSpecial.split("");
  var alphabetNumSpecial = alphabet+="1234567890 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var alphabetNumSpecialList = alphabetNumSpecial.split("");
  var alphabetNum = alphabet+="1234567890";
  var alphabetNumList = alphabetNum.split("");

 //empty list that the password would be appended to
  var emptylist=[];
  //generate password function
  function generatePassword(){
    //if and else statements that dictate what type of password would be created
    if(specialChar==="no"&&includeNum==="no"&&upperorLower==="no"){
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*alphabetList.length);
        emptylist+=alphabetList[randomNum];
      }
    }else if(specialChar==="no"&&includeNum==="no"&&upperorLower==="yes"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*bothAlphabetList.length);
        emptylist+=bothAlphabetList[randomNum];
      }
    }else if(specialChar==="no"&&includeNum==="yes"&&upperorLower==="yes"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*bothAlphabetNumList.length);
        emptylist+=bothAlphabetNumList[randomNum];
      }
    }else if(specialChar==="yes"&&includeNum==="yes"&&upperorLower==="yes"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*bothAlphabetNumSpecialList.length);
        emptylist+=bothAlphabetNumSpecialList[randomNum];
      }
    }else if(specialChar==="yes"&&includeNum==="no"&&upperorLower==="yes"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*bothAlphabetSpecialList.length);
        emptylist+=bothAlphabetSpecialList[randomNum];
      }
    }else if(specialChar==="yes"&&includeNum==="no"&&upperorLower==="no"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*alphabetSpecialList.length);
        emptylist+=alphabetSpecialList[randomNum];
      }
    }else if(specialChar==="yes"&&includeNum==="yes"&&upperorLower==="no"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*alphabetNumSpecialList.length);
        emptylist+=alphabetNumSpecialList[randomNum];
      }
    }else if(specialChar==="no"&&includeNum==="yes"&&upperorLower==="no"){
      
      for(var i=0;i<passwordLength;i++){
        randomNum =Math.floor(Math.random()*alphabetNumList.length);
        emptylist+=alphabetNumList[randomNum];
      }
    }else{
      return "Error try again";
    }
    return emptylist;
  }
  //password
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
