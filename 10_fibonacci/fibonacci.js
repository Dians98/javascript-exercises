const fibonacci = function (number) {

    let fibSeq = [0, 1];

    if (number == 0 || number == 1) {
        return fibSeq[number];
    }
    else if (number < 0) {
        return "OOPS";
    };

    if (typeof (number) == "string" || typeof (number) == "String") {
        number = parseInt(number);
    }

    for (i = 2; i <= number; i++) {
        let FibSeqNew = fibSeq[i - 2] + fibSeq[i - 1];
        fibSeq.push(FibSeqNew);
    }

    return fibSeq[number];
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
