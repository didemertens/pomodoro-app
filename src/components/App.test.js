import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr, storeFactory } from '../test/testUtils'

const setup = (props = {}, state = null, initialState={}) => {
  const store = storeFactory(initialState)
  return shallow(<App store={store} />).dive().dive()
}

test('renders without errors', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})
