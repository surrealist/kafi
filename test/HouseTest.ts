/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import House from '../app/House';
import Device from '../app/Device';

describe('House', function() {

  describe('totalUnitsPerMonth', function() {

    it("this house should consume 188.4 units per month", function() { 
     
      var tv = new Device('TV', 1, 500, 2, 30);
      var fridge = new Device('Fridge', 1, 220, 24, 30);
    
      var house = new House('A House');
      house.devices.push(tv, fridge);
      
      expect(house.totalUnitsPerMonth).to.equal(188.4);
    });

  });

});
