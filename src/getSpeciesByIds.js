const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return []; // Retornando o array vazio.
  return data.species.filter((specie) => ids.includes(specie.id)); // Filtrando os Ids de species com base no id passado
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); // Testando a função rsrs

module.exports = getSpeciesByIds;
