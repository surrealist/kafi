/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import HouseCalc from '../app/HouseCalculator';

describe('HouseCalculator', function() {

  describe('For <= 150 upm houses', function() {

    var calc: HouseCalc;

    beforeEach(() => {
      calc = new HouseCalc();
    });

    it('first 15 units: 1 unit', function() {
      var fee = calc.calculateFromUnitsPerMonth(1);
      expect(fee).to.equal(1.86);
    })

    it('first 15 units: 10 units', function() {
      var fee = calc.calculateFromUnitsPerMonth(10);
      expect(fee).to.equal(18.63); 
    })
    
    it('first 15 units: 15 units', function() {
      var fee = calc.calculateFromUnitsPerMonth(15);
      expect(fee).to.equal(27.95); 
    })


    it('20 units', function() { 
      var fee = calc.calculateFromUnitsPerMonth(20);
      expect(fee).to.equal(40.46); 
    });
      
    it('25 units', function() { 
      var fee = calc.calculateFromUnitsPerMonth(25);
      expect(fee).to.equal(52.98); 
    });

  });
  
  describe('For > 150 upm houses', function() {

  });

});
