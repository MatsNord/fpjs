import {expect} from 'chai';

describe("FP", () => {

	/**
	 * Study in functional programming in javascript
	 *
	 */

	describe("Simple", () => {

		/**
		 * A function must always return the same result when feeded with the same
		 * parametes so that f(x) is equal to f(x)
		 * f(x) = x + x
		 * f(2) = 4
		 */
		it("f(x) = y", () => {
			const f = x => x + x;
			const x = 1;
			expect(f(x)).eql(f(x));
			expect(f(x)).eql(2);
		});

		/**
		 * You want to increment x by 1
		 * Yes, there is an operator in javascript x++, but we are avoiding
		 * assignment here. Assignment would mutate and affect the state. 
		 */
		it("increment x", () => {
			const increment = x => x + 1;
			const x = 0;

			expect( increment( x ) ).eql( increment( x ) );
			expect( x ).eql( 0 );

			expect( increment( x ) ).eql( x + 1 );
		} );
	});
	describe("Collections", () => {

		/**
		 * Javascript has functions for iterating collection.
		 * Using the build in function, like map, filter and reduce
		 * you have already come a forward to functional programming
		 * in javascript
		 * 
		 * You can get the lenght af a tring by accessing the property the static property String.length
		 * but map needs a function.
		 * 
		 * Map runs over a collection, like an array, and returns a collection like an array
		 * where the items in the collection have been processed byt the function.
		 * The number of the items in the collection does not change.
		 */

		it("map", () => {
			
			const length = str => str.length;

			const nameLength = list => list.map(length);

			const list = ["Stephanie", "Elina", "Susanne"];

			expect(nameLength(list)).eql(nameLength(list));
			expect(nameLength(list)).eql(["Stephanie".length, "Elina".length, "Susanne".length] );
			expect(nameLength(list)).eql([9, 5, 7]);
		});

		/**
		 * Reduce is a function that accumulates the values in the collections. How the function
		 * applid decides
		 */
		it("reduce", () => {
			const accumulate = ( accumulator, x ) => accumulator + x;

			expect([0, 1, 2, 3, 4].reduce( accumulate )).eql([0, 1, 2, 3, 4].reduce( accumulate ));
			expect([0, 1, 2, 3, 4].reduce( accumulate )).equal( 10 );
		});


		/**
		 * This is an example of something that looks functional, buf fails on shared state.
		 * Creating the matchIs object, using is at reducer, and sharing it between the exection contexts
		 * is a bad idea. matchIs is an object that saves state when it's execute() is called. The flag 'g'
		 * tells it to to that.
		 */
		it.skip("reduce-fails: shared state", () => {
			const qoutes = ["Experience is simply the name we give our mistakes.", 
					"The only thing to do with good advice is to pass it on. It is never of any use to oneself.", 
					"No great artist ever sees things as they really are. If he did, he would cease to be an artist."
			];


			const matchIs = /is/g;
			const isCount = ( accumulator, item ) => accumulator + (matchIs.exec(item) || [] ).length;
			expect( qoutes.reduce( isCount, 0 )).equal( qoutes.reduce( isCount, 0 ));
			expect( qoutes.reduce( isCount, 0 )).equal( 3 ); q
		});

		/**
		 * This is approach works better. The the execution is made by the string, and it is new 
		 * genaral expression created for every match. 
		 */
		it("reduce", () => {
			const qoutes = ["Experience is simply the name we give our mistakes.", 
					"The only thing to do with good advice is to pass it on. It is never of any use to oneself.", 
					"No great artist ever sees things as they really are. If he did, he would cease to be an artist."
			];

			const thingCount = ( accumulator, item ) => accumulator + (item.match(/thing/g) || [] ).length;
			expect( qoutes.reduce( thingCount, 0 )).equal( qoutes.reduce( thingCount, 0 ));
			expect( qoutes.reduce( thingCount, 0 )).equal( 2 );

		});

		/**
		 * Filter is special one, it returns true of false when it's applied
		 * it can be used together wit map and reduce, like
		 * collection.filter(f).map(m).reduce(r);
		 * 
		 */
		it("filter", () => {
			const computer = [
				{"name": "asus", "os": "linux",  "price": "111"}, 
				{"name": "dell", "os": "linux",  "price": "112"},
				{"name": "asus", "os": "win",    "price": "113"},
				{"name": "hp",   "os": "win",    "price": "114"},
				{"name": "Apple", "os": "macos", "price": "115"}
			];
			const myLinuxFilter = x => x.os == "linux";
			expect(computer.filter(myLinuxFilter))
				.eql([ 
					{ name: 'asus', os: 'linux', price: '111' },
					{ name: 'dell', os: 'linux', price: '112' } ]
			);
		});
	});

});