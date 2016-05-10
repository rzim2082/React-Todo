var Firebase = require('firebase');
var firebaseRef = new Firebase('https://zimmerman-todo-app.firebaseio.com/');


firebaseRef.set({
	appName: 'Todo Application',
	isRunning: true,
	rzim2082: {
		name: 'Ryan',
		age: 35
	}
}).then(()=> {
	console.log('Success!');
}, (e) => {
	console.log('Error!');
});

//when you call set you are wiping the data
//there is an updata option
//you could use a ref that creates a new child of database /rzim2082

var userRef = firebaseRef.child('rzim2082');

userRef.set({
	name: 'Bob'
});

var appRef = firebaseRef.child('app');


appRef.set({
	name: 'Todo Application',
	version: '0.0.1'
});





