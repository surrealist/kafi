// models.ts

module Demo {


  export class Device {

    constructor(public name:string = 'Device',
                public quantity:number = 1,
                public watts:number = 100,
                public hoursPerDay:number = 1.0,
                public daysPerMonth:number = 30) {
      //
    }

    public get unitsPerMonth():number {
      return (this.quantity * this.watts
        * this.hoursPerDay * this.daysPerMonth)
        / 1000.0;
    }
  }


  // abstract class
  export class Building {

    public devices: Array<Device>;

    constructor(public name:string = 'Building') {
      this.devices = [];
    }

    protected get calculator() : Calculator {
      return null;
    }

    public get totalUnitsPerMonth() {
      var sum = 0.0;
      this.devices.forEach(d => sum += d.unitsPerMonth);
      return sum;
    }

    public get monthlyFee():number {
      if (this.calculator == null) return null;

      return this.calculator.calculate(this);
    }

  }


  export class House extends Building {

    constructor(public name:string = 'House') {
      super(name);
    }

    get calculator() {
      return new HouseCalculator();
    }

  }


  export interface Calculator {
    calculate(building:Building): number;
  }


  export class HouseCalculator implements Calculator {

    public calculate(b:Building):number {
      return b.totalUnitsPerMonth * 10;
    }

  }

}