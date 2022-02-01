const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((index) => index.age < 18).length;
  const adult = entrants.filter((index) => index.age >= 18 && index.age < 50).length;
  const senior = entrants.filter((index) => index.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0; // Refatorei depois de ler a postagem https://stackoverflow.com/questions/40615844/why-undefined-is-not-equal-to-zero-in-javascript
  const quantidade = countEntrants(entrants);
  const totalChild = quantidade.child * data.prices.child;
  const totalAdult = quantidade.adult * data.prices.adult;
  const totalSenior = quantidade.senior * data.prices.senior;
  const somaTotal = totalAdult + totalChild + totalSenior;
  return somaTotal;
};

const entrants = [{ age: 6 }, { age: 20 }, { age: 50 }, { age: 10 }];

console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
