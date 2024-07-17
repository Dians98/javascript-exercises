const removeFromArray = function (array, ...args) {
    let len = array.length;

    array = removeDuplicateData(array);

    args.forEach(arg => {
        if (array.includes(arg)) {
            let indexOf = array.indexOf(arg);
            array.splice(indexOf, 1);
        }
    });
    return array;
};

//Supprime les doublons d'abord
function removeDuplicateData(data){
    return data.filter((value, index) => data.indexOf(value) === index);
}


//removeFromArray([1, 2, 2, 3], 2);
// Do not edit below this line
module.exports = removeFromArray;
