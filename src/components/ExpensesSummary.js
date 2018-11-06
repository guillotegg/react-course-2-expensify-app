import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => (
    <div>
        <h1>Viewing {expenseCount} expenses totalling {numeral(expenseTotal / 100).format('$0,0.00')}</h1>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expenseTotal: getExpensesTotal(expenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);