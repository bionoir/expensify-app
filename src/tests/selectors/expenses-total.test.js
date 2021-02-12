import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return the total for one expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(1950);
});

test('should return sum of expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(1137450);
});