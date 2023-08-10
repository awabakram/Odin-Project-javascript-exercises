const findTheOldest = function(array) 
{
    let maxAge = 0;
    let maxAgeIndex = 0;
    let yearOfDeath;
    array.forEach(element => {
        if(element.yearOfDeath == null)
        {
            yearOfDeath = new Date().getFullYear();
        }
        else{
            yearOfDeath = element.yearOfDeath
        }

        let currentAge = yearOfDeath - element.yearOfBirth;
        if(currentAge>maxAge)
        {
            maxAge = currentAge;
            maxAgeIndex = array.indexOf(element);
        }
    });

    return array[maxAgeIndex];

};



// Do not edit below this line
module.exports = findTheOldest;
