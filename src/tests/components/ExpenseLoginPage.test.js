import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseLoginPage } from '../../components/ExpenseLoginPage';

test('should render the login expense page', () => {
    const wrapper = shallow(<ExpenseLoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<ExpenseLoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});