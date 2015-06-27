// models.ts
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Demo;
(function (Demo) {
    var Device = (function () {
        function Device(name, quantity, watts, hoursPerDay, daysPerMonth) {
            if (name === void 0) { name = 'Device'; }
            if (quantity === void 0) { quantity = 1; }
            if (watts === void 0) { watts = 100; }
            if (hoursPerDay === void 0) { hoursPerDay = 1.0; }
            if (daysPerMonth === void 0) { daysPerMonth = 30; }
            this.name = name;
            this.quantity = quantity;
            this.watts = watts;
            this.hoursPerDay = hoursPerDay;
            this.daysPerMonth = daysPerMonth;
            //
        }
        Object.defineProperty(Device.prototype, "unitsPerMonth", {
            get: function () {
                return (this.quantity * this.watts * this.hoursPerDay * this.daysPerMonth) / 1000.0;
            },
            enumerable: true,
            configurable: true
        });
        return Device;
    })();
    Demo.Device = Device;
    // abstract class
    var Building = (function () {
        function Building(name) {
            if (name === void 0) { name = 'Building'; }
            this.name = name;
            this.devices = [];
        }
        Object.defineProperty(Building.prototype, "calculator", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Building.prototype, "totalUnitsPerMonth", {
            get: function () {
                var sum = 0.0;
                this.devices.forEach(function (d) { return sum += d.unitsPerMonth; });
                return sum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Building.prototype, "monthlyFee", {
            get: function () {
                if (this.calculator == null)
                    return null;
                return this.calculator.calculate(this);
            },
            enumerable: true,
            configurable: true
        });
        return Building;
    })();
    Demo.Building = Building;
    var House = (function (_super) {
        __extends(House, _super);
        function House(name) {
            if (name === void 0) { name = 'House'; }
            _super.call(this, name);
            this.name = name;
        }
        Object.defineProperty(House.prototype, "calculator", {
            get: function () {
                return new HouseCalculator();
            },
            enumerable: true,
            configurable: true
        });
        return House;
    })(Building);
    Demo.House = House;
    var HouseCalculator = (function () {
        function HouseCalculator() {
        }
        HouseCalculator.prototype.calculate = function (b) {
            return b.totalUnitsPerMonth * 10;
        };
        return HouseCalculator;
    })();
    Demo.HouseCalculator = HouseCalculator;
})(Demo || (Demo = {}));
//# sourceMappingURL=models.js.map