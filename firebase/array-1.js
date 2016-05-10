var Firebase = require('firebase');
var firebaseRef = new Firebase('https://zimmerman-todo-app.firebaseio.com/');

firebaseRef.remove();


var notesRef = firebaseRef.child('notes');


var newNoteRef = notesRef.push(); //generates unique id and sets a reference
var newNoteId = newNoteRef.key();
newNoteRef.set({
	title: 'Firebase 101',
	body: '...'
});

console.log('newNoteId', newNoteId);


notesRef.push({
	title: 'Firebase 201',
	body: '...'
});


// Challenge area
// create an array of todos
// create a new ref to todos
// push item in using shortcut
// create 2nd item using push and set, also print unique id

var todosRef = firebaseRef.child('todos');

var newTodoRef = todosRef.push();
var newTodoId = newTodoRef.key();
newTodoRef.set({
	title: 'Todo 1',
	text: 'blah blah'
});

console.log('newTodoId', newTodoId);

todosRef.push({
	title: 'Todo 2',
	text: 'more blah blah'
});















