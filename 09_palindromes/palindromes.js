const palindromes = function (inputString) 
{
    inputString = inputString.replaceAll(" ", "");
    inputString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    inputString = inputString.toLowerCase()
    return inputString.split("").reverse().join("") == inputString;

};

// Do not edit below this line
module.exports = palindromes;
