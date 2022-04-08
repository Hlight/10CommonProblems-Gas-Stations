const { 
  createTestArrays, 
  printInputs, 
  runFunction 
} = require("./helpers");
const { 
  bruteForce, 
  oneLoop, 
  recursive 
} = require("./functions");
/*
https://youtu.be/Peq4GCPNC5c?t=2240

Given a circular list of gas stations, where we can go from a station 'i' to the station 'i+1', and the last one goes back to the first one, find the index of the station from where we start to be able to traverse all the stations and go back to the initial one without running out of gas.

Note that:
- We can only move forward
- The gas tank starts empty
- 'gas[i]' represents the amount of gas at the station 'i'
- 'cost[i]' represents the cost to go from the station 'i' to the next one
- the answer is guaranteed to be unique
- if the station we're searching for doesn't exist return -1

e.g.
  input:*/
let gas = [1,5,3,3,5,3,1,3,4,5];
let cost = [5,2,2,8,2,4,2,5,1,2];
// comment next line out to use example arrays above
[gas, cost] = createTestArrays(4000);

// brute force
runFunction(bruteForce, gas, cost);

// recursive 
runFunction(recursive, gas, cost);

// one loop
runFunction(oneLoop, gas, cost);
