const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Tinha feito a linha a baixo separada em duas partes, decidi juntar as duas, puxando direto {species} no lugar de data.
  return species.find((test) => test.name === animal).residents.every((test) => test.age >= age);
}

module.exports = getAnimalsOlderThan;
