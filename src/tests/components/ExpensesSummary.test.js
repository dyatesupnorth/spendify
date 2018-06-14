import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly expenses summary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot();
})

test('should correctly expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={4} expensesTotal={3432343} />)
    expect(wrapper).toMatchSnapshot();
})