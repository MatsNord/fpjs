import {expect} from 'chai';

describe("filter map and reduce - counting values from objects", () => {
	/**
	 * This is a nonfunctional function, it loops and assigns and accesses state.
	 * 
	 */
	function nonFunctionalProgram(){
		var people = [ 
				{name: "Carol", height: 150}, 
				{name: "Vick"}, 
				{name: "Felix", height: 175}
		];

		var heightTotal = 0;
		var heightCount = 0;
		var averageHeight = 0;

		for (var person of people) {
			if (!!person.height){
				heightTotal += person.height;
				heightCount +=1;
			}
		}
		if (heightCount > 0) {
			averageHeight = heightTotal / heightCount;
		}
		return averageHeight;
	}

	/**
	 * This is a functional solution. It should calc as good as the nonfunctional solution
	 */
	const people = [ 
		{name: "Carol", height: 150}, 
		{name: "Vick"}, 
		{name: "Felix", height: 175}
	];
	

	it("should calc the average height of people", () =>  {
		let averageHeight = 0;
		const heights = people.filter( person => !!person.height ).map( person => person.height);	
		
		if (heights.length > 0 ) {
			averageHeight = (heights.reduce( (acc, height) => acc + height, 0 ) / heights.length);
		}

		expect( nonFunctionalProgram() ).eql( averageHeight );
	});

	/**
	 * You can choose to create small functions for filter, map and reducer
	 */

	const heightFiler = person => !!person.height;
	const heightMapper = person => person.height;
	const averageHeightReducer = ( total, height ) => total + height;

	it("should calc the average height of people - 2", () =>  {
		let averageHeight = 0;
		const heights = people.filter( heightFiler ).map( heightMapper );	
		
		if (heights.length > 0 ) {
			averageHeight = heights.reduce( averageHeightReducer, 0 ) / heights.length;
		}
		expect( nonFunctionalProgram() ).eql( averageHeight );
	});
});