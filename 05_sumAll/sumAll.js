const sumAll = function (a, b) {
    let total = 0

    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if (a > b) {
        let temp = 0;

        temp = a;
        a = b;
        b = temp;

        console.log("a :" + a + " b : " + b);

    }
    for (i = a; i <= b; i++) {
        total += i;
    }

    return total;
};

console.log(sumAll(123, "1"));
// Do not edit below this line
module.exports = sumAll;
