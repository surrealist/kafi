import Building from './Building';
import HouseCalculator from './HouseCalculator';

export default class House extends Building {

  constructor(public name: string = 'My space') {
    super(name);
  }

  get calculator() {
    return new HouseCalculator();
  }
  
  public get houseType(): string {
    if (this.totalUnitsPerMonth <= 150) {
      return "1.1";
    } else {
      return "1.2";
    }
  }
  public get monthlyServiceFee(): number {
    if (this.totalUnitsPerMonth <= 150) {
      return 8.19;
    } else {
      return 38.22;
    }
  }

  public get ftPerUnit() { 
    return 0.4961;
  }

  public get ftAmount() {
    return this.round2(this.totalUnitsPerMonth * this.ftPerUnit);
  }
  
  public get baseTotal() { 
    return this.round2(this.monthlyFee + this.monthlyServiceFee + this.ftAmount);
  }
  
  public get vatPercent() {
    return 0.07;
  }
  
  public get vatAmount() { 
    return this.round2(this.baseTotal * this.vatPercent);
  }
  
  public get netTotal() { 
    return this.round2(this.baseTotal + this.vatAmount);  
  }
  
  private round2(amount: number) {
    return Math.round(amount * 100.0) / 100.0;
  }
}


