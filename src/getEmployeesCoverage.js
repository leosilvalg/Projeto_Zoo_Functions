const data = require('../data/zoo_data');

function validacao(pessoa) {
  const valida = data.employees.find((index) => pessoa.name === index.firstName
  || pessoa.name === index.lastName || pessoa.id === index.id);
  return valida;
}

function employee(pessoa) {
  const funcValidacao = validacao(pessoa);
  const objetoFuncionario = {
    id: funcValidacao.id,
    fullName: `${funcValidacao.firstName} ${funcValidacao.lastName}`,
    species: ((funcValidacao.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id)))).map((element) => element.name),
    locations: ((funcValidacao.responsibleFor.map((id) => data.species
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

function getEmployeesCoverage(parametro) {
  if (parametro) {
    if (validacao(parametro)) return employee(parametro);
    throw new Error('Informações inválidas');
  }
  if (!parametro) return todos();
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
