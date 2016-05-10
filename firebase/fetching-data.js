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
firebaseRef.once('value').then((snapshot)=> {
	var val = snapshot.val();
	console.log('Got value', val.app.name);
}, (e) => {
	console.log('undable to fetch value', e)
});
*/

// on, off ---- attach listeners that fire off multiple times

/*
var logSnapshot = (snapshot) => {
	console.log('Got data', snapshot.val());
};

firebaseRef.on('value', logSnapshot);
*/
// problem is .on orginally uses an anonymous function and to call .off you need to be able to reference that function
//firebaseRef.off('value', logSnapshot);

var logSnapshot = (snapshot) => {
	console.log('Got data ' + snapshot.key(), snapshot.val());
};

firebaseRef.child('app').on('value', logSnapshot);



firebaseRef.update({
	isRunning: false
});








