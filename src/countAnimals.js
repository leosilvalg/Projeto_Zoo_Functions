const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const obj = {};
  if (animal === undefined) {
    species.forEach((index) => {
      obj[index.name] = index.residents.length;
    });
    return obj;
  }

  if (animal.sex === undefined) {
    const especie = data.species.find((index) => index.name === animal.specie);
    return especie.residents.length;
  }

  const especie = data.species.find((index) => index.name === animal.specie);
  const sexoTotal = especie.residents.filter((index) => index.sex === animal.sex);
  return sexoTotal.length;
};

console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
