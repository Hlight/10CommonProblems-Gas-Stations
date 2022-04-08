const { printInputs } = require("../helpers");

/*
  If a station 'start' reaches a negative amount at the index 'i', then all stations between 'start' and 'i' inclusive are invalid, we start again from 'i+1'

i.e.
  'gas[start] < cost[start]' =>
  the car directly stops, no other stations
  are involved.
  ...but...
  'gas[start] >= cost[start]' =>
  if the car reaches a negative amount of gas 
  at the index 'i', all stations between 'start'
  and 'i' inclusive are invalid.
*/

function findStartingGasStation_OneLoop(gas, cost) {
  console.log(`
==============================
Gas Station (restart from i+1)
One Loop
==============================
`)
  printInputs(gas, cost);
  let remainingGas = 0;
  let candidate = 0;
  let prevRemainingGas = 0;
  for (let i=0; i<gas.length; i++) {
    remainingGas += gas[i] - cost[i];
    if (remainingGas < 0) {
      candidate = i+1;
      prevRemainingGas += remainingGas;
      remainingGas = 0;
    }
  }

  // Adding up prev gas and cost (not needed if update prevRemainingGas above)
  // const sumPrevGas = gas
  //   .splice(0, candidate)
  //   .reduce((a,b)=>a+b,0);
  // const sumPrevCost = cost
  //   .splice(0, candidate)
  //   .reduce((a,b)=>a+b,0);
  // const prevRemainingGas = sumPrevGas - sumPrevCost;
  if (
    candidate === gas.length ||
    remainingGas + prevRemainingGas < 0
   ) {
    return ["None found: ", -1];
   } else {
    return ["Start gas station index: ", candidate];
   }
}

module.exports = findStartingGasStation_OneLoop;
