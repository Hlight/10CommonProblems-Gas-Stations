const { printInputs } = require("../helpers");

function findStartingGasStation_Recursive(gas, cost) {
    console.log(`
=================================
Gas Station (restart from i+1) 
Recursive
=================================
`)
  printInputs(gas, cost);
  let n = gas.length;
  let candidate = 0;
  const checkedCandidates = [];
  const searchCandidate = (candidate) => {
    let remainingGas = 0;
    let started = false;
    let i = candidate;

    if (checkedCandidates.includes(candidate)) 
      return ["None found: ", -1 ];
    
    while (i !== candidate || !started) {
      started = true;
      remainingGas += gas[i] - cost[i];

      if (remainingGas < 0) {    
        checkedCandidates.push(candidate)
        candidate = i+1;
        remainingGas = 0;
        return (candidate >= n) ? 
          ["None found: ", -1 ] : 
          searchCandidate(candidate);
      }

      i=(i+1)%n;
    }
    return ["Start gas station index: ", candidate];
  }
  return searchCandidate(candidate)
}

module.exports = findStartingGasStation_Recursive;
