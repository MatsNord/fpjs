import {expect} from 'chai';

describe("Length", () => {

const length =  list => {
	let tmp = Object.assign([], list);
	let i=0;
	while (tmp[0]) {
		i++
		tmp.pop();
	}
	return i;
	}
	it("return length", () => {
		expect(length(["welcome", "to", "hackathon"])).equal(length(["welcome", "to", "hackathon"]));
		expect(length(["welcome", "to"]) + length(["hackathon"])).equal(3);
		expect(length(["welcome"]) + length(["to", "hackathon"])).equal(3);
		expect(length([]) + length(["welcome", "to", "hackathon"])).equal(3);
	});
});
