const data = require('../data/zoo_data');

function agendaSemana(dia) {
  const animais = data.species.filter((index) => index.availability.includes(dia));
  const animaisNome = animais.map((index) => index.name);
  return animaisNome;
}

console.log(agendaSemana('Wednesday'));

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
