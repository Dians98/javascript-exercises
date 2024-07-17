const leapYears = function (year) {


    if (isDivisibleByHundred(year) && !isDivisibleByFourHundred(year)) {
        return false;
    }

    if (isDivisibleByFour(year)) {
        return true;
    } else {
        return false;
    }
};

function isDivisibleByFour(year) {
    return year % 4 == 0 ? true : false;
}

function isDivisibleByHundred(year) {
    return year % 100 == 0 ? true : false;
}

function isDivisibleByFourHundred(year) {
    return year % 400 == 0 ? true : false;
}


console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
