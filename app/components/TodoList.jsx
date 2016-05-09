var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';


export var TodoList = React.createClass({
	render: function(){
		var {todos, showCompleted, searchText} = this.props;
		var renderTodos = () => {
			if(todos.length === 0){
				return (
					<p className="container_message">Nothing To Do</p>
				);
			}
			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
				return (
					<Todo key={todo.id} {...todo}/>
				);
			});
		};


		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});


export default connect(
	(state) => {
		return state;
	}
)(TodoList);

//module.exports = TodoList;








//<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> deprecated because of redux






