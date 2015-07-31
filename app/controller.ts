///<reference path="../typings/tsd.d.ts"/>  
 
 import Device from 'Device';
 import House from 'House';
 
  export default class MainController {

    public static $inject = [ "$log" ];
    public myHouse:House = new House();

    constructor(public $log:angular.ILogService) {
      this.$log.info("starting controller");

      var d1 = new Device('Little box', 1, 10, 10, 10);
      this.myHouse.devices.push(d1); 

    }

    addDevice():void {
      var name = 'A device';
      var watts = 10;
      var hoursPerDay = 10;
      var daysPerMonth = 10;
      var d = new Device(name, 1, watts, hoursPerDay, daysPerMonth);
      this.myHouse.devices.push(d);
    }
  } 

