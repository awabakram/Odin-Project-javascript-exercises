const convertToCelsius = function(tempFahrenheit) {
  let tempCelcius = (tempFahrenheit - 32) * (5.0/9.0);
  if (tempCelcius % 1 == 0)
  {
    return parseInt(tempCelcius);
  }
  else
  {
    tempCelcius = tempCelcius.toFixed(1);
    return parseFloat(tempCelcius);
  }
  
};

const convertToFahrenheit = function(tempCelcius) {
  let tempFahrenheit = (tempCelcius * (9.0/5.0)) + 32;
  if (tempFahrenheit % 1 == 0)
  {
    return parseInt(tempFahrenheit);
  }
  else
  {
    return parseFloat(tempFahrenheit.toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
