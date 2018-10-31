import uuid from 'uuid';

export const addExpense = ({ id = uuid(),
                             description = '', 
                             note = '', 
                             amount = 0, 
                             createdAt = 0 } = {} 
                          ) => ({
    'type' : 'ADD_EXPENSE',
    'expense' : { id, description, note, amount, createdAt}
});

export const removeExpense = ( id = 0 ) => ({
    'type': 'REMOVE_EXPENSE',
    'id' : id
});

export const editExpense = ( id = 0, updates ) => ({
    'type': 'EDIT_EXPENSE',
    id,
    updates
});

