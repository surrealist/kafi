declare module Demo {
    class Device {
        name: string;
        quantity: number;
        watts: number;
        hoursPerDay: number;
        daysPerMonth: number;
        constructor(name?: string, quantity?: number, watts?: number, hoursPerDay?: number, daysPerMonth?: number);
        unitsPerMonth: number;
    }
    class Building {
        name: string;
        devices: Array<Device>;
        constructor(name?: string);
        protected calculator: any;
        totalUnitsPerMonth: number;
        monthlyFee: number;
    }
    class House extends Building {
        name: string;
        constructor(name?: string);
        calculator: HouseCalculator;
    }
    interface Calculator {
        calculate(building: Building): number;
    }
    class HouseCalculator implements Calculator {
        calculate(b: Building): number;
    }
}
