import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import { checkProps } from '../test/testUtils'
import BreakTimer from './BreakTimer'

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

test('renders short break timer when pomodoros is not divisble by 4', () => {
  const wrapper = setup({ pomodoros: 1 })
  const shortTimer = findByTestAttr(wrapper, 'short-break-timer')
  expect(shortTimer.length).toBe(1)
})

test('renders long break timer when pomodoros is divisble by 4', () => {
  const wrapper = setup({ pomodoros: 8 })
  const longTimer = findByTestAttr(wrapper, 'long-break-timer')
  expect(longTimer.length).toBe(1)
})