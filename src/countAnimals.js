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
    const especie = data.species.find((index) => animal.specie === index.name); // Demorei um pouco pois estava procurando 'specie' no arquivo data.
    return especie.residents.length;
  }
  const nomeEspecie = data.species.find((index) => animal.specie === index.name); // console.log(animal.specie);
  const sexoTotal = nomeEspecie.residents.filter((index) => index.sex === animal.sex); // Filtrando o sexo dos animais com base em 'animal.sex' console.log(animal.sex);
  return sexoTotal.length; // .leangth para não retornar o array e objs
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
