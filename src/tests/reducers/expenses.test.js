import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should NOT remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Beer',
        note: '',
        amount: 355,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
    expect(state[3]).toEqual(expense);
});

test('should edit and expense', () => {

    const updates = {
        description: 'Coconut'
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(updates.description);
});

test('should not edit expenses if expense not found', () => {
    const updates = {
        description: 'Coconut'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});