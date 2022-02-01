const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return data.species.filter((specie) => ids.includes(specie.id));
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  '89be95b3-47e4-4c5b-b687-1fabf2afa274'));

module.exports = getSpeciesByIds;
