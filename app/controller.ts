///<reference path="../typings/tsd.d.ts"/> 

import House = require("models/House");
import Device = require("models/Device");

module Demo {
  export class MainController {

    public static $inject = [ "$log" ];
    public myHouse:House = new House();

    constructor(public $log:angular.ILogService) {
      this.$log.info("starting controller");

      var d1 = new Device('Wireless Speaker', 1, 400, 1, 20);
      this.myHouse.devices.push(d1);

      var d2 = new Device('Laser Printer', 1, 1600, 1, 10);
      this.myHouse.devices.push(d2);

    }

    addDevice():void {
      var name = `${chance.first()}'s wireless speaker`;
      var watts = chance.integer({min: 10, max: 150}) * 10;
      var hoursPerDay = chance.integer({min: 1, max: 20});
      var daysPerMonth = chance.integer({min: 1, max: 20});
      var d = new Device(name, 1, watts, hoursPerDay, daysPerMonth);
      this.myHouse.devices.push(d);
    }
  }
}

angular.module("myApp")
  .controller("MainController", Demo.MainController);
