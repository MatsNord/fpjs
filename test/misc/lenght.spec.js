import {expect} from 'chai';

describe("Length", () => {

	const EMPTY = undefined;

	const arr = [1,2,3];

	const alength = ( [head,...tail] , len = 0 ) => 
		( head === undefined ) 
		? len
		: alength( tail, len + 1 );

	it("return length of list", () => {
		expect(alength(arr)).equal(alength([1,2,3]));
		expect(alength([1,2]) + alength([3])).equal(3);
		expect(alength([1]) + alength([2,3])).equal(3);
		expect(alength([]) + alength([1,2,3])).equal(3);
	});

	
	const llist = { value: 1, next: { value: 2, next: { value: 3, next: EMPTY } } };

	const llength = ( list, len = 0 ) =>
		( list  === undefined )
		? len
		: llength( list.next, len + 1 ); 

	it("return length of llist", () => {
		expect(llength(llist)).equal(3);
		expect(llength(llist)).equal(llength(llist));
	});

	const length = (afn, lfn) => list => Array.isArray(list) ? afn(list) : lfn(list);


	const uniLength = length(alength, llength);

	it("return length of unilength", () => {
		expect(uniLength(arr)).equal(3);
		expect(uniLength(llist)).equal(3);
		expect(uniLength(arr)).equal(uniLength(llist));
	});
});



