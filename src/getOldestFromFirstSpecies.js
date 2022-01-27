const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const func = data.employees.find((index) => id === index.id).responsibleFor[0];
  const animal = species.find((index) => func.includes(index.id)).residents;
  const maisVelho = animal.sort((a, b) => b.age - a.age)[0];
  return Object.values(maisVelho);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
