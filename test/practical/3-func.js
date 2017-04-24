import {expect} from 'chai';
import hashIt from 'hash-it';

describe("Secrete Agents", () => {

/**
 * Carl, Viktor and Arnold going out on a secrete mission
 * They are getting codenames, so that they can be secret
 * This is a very bad idea, as it is unfunctional..
 */
	const names = ["Carl", "Viktor", "Arnold"];
	const codeNames = ["Mr. Blue", "Mr. Green", "Mr. Black"];

	function unFunctional(){
		for (let i = 0; i < names.length; i++){
			names[i] = codeNames[Math.floor(Math.random() * codeNames.length)];
		}
	}
	unFunctional();

	/**
	 * Try use a map instead
	 * I need a selector function to select their code names
	 */

	const codeNameSelector = (cName) => realName => cName[Math.floor(Math.random() * cName.length)];
	const secretNames = ["Carl", "Viktor", "Arnold"]
		.map( codeNameSelector( ["Mr. Blue", "Mr. Green", "Mr. Black"] ) );

	const hashNames = ["Carl", "Viktor", "Arnold"].map(hashIt);

	it ("hashing is hashing ", function() {
		expect( ["Carl", "Viktor", "Arnold"].map(hashIt) ).eql( hashNames );
	} );

});
