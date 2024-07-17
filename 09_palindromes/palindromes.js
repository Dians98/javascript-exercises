const palindromes = function (string) {
    let array = [];
    let arrayReverse = [];


    for (i = 0; i < string.length; i++) {

        array.push(string[i].toLowerCase());

    }
    for (i = string.length - 1; i >= 0; i--) {
        string[i] = string[i].toLowerCase;
        arrayReverse.push(string[i].toLowerCase());

    }
    filterArray(array);
    filterArray(arrayReverse);
    return (filterArray(array).toString() === filterArray(arrayReverse).toString() ? true : false);

};

function filterArray(array) {
    return array// Enlever les chaînes vides et celles contenant uniquement des espaces
        .map(str => str.replace(/[^\w\s]|_/g, "")) // Enlever les ponctuations
        .map(str => str.trim())
        .filter(str => str.trim() !== '');
}


// Do not edit below this line
module.exports = palindromes;
