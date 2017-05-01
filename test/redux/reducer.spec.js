import {expect} from 'chai';

const ADD_APPLE = 'ADD_APPLE';

// accumulationg is what reducers normally do, in one way or another
const accumulatingReducer = (state = 0, action = {}) => {
  const { type, appleBasket } = action;
  switch (type) {
    case ADD_APPLE:
      return state + appleBasket.value;
    default: return state;
  }
};

describe("The apple accumulating reducer", function() {
	it ("accumulates apples", function() {
		//ready
		const actions = [
			{ type: 'ADD_APPLE', appleBasket: { value:  3 } },
			{ type: 'ADD_APPLE', appleBasket: { value:  5 } },
			{ type: 'ADD_APPLE', appleBasket: { value:  8 } },
		];
		//steady
		const sum = actions.reduce(accumulatingReducer, 0);
		//go
		expect(sum).eql(16);
		//again
		expect(actions.reduce(accumulatingReducer, 0)).eql(sum);
		//again
		expect(actions.reduce(accumulatingReducer, 0)).eql(actions.reduce(accumulatingReducer, 0));

		//Note! actions is just a normal array. As arrays have a reduce method that takes an reducer and and
		// an accumulator value in this case a 0, but it can take objects, arrays, strings... et cetera. 
	});
});




