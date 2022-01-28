const data = require('../data/zoo_data');

function employee(pessoa) {
  const nomeID = data.employees.find((index) => pessoa.name === index.firstName // Pelo find, vou ter como retorno o objeto com base no primeiro elemento que satisfaça as condições passadas
  || pessoa.name === index.lastName || pessoa.id === index.id);
  const objetoFuncionario = {
    id: nomeID.id,
    fullName: `${nomeID.firstName} ${nomeID.lastName}`,
    species: ((nomeID.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id)))).map((element) => element.name),
    locations: ((nomeID.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id)))).map((element) => element.location),
  };
  return objetoFuncionario;
}

function todos() {
  const todosFuncionarios = data.employees.map((index) => ({
    id: index.id,
    fullName: `${index.firstName} ${index.lastName}`,
    species: ((index.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id)))).map((element) => element.name),
    locations: ((index.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id)))).map((element) => element.location),
  }));
  return todosFuncionarios;
}

function validacao(pessoa) {
  const test = data.employees.find((index) => pessoa.name === index.firstName // Pelo find, vou ter como retorno o objeto com base no primeiro elemento que satisfaça as condições passadas
  || pessoa.name === index.lastName || pessoa.id === index.id);
  return test;
}

function getEmployeesCoverage(parametro) {
  if (parametro) {
    if (validacao(parametro)) return employee(parametro);
    throw new Error('Informações inválidas');
  }
  if (!parametro) return todos();
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
