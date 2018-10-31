import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense(1);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
    })
});

test('should setup edit expense action object', () => {
    const update = { note :'new note' };

    const action = editExpense(1, update);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: update
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = { description: 'new expense', 
                          note: 'note....', 
                          amount: 25.65, 
                          createdAt: 12224 };
    
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {id:expect.any(String), ...expenseData }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { id:expect.any(String), 
                  description: '',
                  note:'',
                  amount: 0, 
                  createdAt: 0 }
    });
});