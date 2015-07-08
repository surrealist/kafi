import Building = require("Building");
import Calculator = require("Calculator");

class HouseCalculator implements Calculator {

  public calculate(b: Building): number {
    return b.totalUnitsPerMonth * 10;
  }

}

export = HouseCalculator;