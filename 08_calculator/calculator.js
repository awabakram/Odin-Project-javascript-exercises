const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(element => {
    total = total * element;
  });
  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(inputNum) {
	if (inputNum == 0 || inputNum == 1)
  {
    return 1;
  }
  else
  {
    return inputNum * factorial(inputNum-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
