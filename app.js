const { data } = require('./data');

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

function countNumberOfAnimalsPerPerson(data) {
  return data.map(country => ({
    name: country.name,
    people: country.people.map(person => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals
    }))
  }));
}
function displayOutput(data) {
  console.log(JSON.stringify(data, null, 2));
}

const args = process.argv.slice(2);

if (filterArgument = args.find(arg => arg.startsWith('--filter='))) {
  const pattern = filterArgument.split('=')[1];
  const filteredData = filterAnimalsByName(data, pattern);
  displayOutput(filteredData);
} else if (countArgument = args.includes('--count')) {
  const countedData = countNumberOfAnimalsPerPerson(data);
  displayOutput(countedData);
}

module.exports = { filterAnimalsByName, countNumberOfAnimalsPerPerson };
