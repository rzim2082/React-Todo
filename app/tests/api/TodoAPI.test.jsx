var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(()=> {
		localStorage.removeItem('todos');
	});


	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', ()=> {
		it('should set valid todos array', () => {
			var todos = [{
				id: 1,
				text: 'this is the text',
				completed: false
			}];

			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos); //to equal better for objects and arrays
		});

		it('should not set invalid todos array', () => {
			var todos = 123;

			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toNotEqual(todos);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});


		it('should return todos if valid array in localStorage', () => {
			var todos = [{
				id: 1,
				text: 'this is the text',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filteredtodos', ()=> {
		var todos = [{
			id: 1,
			text: 'some text here',
			completed: true
		},
		{
			id: 2,
			text: 'more text here',
			completed: false
		},
		{
			id: 3,
			text: 'even more text here',
			completed: false
		}
		];

		it('should return all items if show completed is true', () => {
			var filteredtodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredtodos.length).toBe(3);
		});

		it('should return only items if show completed is false', () =>{
			var filteredtodos = TodoAPI.filterTodos(todos, false, '');

			expect(filteredtodos.length).toBe(2);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by search text', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'more');
			expect(filteredTodos.length).toBe(2);
		});

		it('should return all todos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	});
});

















