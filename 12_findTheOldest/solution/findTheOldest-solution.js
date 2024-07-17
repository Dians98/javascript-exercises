const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    /**
     * A LA PREMIERE ITERATION OLDEST est l'element[0] et current l'element[1] 
     * le 1er parametre c'est l'accumulator et le deuxième currentValue
     */
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

/* ALTERNATIVE SOLUTION
const getAge = function (person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
  // if the left side has any other value, no assignment happens
  // here, we use ??= to set the current year for our subtraction below only if there is no year of death
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
};
*/

module.exports = findTheOldest;
