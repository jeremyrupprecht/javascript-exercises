function checkIfPersonStillAlive(person) {
    if (!person.hasOwnProperty("yearOfDeath")) {
        person["yearOfDeath"] = new Date().getFullYear();
    }
}

const findTheOldest = (people) => people.reduce((oldestPerson, person) => {
    checkIfPersonStillAlive(person);
    checkIfPersonStillAlive(oldestPerson);
    if ((person.yearOfDeath - person.yearOfBirth) > 
        (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
        return person // becomes the new oldestPerson
    }
    return oldestPerson // otherwise keep the current oldestPerson
}, people[0]);

// (person.yearOfDeath - person.yearOfBirth)

// Do not edit below this line
module.exports = findTheOldest;
