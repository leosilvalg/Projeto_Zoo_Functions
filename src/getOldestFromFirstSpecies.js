const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const func = data.employees.find((index) => id === index.id).responsibleFor[0];
  return func;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
