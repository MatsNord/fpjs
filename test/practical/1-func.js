import {expect} from 'chai';

describe("Transforming loops", () =>{

	it("Map returns a new collection transfomed by the function", () => {
		//My function to apply on the collection
		const func = (str) => str.length;

		expect(["Mary", "Isla", "Sam"].map( func ))
		.eql(["Mary", "Isla", "Sam"].map( func ));
	});

	it("Returns the correct value", () => {
		//My function to apply on the collection
		const func = (str) => str.length;

		expect(["Mary", "Isla", "Sam"].map( func ))

		.eql([4,4,3]);
	});

	it("Uses a lambda anonymous function", () => {
		
		expect([4, 4, 3].map( x => x * x ))

		.eql([16, 16, 9]);
	});

	it("Uses a lib function", () => {
		
		expect([16, 16, 9].map( Math.sqrt ))

		.eql([4, 4, 3]);
	});

	it("Uses a curried lib function", () => {
	
		// create a general function that can be curried with exp
		const powX = exp => base => Math.pow(base, exp);
		// curry the general function with exp=2
		const pow2 = powX(2);

		//Now map will use the curried function with exp=2
		expect([4, 4, 3].map( pow2 ))
		.eql([16, 16, 9]);
	});
});