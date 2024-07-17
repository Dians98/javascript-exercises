const findTheOldest = function (person) {
    let currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let oldestIndex;
    /**
     * every se comporte comme un foreach mais il est brisé dès qu'on fait un return false
     */
    person.forEach((element, index) => {
        const hasYearOfDeath = "yearOfDeath" in element;

        let age;
        if (!hasYearOfDeath) {
            age = currentYear - element.yearOfBirth;

        } else {
            age = element.yearOfDeath - element.yearOfBirth;

        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = index;
        }
    });

    return person[oldestIndex];

};
// Do not edit below this line
module.exports = findTheOldest;
