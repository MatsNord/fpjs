import {expect} from 'chai';
describe("chain of ...", () => {
		
		/**
		 * You can chain the filter map reduce. reading from left to right
		 */
		it("chain filter and map", () => {

			const computer = [
				{"name": "asus", "proc": "intel", "os": "linux",  "price": "111"}, 
				{"name": "dell", "proc": "amd", "os": "linux",    "price": "112"},
				{"name": "dell", "proc": "amd", "os": "linux",    "price": "200"},
				{"name": "asus", "proc": "arm", "os": "windows",  "price": "100"},
				{"name": "hp",   "proc": "intel", "os": "linux",  "price": "140"},
				{"name": "Apple", "proc": "intel", "os": "MacOS", "price": "400"}
			];
			const myLinuxFilter = x => x.os == "linux";
			const onSalePrice = p => { const price = p.price * 0.89;  return Object.assign({}, { ...p}, {price})};
					
			const priceLessThan = price => product => product.price < price; 
			const bestBuy = priceLessThan(100);

			expect(computer.filter(myLinuxFilter).map(onSalePrice).filter(bestBuy))
				.eql([	{ name: 'asus', proc: 'intel', os: 'linux', price: 98.79 },
 						{ name: 'dell', proc: 'amd', os: 'linux', price: 99.68 } ] );

			const countTypes = ( coll, x ) => { 
				const value = {}; 
				value[x["proc"]] = coll[x["proc"]] ? coll[x["proc"]] + 1 : 1;
				return Object.assign( {}, {...coll}, value );
			};
			
			computer.filter(myLinuxFilter).map(onSalePrice).filter(bestBuy).reduce(countTypes, {} );

		});
});