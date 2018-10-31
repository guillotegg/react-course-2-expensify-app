import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

export const ExpenseDashboardPage = () => (
    <div>
        <ExpensesListFilters />    
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;