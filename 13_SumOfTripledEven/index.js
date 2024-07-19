const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doTheTask(arr) {
    const filteredArray = arr.filter(isEven);
    console.log(filteredArray);

    const mappedArray = filteredArray.map(tripleEven);
    console.log(mappedArray);

    const reducedArray = mappedArray.reduce(sumTripledEven);

    return reducedArray;
}

console.log(doTheTask(arr));



/**
 * Voici la solution proposée avec l'utilisation des arrows functions
 */
function sumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);
}


/**
    * Retourne toutes les valeurs qui si on divise par deux, ont pour rest 0
    * i-e ceux qui sont even
    */
function isEven(value) {

    return value % 2 === 0
}

/**
 * 
 * @param {*} value 
 * @returns la value * 3
 */
function tripleEven(value) {
    return value * 3;
}


/**
 * 
 * @param {accumulator} acc 
 * @param {initial value} init 
 * @returns acc + init
 */
function sumTripledEven(acc, init) {
    return acc + init;
}