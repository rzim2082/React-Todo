var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');
var moment = require('moment');


describe('reducers', () => {
	describe('searchTextReducer', () => {
		it('should set search text', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should flip the showcompleted property value', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			}

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 111,
					text: 'anything',
					completed: false,
					completedAt: undefined,
					createdAt: 21323
				}
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1); //looking at length to see if todo array was updated
			expect(res[0]).toEqual(action.todo);
		});


		it('should toggleTodo and toggle completed and change completedAt', () => {
			var todos = [{
					id: '123',
					text: 'stuff to do',
					completed: true,
					createdAt: 123,
					completedAt: 125
			}];

			var action = {
				type: 'TOGGLE_TODO',
				id: '123'
			};

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);

		});

		it('should add existing todos', () =>{
			var todos = [{
			id: 111,
			text: 'anything',
			completed: false,
			compltedAt: undefined,
			createdAt: 21323
			}];

			var action = {
				type: 'ADD_TODOS',
				todos
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);


		});
	});


});