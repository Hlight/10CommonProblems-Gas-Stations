const { printInputs } = require("../helpers");
/*
  output: 8
  explanation: (see explanation1.png)

Brute force approach:
  For each station 'i':
    Start traversing from there
    If the car goes back to 'i':
    'i' is the right station, return it
  
*/
function canTraverse(gas, cost, start) {
  let n = gas.length;
  let remainingGas = 0;
  let i = start;
  // console.log("start: ", start)
  let started = false;
  while (i !== start || !started) {
    started = true;
    remainingGas += gas[i] - cost[i];
    // console.log("remainingGas ",remainingGas)
    if (remainingGas < 0) {
      // console.log("remainingGas < 0")
      return false;
    }
    // i = (i === n-1) ? 0 : i+1;
    i = (i+1)%n;// is zero once i+1 === arr.length
    // console.log(remainingGas)
  }
  return true;
}

function gasStation(gas, cost) {
  console.log(`
=========================
Gas Station (brute force)
=========================
`)
  printInputs(gas, cost);
  for (let i=0; i<gas.length; i++) {
    if (canTraverse(gas, cost, i)) {
      return ["Start gas station index: ", i];
    }
  }
  return ["None found: ", -1];
}

module.exports = gasStation;
