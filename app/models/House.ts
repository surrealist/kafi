import Building from 'Building';
import HouseCalculator from 'HouseCalculator';
 
  export class House extends Building {

    constructor(public name:string = 'My space') {
      super(name);
    }

    get calculator() {
      return new HouseCalculator();
    }

  }