var React = require('react');
var ReactDOM = require('react-dom');
//below is an example of destructuring
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');
var TodoApp = require('TodoApp');


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', store.getState());
});


store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation w loaders
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);

