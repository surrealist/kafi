
export default class Device {

  constructor(public name: string = 'Device',
    public quantity: number = 1,
    public watts: number = 100,
    public hoursPerDay: number = 1.0,
    public daysPerMonth: number = 30) {
		  //
  }

  public get unitsPerMonth(): number {
    return (this.quantity * this.watts
      * this.hoursPerDay * this.daysPerMonth)
      / 1000.0;
  }
}