const masses = require('./data.json').data;

function reduceFuel(mass) {
  let fuel = parseInt(mass / 3 - 2);
  if (fuel > 0) {
    return fuel + reduceFuel(fuel);
  } else {
    return 0;
  }
}

const result = masses.reduce((accumulator, currentValue) => {
  return accumulator + reduceFuel(currentValue);
}, 0);

console.log(result);
