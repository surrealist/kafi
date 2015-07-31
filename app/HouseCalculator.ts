import Calculator from './Calculator';
import Building from './Building';

export default class HouseCalculator implements Calculator {

  public calculate(b: Building): number {
    return this.calculateFromUnitsPerMonth(b.totalUnitsPerMonth);
  }

  public calculateFromUnitsPerMonth(unitsPerMonth: number): number {
    var amount = 0.0;

    if (unitsPerMonth <= 150.0) {
      var rng = this.calculateRange(unitsPerMonth, 400, 3.9361);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 150, 3.7362);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 100, 3.2315);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 35, 3.1381);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 25, 2.7549);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 15, 2.5026);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 0, 1.8632);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

    } else {
      var rng = this.calculateRange(unitsPerMonth, 400, 3.9361);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 150, 3.7362);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

      rng = this.calculateRange(unitsPerMonth, 0, 2.7628);
      unitsPerMonth = rng.unitsPerMonth;
      amount += rng.amount;

    }
    return Math.round(amount * 100.0) / 100.0;
  }

  private calculateRange(units: number,
    lowerBound: number,
    bahtPerUnit: number) {
    if (units > lowerBound) {
      var x = units - lowerBound;
      units -= x;
      var amount = x * bahtPerUnit;
      return {
        unitsPerMonth: units,
        amount: Math.round(amount * 100.0) / 100.0
      };
    }
    return {
      unitsPerMonth: units,
      amount: 0
    };
  }
}