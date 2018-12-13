import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensesPage } from '../../components/EditExpensesPage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensesPage expense={expenses[2]} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} />);
});


test('should render EditExpensesPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});


test('should handle startRemoveExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');  
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id)  
});


