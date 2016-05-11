import moment from 'moment';
import Firebase from 'firebase';
//var Firebase = require('firebase');
var firebaseRef = new Firebase('https://zimmerman-todo-app.firebaseio.com/');



export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};


export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = (text) =>{
	return (dispatch, getStore) => {
		var todo = {
			text,
			completed: false,
			completedAt: null,
			createdAt: moment().unix()
		};
		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key()
			}));
		});
	}
};


export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}