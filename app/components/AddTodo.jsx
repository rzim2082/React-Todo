var React = require('react');


var AddTodo = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var todoText = this.refs.todoText.value;
		//console.log('made it here');

		if(todoText.length > 0){
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.todoText.focus(); //ui thing
		}
	},
	render: function(){
		return (
			<div>
				<form ref="form" onSubmit={this.handleSubmit}>
					<div>
						<input type="text" ref="todoText" placeholder="Enter Item"/>
					</div>
					<div>
						<button className="button expanded">Add Todo</button>
					</div>
				</form>
			</div>
		);
	}
});


module.exports = AddTodo;