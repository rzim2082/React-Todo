var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('TodoApp', () => {
	it('should exist', ()=>{
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleaddtodo', ()=> {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);


		expect(todoApp.state.todos[0].text).toBe(todoText);
		//expect createdat tobe a number
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'test features',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});
		//check that todos first itme has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);
		//call handle toggle with id
		todoApp.handleToggle(11);
		//check completed value changed from false to true
		expect(todoApp.state.todos[0].completed).toBe(true);
		//expect completedAt to be a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});


	//test that when toggled from true to false completedAt turns to undefined

	it('should change compltedAt from number to undefined when completed is toggled from true to false', () => {
		var todoData = {
			id: 34,
			text: 'test test test',
			completed: true,
			createdAt: 5,
			compltedAt: 35
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});
		todoApp.handleToggle(34);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined); //could use to not exist

	});
});




















