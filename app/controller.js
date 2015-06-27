///<reference path="../typings/tsd.d.ts"/>
///<reference path="models.d.ts"/>
// controller.ts
var Demo;
(function (Demo) {
    var MainController = (function () {
        function MainController($log) {
            this.$log = $log;
            this.myHouse = new Demo.House();
            this.$log.info("starting controller");
            var d1 = new Demo.Device('Wireless Speaker', 1, 400, 1, 20);
            this.myHouse.devices.push(d1);
            var d2 = new Demo.Device('Laser Printer', 1, 1600, 1, 10);
            this.myHouse.devices.push(d2);
        }
        MainController.prototype.addDevice = function () {
            var name = "" + chance.first() + "'s wireless speaker";
            var watts = chance.integer({ min: 10, max: 150 }) * 10;
            var hoursPerDay = chance.integer({ min: 1, max: 20 });
            var daysPerMonth = chance.integer({ min: 1, max: 20 });
            var d = new Demo.Device(name, 1, watts, hoursPerDay, daysPerMonth);
            this.myHouse.devices.push(d);
        };
        MainController.$injector = ["$log"];
        return MainController;
    })();
    Demo.MainController = MainController;
})(Demo || (Demo = {}));
angular.module("myApp").controller("MainController", Demo.MainController);
//# sourceMappingURL=controller.js.map