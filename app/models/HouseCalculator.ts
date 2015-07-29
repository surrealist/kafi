import Calculator from 'Calculator';
import Building from 'Building';

export default class HouseCalculator implements Calculator {

  public calculate(b: Building): number {
    return b.totalUnitsPerMonth * 10;
  }

}