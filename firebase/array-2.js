var Firebase = require('firebase');
var firebaseRef = new Firebase('https://zimmerman-todo-app.firebaseio.com/');

firebaseRef.remove();


var notesRef = firebaseRef.child('notes');

var note1 = notesRef.push({
	title: 'First note',
	body: '...'
});
var note2 = notesRef.push({
	title: 'Second note',
	body: '...'
});



//this once time takes the value and logs the value by using Object.key
// notesRef.once('value').then((snapshot)=> {
// 	var val = snapshot.val();

// 	Object.keys(val).forEach((key) => {
// 		console.log('Key', key);
// 		console.log(val[key]);
// 	});
// }, (e)=> {

// });



//3 key events for listening to arrays add, remove, change

//this snapshots each child and monitors for additions
notesRef.on('child_added', (snapshot) => {
	console.log('New note added', snapshot.key());
	console.log(snapshot.val());
});



//listener when notes are removed
notesRef.on('child_removed', (snapshot) => {
	console.log('note removed', snapshot.key());
	console.log(snapshot.val());
});

//listener for when notes are changed
notesRef.on('child_changed', (snapshot) => {
	console.log('note changed', snapshot.key());
	console.log(snapshot.val());
});

notesRef.push({
	title: 'Third',
	body: '...'
});

notesRef.child(note1.key()).update({
	body: 'updated body'
});

notesRef.child(note2.key()).remove();






