const reverseString = function(inputString) {

    let returnString = "";
    for (let i = 0; i<inputString.length; i++)
    {
        returnString = inputString[i] + returnString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
