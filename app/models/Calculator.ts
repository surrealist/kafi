import Building = require("Building");

interface Calculator {
  calculate(building: Building): number;
}

export = Calculator;