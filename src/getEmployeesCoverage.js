const data = require('../data/zoo_data');

function employee(pessoa) {
  return data.employees.find((index) => pessoa.name === index.firstName
  || pessoa.name === index.lastName || pessoa.id === index.id);
}

// function especie(employe) {
//   return employe.responsibleFor.map((id) => data.species.find((specie) =>
//     specie.id === id));
// }

function getEmployeesCoverage(pessoa) {
  if (!pessoa) return;
  return {
    id: employee(pessoa).id,
    fullName: `${employee(pessoa).firstName} ${employee(pessoa).lastName}`,
    // species:
    // locations:
  };
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
