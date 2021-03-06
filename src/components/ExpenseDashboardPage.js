import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

export const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpensesListFilters />    
        <ExpensesList />        
    </div>
);

export default ExpenseDashboardPage;