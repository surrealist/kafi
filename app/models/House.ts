import Building= require("Building");
import HouseCalculator = require("HouseCalculator");

class House extends Building {

  constructor(public name: string = 'บ้านของฉัน') {
    super(name);
  }

  get calculator() {
    return new HouseCalculator();
  }

}

export = House;