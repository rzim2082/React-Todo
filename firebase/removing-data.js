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
firebaseRef.remove().then(() => {
	console.log('Data removed');
}, (e) => {
	console.log('Data not removed!', e);
});
*/

/*
firebaseRef.child('app').remove().then(() => {
	console.log('Child app removed');
}, (e) => {
	console.log('Data not removed', e);
});
*/


/*
firebaseRef.child('app/version').remove().then(() => {
	console.log('Part of app removed');
}, (e) => {
	console.log('Data not removed', e);
});
*/


var nameRef = firebaseRef.child('app/name');
//remove age using nameref

nameRef.parent().parent().child('rzim2082/age').remove().then(() => {
	console.log('age was removed by going to parent which is app, then to parent which is root then to the child rzim2082/age ');
}, (e) => {
	console.log('age removal failure', e);
});

nameRef.root().child('isRunning').remove().then(() => {
	console.log('is running removed by traversing the root');
}, (e) => {
	console.log('isRunning removal failure', e);
});










