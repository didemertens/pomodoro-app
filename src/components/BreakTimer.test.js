import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import BreakTimer from './BreakTimer'

// to be able to advance timers
jest.useFakeTimers()

// factory function to create a shallow wrapper for the timeup component
const firstState = { pomodoros: 3 }

const setup = (initialState={...firstState}) => {
  const store = storeFactory(initialState)
  return mount(<BreakTimer store={store} />)
}

describe('break timer testing', () => {
  const initialState = {pomodoros: 5}
  let store, wrapper

  beforeEach(()=>{
    store = storeFactory(initialState)
    wrapper = mount(<BreakTimer store={store} />)
  })

  it('renders without error', () => {
    const breakComponent = findByTestAttr(wrapper, 'component-breaktimer')
    expect(breakComponent.length).toBe(1)
  })

  it('renders the timer display', () => {
    const displayTimer = findByTestAttr(wrapper, 'display-timer')
    expect(displayTimer.length).toBe(1)
  })

  it('minutes is set to 5 when pomodoros is not divisible by 4', () => {
    const displayTimer = findByTestAttr(wrapper, 'display-timer')
    expect(displayTimer.text()).toContain('5:00')
  })

  it('minutes is set to 30 when pomodoros is divisible by 4', () => {
    const longBreakWrapper = setup()
    const displayTimer = findByTestAttr(longBreakWrapper, 'display-timer')
    expect(displayTimer.text()).toContain('30:00')
  })

  it('time decreases by 1 second when clicking start button', () => {
    // find button and click
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')

    // check value after 1 second on display
    act(() => jest.advanceTimersByTime(1000))
    const displayTimer = findByTestAttr(wrapper, 'display-timer')
    expect(displayTimer.text()).toContain('4:59')
})

  it('time stops when clicking start button twice', () => {
    // find button and click
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')

    // click another time after 5 seconds
    act(() => jest.advanceTimersByTime(5000))
    startButton.simulate('click')

    // click second time and check value after 5 more seconds on display
    act(() => jest.advanceTimersByTime(5000))
    const displayTimer = findByTestAttr(wrapper, 'display-timer')
    expect(displayTimer.text()).toContain('4:55')
  })
})
