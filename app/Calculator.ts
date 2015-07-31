import Building from './Building';

interface Calculator {
    calculate(building: Building): number;
    calculateFromUnitsPerMonth(unitsPerMonth: number): number;
}

export default Calculator;