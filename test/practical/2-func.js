import {expect} from 'chai';

describe("Reducing collections", () =>{

	it("It's functional", () => {
		//My function to apply on the collection
		const calc = (accumulator, x) => accumulator + x;

		expect([0, 1, 2, 3, 4].reduce( calc ))

		.eql([0, 1, 2, 3, 4].reduce( calc ));
	});

	it("Returns the correct value", () => {
		const calc = (accumulator, x) => accumulator + x;
		expect([0, 1, 2, 3, 4].reduce( calc, 7))
		.equal(17);
	});

	it("It can do weird things", () => {
				
			var list1 = [[0, 1], [2, 3], [4, 5]];
			var list2 = [0, [1, [2, [3, [4, [5]]]]]];

			const f = (acc, val) => acc.concat(
				Array.isArray(val) ? flatten(val) : val
			);

			const flatten = arr => arr.reduce(f, [/* initial value for acc */] );

			expect(flatten(list1)).eql([0, 1, 2, 3, 4, 5]);
			expect(flatten(list2)).eql([0, 1, 2, 3, 4, 5]);
	});
});