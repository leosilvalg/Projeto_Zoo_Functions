const data = require('../data/zoo_data');

const isManager = (id) => {
  const gerentes = data.employees.map((gerente) => gerente.managers);
  const array = [].concat(...gerentes); // A const gerentes retornou um array com outros array. Utilizei o spread e concatenei os Ids em um array. Tive a ideia a partir dessa ref https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays?page=1&tab=votes#tab-top
  return array.includes(id);
};

const getRelatedEmployees = (managerId) => {
  const manager = isManager(managerId);
  if (manager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employee = data.employees.filter((index) => index.managers.includes(managerId));
  const array = employee.map((index) => `${index.firstName} ${index.lastName}`);
  return array;
};

module.exports = { isManager, getRelatedEmployees };
