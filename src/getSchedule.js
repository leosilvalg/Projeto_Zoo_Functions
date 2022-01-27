const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function agendaSemana(dia) {
  const animais = species.filter((index) => index.availability.includes(dia)); // Filter vai me retornar o objeto completo com base no dia da semana passado.
  const animaisDisponiveis = animais.map((index) => index.name); // Fiz o map para retornar um unico array de nome de animais, já com o availability filtrado
  if (dia === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; // Condição de Monday
  return { officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: animaisDisponiveis }; // Objeto de horario e animais dos outros dias
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

const animaisNome = species.map((index) => index.name); // Fiz o map para retornar um unico array de nome de animais
console.log(animaisNome);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return objSemana; // Não passando nada é retornada a agenda completa
  if (Object.keys(hours).some((index) => scheduleTarget === index)) {
    return { [scheduleTarget]: objSemana[scheduleTarget] }; // Com base no dia passado é retornado o respectivo value de objSemana. testes 3 e 4.
  }
  if (animaisNome.some((index) => scheduleTarget === index)) {
    return species.find((index) => index.name === scheduleTarget).availability; // Após a condição de igualdade com base na const animaisNome, é retornado o availability, com base no nome do animal passado. teste 5.
  }
  return objSemana; // Condição para retornar a agenda caso o parametro não seja um animal e um dia. teste 2.
}

console.log(getSchedule('bears'));

module.exports = getSchedule;
