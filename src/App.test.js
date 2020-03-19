import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr } from '../test/testUtils'

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

  // check value after 1 second on display
  jest.advanceTimersByTime(1000)
  const timeDisplay = findByTestAttr(wrapper, 'time-display')
  expect(timeDisplay.text()).toContain('24:59')
})

test('time stops when clicking start button twice', () => {
  const wrapper = setup()

  // find button and click
  const startButton = findByTestAttr(wrapper, 'start-button')
  startButton.simulate('click')

  // click once after 5 seconds
  jest.advanceTimersByTime(5000)
  startButton.simulate('click')
  // click second time and check value after 10 seconds on display
  jest.advanceTimersByTime(5000)
  startButton.simulate('click')
  const timeDisplay = findByTestAttr(wrapper, 'time-display')
  expect(timeDisplay.text()).toContain('24:55')
})