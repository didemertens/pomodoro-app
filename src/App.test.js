import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapater from 'enzyme-adapter-react-16'
import App from './App';

import findByTestAttr from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapater() })

const setup = (props = {}, state = null) => {
  return shallow(<App />)
}

// fake timers for setInterval
jest.useFakeTimers();

test('renders without errors', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders a start button', () => {
  const wrapper = setup()
  const startButton = findByTestAttr(wrapper, 'start-button')
  expect(startButton.length).toBe(1)
})

test('renders time display', () => {
  const wrapper = setup()
  const timeDisplay = findByTestAttr(wrapper, 'time-display')
  expect(timeDisplay.length).toBe(1)
})

test('time starts at 25', () => {
  const wrapper = setup()
  const initialMinuteState = wrapper.state('minutes')
  const initialSecondState = wrapper.state('seconds')
  expect(initialMinuteState).toBe(25)
  expect(initialSecondState).toBe(0)
})

test('time decreases by 1 second when clicking start button', () => {
  const wrapper = setup()

  // find button and click
  const startButton = findByTestAttr(wrapper, 'start-button')
  startButton.simulate('click')

  // find display and check value after 1 second
  jest.advanceTimersByTime(1000);
  const timeDisplay = findByTestAttr(wrapper, 'time-display')
  expect(timeDisplay.text()).toContain('24:59')
})