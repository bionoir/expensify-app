import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with empty message', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={23321322} />);
    expect(wrapper).toMatchSnapshot();
});