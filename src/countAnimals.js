const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((index) => {
      obj[index.name] = index.residents.length;
    });
    // const nomes = data.species.map((index) => index.name);
    // const total = data.species.map((index) => index.residents.length);
    // for (let i = 0; i < nomes.length; i += 1) {
    //   obj[nomes[i]] = total[i];
    return obj;
  }
  if (animal.sex === undefined) {
    return species.residents.length;
  }
}

console.log(countAnimals());
module.exports = countAnimals;
