import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual ({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const editAction = editExpense('123', { amount: 20000 });

    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount: 20000
        }

    });
});

test('should setup add expense action object with provided values', () => {
    const addAction = addExpense(expenses[2]);
    expect(addAction).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});

    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
 
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});

    const expenseDefault = {
        description: '', 
        note: '',
        amount: 0, 
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });

});

// test('should setup add expense action object with default values', () => {
//     const defaultExpenseData = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''
//     };

//     const addAction = addExpense();

//     expect(addAction).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...defaultExpenseData,
//             id: expect.any(String)
//         }
//     });
// });