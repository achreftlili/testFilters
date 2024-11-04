let { data } = require('./data');

/**
 *  Filters animals by a given name pattern within a nested data structure.
 * 
 * @param {Array} data - An array of country objects. 
 * @param {string} pattern - A string pattern to search for in each animal's name.
 * 
 * @returns {Array} A filtered array of country objects.
 */
function filterAnimalsByName(data, pattern) {
  const regex = new RegExp(pattern);
  return data.map(country => ({
    name: country.name,
    people: country.people
      .map(person => ({
        name: person.name,
        animals: person.animals.filter(animal => regex.test(animal.name))
      }))
      .filter(person => person.animals.length > 0)
  })).filter(country => country.people.length > 0);
}

/**
 * Counts the number of animals each person has within a nested data structure
 * 
 * @param {Array} data - An array of country objects. 
 * @returns {Array} An array of country objects with the count indicator.
 */
function countNumberOfAnimalsPerPerson(data) {
  return data.map(country => ({
    name: country.name,
    people: country.people.map(person => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals
    }))
  }));
}

//Get Argument list
const args = process.argv.slice(2);

/**
 * We filter the list of animals 
 */
if (filterArgument = args.find(arg => arg.startsWith('--filter='))) {
  const pattern = filterArgument.split('=')[1];
  data = filterAnimalsByName(data, pattern);
}

/**
 * We Add the count indicator of the animals per person
 */
if (countArgument = args.includes('--count')) {
  data = countNumberOfAnimalsPerPerson(data);
}

console.log(JSON.stringify(data, null, 2));

module.exports = { filterAnimalsByName, countNumberOfAnimalsPerPerson };
