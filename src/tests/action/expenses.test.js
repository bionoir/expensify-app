import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };

    const addAction = addExpense(expenseData);

    expect(addAction).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const defaultExpenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };

    const addAction = addExpense();

    expect(addAction).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...defaultExpenseData,
            id: expect.any(String)
        }
    });
});