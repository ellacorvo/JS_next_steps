// .........Loops Practice #2..........

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


//.......Functions Practice #2........

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


// var removeM = function(string) {
// 	var eachLetter = string.split("");
// 	for (i=0; i<eachLetter.length; i++) {
// 		if (eachLetter[i] === 'm' || eachLetter[i] === 'M') {
// 			eachLetter.splice(i,1);
// 		}
// 	}
// 	return eachLetter.join('');
// }
// console.log(removeM('family'));


// var pairs1 = { a: 10, b: 20, c: 30 };
// var pairs2 = { firstName: 'pork', lastName: 'chops' }
// var printObject = function(object) {
// 	for (var prop in object) {
//   		console.log( prop + " is " + object[prop]);
// 	}
// }
// printObject(pairs1);


//..........Loops Practice #3...........

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// for(var i=0; i<students.length; i++) {
//  console.log(students[i].name);
// }

for(var i=0; i<students.length; i++) {
 console.log(students[i].age);
}



