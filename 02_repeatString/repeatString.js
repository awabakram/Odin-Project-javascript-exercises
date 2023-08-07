const repeatString = function(inputString, noOfTimes) {
    if(noOfTimes < 0)
    {
        return "ERROR";
    }
    let newString = "";
    for(let i = 0; i < noOfTimes; i++)
    {
        newString += inputString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
