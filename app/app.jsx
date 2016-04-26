var React = require('react');
var ReactDOM = require('react-dom');
//below is an example of destructuring
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');
var TodoApp = require('TodoApp');




//Load foundation w loaders
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);

