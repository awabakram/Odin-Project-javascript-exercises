const fibonacci = function(index) {
    if(index < 1)
    {
        return "OOPS";
    }
    if(index == 1 || index == 2)
    {
        return 1;
    }
    let counter = 2;
    let num1 = 1;
    let num2 = 1;
    
    while(counter < index)
    {
        let temp = num1 + num2;
        num1 = num2;
        num2 = temp;
        counter++;
    }

    return num2;

};

// Do not edit below this line
module.exports = fibonacci;
