import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import { checkProps } from '../test/testUtils'
import BreakTimer from './BreakTimer'

// to be able to advance timers
jest.useFakeTimers()

// factory function to create a shallow wrapper for the timeup component
const defaultProps = { pomodoros: 0 }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<BreakTimer {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const breakComponent = findByTestAttr(wrapper, 'component-breaktimer')
  expect(breakComponent.length).toBe(1)
})

test('renders the timer display', () => {
  const wrapper = setup({ pomodoros: 1 })
  const displayTimer = findByTestAttr(wrapper, 'display-timer')
  expect(displayTimer.length).toBe(1)
})

test('minutes is set to 5 when pomodoros is not divisible by 4', () => {
  const wrapper = setup({ pomodoros: 1 })
  const minutesState = wrapper.state('minutes')
  expect(minutesState).toBe(5)
})

test('minutes is set to 30 when pomodoros is by 4', () => {
  const wrapper = setup({ pomodoros: 8 })
  const minutesState = wrapper.state('minutes')
  expect(minutesState).toBe(30)
})

test('time decreases by 1 second when clicking start button', () => {
  const wrapper = setup({ pomodoros: 1 })

  // find button and click
  const startButton = findByTestAttr(wrapper, 'start-button')
  startButton.simulate('click')

  // check value after 1 second on display
  jest.advanceTimersByTime(1000)
  const displayTimer = findByTestAttr(wrapper, 'display-timer')
  expect(displayTimer.text()).toContain('4:59')
})

test('time stops when clicking start button twice', () => {
  const wrapper = setup({ pomodoros: 1 })

  // find button and click
  const startButton = findByTestAttr(wrapper, 'start-button')
  startButton.simulate('click')

  // click once after 5 seconds
  jest.advanceTimersByTime(5000)
  startButton.simulate('click')

  // click second time and check value after 10 seconds on display
  jest.advanceTimersByTime(5000)
  startButton.simulate('click')
  const displayTimer = findByTestAttr(wrapper, 'display-timer')
  expect(displayTimer.text()).toContain('4:55')
})

test('does not throw a warning with expected props', () => {
  const expectedProps = { pomodoros: 3 }
  checkProps(BreakTimer, expectedProps)
})