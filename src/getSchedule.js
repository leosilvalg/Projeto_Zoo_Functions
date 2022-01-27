const { species, hours } = require('../data/zoo_data');

function agendaSemana(dia) {
  const animais = species.filter((index) => index.availability.includes(dia)); // Filter vai me retornar o objeto completo
  const animaisArray = animais.map((index) => index.name); // Fiz o map para retornar um unico array de nome de animais
  if (dia === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; // Condição de Monday
  return { officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: animaisArray }; // Objeto de horario e animais dos outros dias
}

// console.log(agendaSemana('Wednesday')); // Consolando dessa forma ele não retorna exatamente da forma esperada, mas retorna alguma coisa rsrs

const objSemana = {
  Tuesday: agendaSemana('Tuesday'),
  Wednesday: agendaSemana('Wednesday'),
  Thursday: agendaSemana('Thursday'),
  Friday: agendaSemana('Friday'),
  Saturday: agendaSemana('Saturday'),
  Sunday: agendaSemana('Sunday'),
  Monday: agendaSemana('Monday'),
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return objSemana;
  if (scheduleTarget === 'Monday') return { [scheduleTarget]: Object.values(objSemana)[6] };
  if (scheduleTarget !== species.name
  || scheduleTarget !== Object.keys(objSemana)) return objSemana;
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
