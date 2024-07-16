
const repeatString = function(stringToRepeat, numberOfRepetition) {
    if(numberOfRepetition < 0){
        return "ERROR";
    }
    let blankString = "";
    for(let i = 0; i < numberOfRepetition; i++)
    {
        blankString += stringToRepeat;
    }

    return blankString
};

// Do not edit below this line
module.exports = repeatString;
