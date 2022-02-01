const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  const achaFuncionario = data.employees.find((nome) => employeeName.includes(nome.firstName)
  || employeeName.includes(nome.lastName));
  return achaFuncionario;
};

console.log(getEmployeeByName('Bethea')); // => Lembrar que o includes é case sensitive.
module.exports = getEmployeeByName;
