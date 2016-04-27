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
});

















