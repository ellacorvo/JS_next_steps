//.........Loops Practice #2..........//

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
// }


// for(var i=0; i<4; i++) {
//  console.log(animals[i]);
// }


// for(var i=0; i<animals.length; i+=2) {
//  console.log(animals[i]);
// }


// for(var i=animals.length -1; i>=0; i--) {
//  console.log(animals[i]);
// }


// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
// 	 for(var i=1; i<animals.length -1; i++) {
// 	 console.log(animals[i]);
// 	 console.log(animals[i]);
// 	}
// console.log(animals[i]);	
// }


//.......Functions Practice #2........//

// var person = {
// 	name : 'Louisa',
// 	age : '25'
// }
// var getName = function() {
//  return person.name;
// }
// console.log(getName());



// var Words = ['javascript','is','awesome']
// var totalLetters = function() {
// 	var Letters = Words.toString();
// 	return Letters.length;
// }
// console.log(totalLetters());



// var whatCity = {};
// var keyValue = function(city, name) {
// 	whatCity[city] = name;
// 	return whatCity;
// }
// console.log(keyValue("city", "Denver"));



// var letters = ['a', 'b', 'c', 'd', 'e'];
// var names = ['jerry', 'sarah', 'sally'];
// var negativeIndex = function(array, number) {
// 	var positive = number * -1;
// 	var n = array.length - positive;
// 	return array[n];
// }
// console.log(negativeIndex(names, -1));


var removeM = function(string) {
	var eachLetter = string.split("");
		for (i=0; i<eachLetter.length; i++) {
			if ([i] === 'm' || [i] === 'M') {
				result = "";
			}
			else {
				result = [i];
			}
		}
		return result;
}
console.log(removeM('family'));



