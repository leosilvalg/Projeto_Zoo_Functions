const data = require('../data/zoo_data');

function isManager(id) {
  const gerentes = data.employees.map((gerente) => gerente.managers);
  const array = [].concat(...gerentes); // A const gerentes retornou um array com outros array. Utilizei o spread e concatenei os Ids em um array. Tive a ideia a partir dessa ref https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays?page=1&tab=votes#tab-top
  return array.includes(id);
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')); // Testando.

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employee = data.employees.filter((index) => index.managers.includes(managerId)); // Filtrando os employess a partir do Id passado.
  const array = employee.map((index) => `${index.firstName} ${index.lastName}`);
  return array;
}
console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
