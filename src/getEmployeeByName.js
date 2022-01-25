const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const achaFuncionario = data.employees.find((nome) => employeeName.includes(nome.firstName) // Lembrar que o 'nome' é um parametro criado que irá atuar dentro de employess. Usei o includes para fazer a comparação.
  || employeeName.includes(nome.lastName));
  return achaFuncionario;
}
console.log(getEmployeeByName('bethea')); // Obs: Lembrar que o includes é case sensitive
module.exports = getEmployeeByName;
