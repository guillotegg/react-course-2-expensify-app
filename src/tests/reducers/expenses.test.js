import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expenseData = { description: 'new expense', 
                          note: 'note....', 
                          amount: 25.65, 
                          createdAt: 12224 };

    const action = { type: 'ADD_EXPENSE', expense: expenseData };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [...expenses, expenseData]);
});

test('should edit an expense', () => {
    const note = 'note for Gum!';
    const action = { type: 'EDIT_EXPENSE', 
                     id: expenses[0].id, 
                     updates: { note: note} };
    
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
    
});

test('should not edit an expense if id not found', () => {
    const action = { type: 'EDIT_EXPENSE', 
                     id: -1, 
                     updates: { note: 'note for Gum!'} };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    
});


test('should set expenses', () => {
    const action = { type: 'SET_EXPENSES', expenses };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});