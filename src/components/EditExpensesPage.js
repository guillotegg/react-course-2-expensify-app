import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses.js';

export class EditExpensesPage extends React.Component {
    onSubmit = (expense) => {              
        this.props.editExpense(this.props.expense.expenseId, expense);
        this.props.history.push('/');
    };
    onClick = (id) => {
        this.props.removeExpense(id);
        this.props.history.push('/');
    };
    render(expense) {
        return (
            <div>
               <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
               <button onClick={this.onClick}>Remove</button> 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensesPage);
