var Firebase = require('firebase');
var firebaseRef = new Firebase('https://zimmerman-todo-app.firebaseio.com/');


firebaseRef.set({
	isRunning: true,
	app: {
		name: 'Todo App',
		version: '0.0.1'
	},
	rzim2082: {
		name: 'Ryan',
		age: 35
	}
});

/*
firebaseRef.update({
	isRunning: false
	//'app/version': '0.0.2'
}).then(() => {
	console.log('update worked');
}, (e) => {
	console.log('Update failed!', e);
});

firebaseRef.child('app').update({
	version: '0.0.2'
});
*/


/*
firebaseRef.update({
	'app/version': '0.1.0',
	'rzim2082/age': 36
}).then(() =>{
	console.log('update worked');
}, (e) => {
	console.log('update failed', e);
});
*/



firebaseRef.child('app').update({
	version: '0.1.0'
});

firebaseRef.child('rzim2082').update({
	age: 37
});






