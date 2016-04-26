/*
function add(a, b) {
	return a + b;
}

console.log(add(3, 1));


var toAdd = [9, 5];
console.log(add(...toAdd))


var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, ...groupA];

console.log(final);
*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25

function greeting(name, age){
	return "Hi " + name + ", you are " + age;
}

console.log(greeting(...person));
console.log(greeting(...personTwo));


var names = ['Ryan', 'Brooke', 'William'];
var final = ['Andrew', ...names];

function printNames(array){
	array.forEach(function (name){
		console.log(name);
	});
}

printNames(final);

