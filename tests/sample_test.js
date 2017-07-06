const assert = require('chai').assert;
const Employee = require('../sources/main.js');

describe('Employee', () => {
	describe('handles displaying name', () => {
	    it ("displayName should return name", () =>{
	        let employee = new Employee('uche', 87, 2000);
	        assert.equal(employee.displayName(), 'uche');
	    });
	});
})