/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import Device from '../app/Device';

describe('Device', function() {

  describe('unitsPerMonth', function() {

    it("TV should consume 30 units per month", function() {
      var tv = new Device('TV', 1, 500, 2, 30);
      expect(tv.unitsPerMonth).to.equal(30);
    });

    it("Fridge should consume 158.4 units per month", function() {
      var fridge = new Device('Fridge', 1, 220, 24, 30);
      expect(fridge.unitsPerMonth).to.equal(158.4);
    });

    it("Two fridges should consume 316.8 units per month", function() {
      var fridge = new Device('Fridge', 2, 220, 24, 30);
      expect(fridge.unitsPerMonth).to.equal(158.4 * 2);
    });
  });


});
