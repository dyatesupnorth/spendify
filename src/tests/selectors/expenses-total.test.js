import totalExpenses from '../../selectors/expenses-total'
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const result = totalExpenses();
    expect(result).toEqual(0)
})

test('should correctly add up a single expense', () => {
    const expense = [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    }]
    const result = totalExpenses(expense);
    expect(result).toEqual(expense[0].amount)
});

test('should correctly add up multiple expenses', () => {
    const result = totalExpenses(expenses);
    expect(result).toEqual(expenses[1].amount + expenses[2].amount + expenses[0].amount)
})

