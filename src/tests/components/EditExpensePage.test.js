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
    wrapper.find('ExpenseForm').prop('onSubmit')();
    expect(history.push).toHaveBeenLastCalledWith('/');    
});


test('should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');    
});


