import {expect} from 'chai';

describe("Transforming loops", () =>{

    /**
     * Map applies a function to every item ini the colletion.
     * The function can be defined inline or externally
     * Usint curried functions can b very powerful 
     * Curry is very important in FP
     */

    it("Map returns a new collection transfomed by the function", () => {
        const func = (str) => str.length;

        expect(["Mary", "Isla", "Sam"].map( func ))
        .eql(["Mary", "Isla", "Sam"].map( func ));

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
    
        const powX = exp => base => Math.pow(base, exp);
        const pow2 = powX(2);

        expect([4, 4, 3].map( pow2 ))
        .eql([16, 16, 9]);
    });
});
