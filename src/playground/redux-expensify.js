store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleState);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', 'amount': 100, 'createdAt': -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', 'amount': 300, 'createdAt': -1500 }));
//store.dispatch(removeExpense(expenseTwo.expense.id));
//store.dispatch(editExpense(expenseOne.expense.id, { 'amount': 500 }));
//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(-1));
//store.dispatch(setEndDate(125));

/*const demoState = {
    expenses: [{
        id: '12345',
        description: 'January Rent',
        note: 'This is a note',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}*/