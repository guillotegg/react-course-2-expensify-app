import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensesPage } from '../../components/EditExpensesPage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensesPage expense={expenses[0]} editExpense={editExpense} removeExpense={removeExpense} history={history} />);
});


test('should render EditExpensesPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].expenseId, expenses[1]);
});


test('should handle removeExpense', () => {
    const id = expenses[1].expenseId;
    wrapper.find('button').prop('onClick')(id);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(id);
});


