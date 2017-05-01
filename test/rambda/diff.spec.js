import {expect} from 'chai';

var sw = [ "tableau desktop", "qlik sense desktop", 
			"tableau server", "qlik sense enterprise",
			"tableau online", "qlik cloud" ];

// Imperative version
function removeBadSofware1(list){
	var result =  [];
	//The for loop is a detailed instruction to the 
	// computer HOW to perform the task
	for (var i = 0; i < list.length; i++){
		var element = list[i];
		if(!element.match(/tableau/)){
			result.push(element);
		}
	}
	return result;
}
console.log(removeBadSofware1(sw));

// Imperative version 2
function removeBadSofware2(list){
	var result =  [];
	//This is a little better, but still instructions of HOW
	list.forEach(function(element) {
		if(!element.match(/tableau/)){
			result.push(element);
		}
	});
	return result;
}

console.log(removeBadSofware2(sw));

//FP version, also called Declarative
// this is only instructions of what we want. Th instruction is that we
// don't want any tableau.
const removeBadSofwareFP = sw.filter(element => !element.match(/tableau/) );
console.log(removeBadSofwareFP);

/**
 * Imagine that we have a complex task that require us to tell
 * the computer to get data from different resources, like open ¨
 * a file, read the data, piece by piece, mayb parsin, maybe pushing back
 * on the stream and then but the data in a buffer and then maka it
 * available for the client (the caller). Worst case if it was done
 * by a callback.
 * 
 * We don't do that in declarative programming, it would still be only
 * a command to the computer that we want the data.
 * 
 * You may wonder about how the computer would know how it should 
 * fetch the data. Of course it has to be done somewhare, but not
 * as it is done in the imperative style, as the declarative
 * style is very much about to compose functions that makes this for us.
 * The functions are compose of smaller functions that is reusable in many
 * context, and of course possible to be unit teste, fully, without mocking, 
 * stubbing, spying etctera.
 * 
 * Why going this path?
 * 
 * By letting the developer focus om business logic, it will be easier,
 * faster and safer to develop. The lower level funcions is already unit 
 * tested. If we find a bug in the a lower level function, we fix it in 
 * one place...
 */

