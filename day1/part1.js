const masses = require('./data.json').data;

const fuel = masses.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue / 3 - 2);
}, 0);

console.log(fuel);
