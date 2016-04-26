var React = require('react');
var ReactDOM = require('react-dom');
//below is an example of destructuring
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');




//Load foundation w loaders
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<p>Boiler Plate</p>,
	document.getElementById('app')
);

