import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={222}  />)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with several expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={22} expenseTotal={454545454}  />)
    expect(wrapper).toMatchSnapshot();
});
