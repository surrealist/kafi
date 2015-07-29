/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import HouseCalc from '../app/HouseCalculator';
import House from '../app/House';
import Device from '../app/Device';

describe('HouseCalculator', function() {

	it('should charge 10 baht per unit', function() {
		var calc = new HouseCalc();
		var b = new House('PAH');
		var tv = new Device('TV', 1, 500, 2, 30);
		
		b.devices.push(tv);
		
		var fee = calc.calculate(b);
		expect(fee).to.equal(300);
	});

});
