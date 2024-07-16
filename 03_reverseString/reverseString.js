const reverseString = function(stringToReverse) {
    let reversedStringArray = [];

    let len = stringToReverse.length;
    console.log("Len : " + len);

    for (let i = len-1 ; i >= 0 ; i--)
    {
        reversedStringArray.push(stringToReverse[i]);
    }

    return reversedStringArray.join('');
};

//reverseString("diano");
// Do not edit below this line
module.exports = reverseString;
