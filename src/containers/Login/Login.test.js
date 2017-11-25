import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const login = shallow(
    <Login />
  );

  const input = login.find('input');

  input.simulate('change', { target: { value: 'test' } });

  const value = login.find('small');

  expect(value.text()).toEqual('test');

});