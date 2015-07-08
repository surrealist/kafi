import Device = require("Device");
import Calculator = require("Calculator");

// abstract class
class Building {

  public devices: Array<Device>;

  constructor(public name: string = 'Building') {
    this.devices = [];
  }

  protected get calculator(): Calculator {
    return null;
  }

  public get totalDevices() {
    var sum = 0;
    this.devices.forEach(d => sum += (d.quantity));
    return sum;
  }

  public get totalUnitsPerMonth() {
    var sum = 0.0;
    this.devices.forEach(d => sum += d.unitsPerMonth);
    return sum;
  }

  public get monthlyFee(): number {
    if (this.calculator == null) return null;

    return this.calculator.calculate(this);
  }

}

export = Building;