function createTestArrays(length) {
  const gasArray = new Array(length);
  const costArray = new Array(length);
  for (let i=0; i<gasArray.length; i++) {
    gasArray[i] = Math.ceil(Math.random() * gasArray.length);
  }
  for (let i=0; i<costArray.length; i++) {
    costArray[i] = 
      Math.ceil(Math.random() * costArray.length);
  }
  return [gasArray,costArray]
}

function printInputs(gas, cost) {
  if (gas.length > 40) {
    console.log("Gas Length: ", gas.length)
    console.log("Cost Length: ", cost.length)    
  } else {
    console.log("Gas: ", gas)
    console.log("Cost: ", cost)
  }
}

function runFunction(func, gas, cost) {
  let start;
  let stop;
  start = Date.now();
  console.log(...func(gas, cost))
  stop = Date.now();
  console.log(
    `Time Taken to execute = ${(stop - start)/1000} seconds`
  );
}

module.exports = {
  createTestArrays, 
  printInputs,
  runFunction
};
