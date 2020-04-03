import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import PomTimer from './Pomtimer'
import { findByTestAttr, storeFactory } from '../../test/testUtils'

// fake timers for setInterval
jest.useFakeTimers()

describe('pomodoro timer testing', () => {
  const initialState = {}
  let store, wrapper

  beforeEach(()=>{
    store = storeFactory(initialState)
    wrapper = mount(<PomTimer store={store} />)
  })

  it('renders without errors', () => {
    const pomComponent = findByTestAttr(wrapper, 'pomtimer-component')
    expect(pomComponent.length).toBe(1)
  })
  
  it('renders a start button', () => {
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    expect(startButton.length).toBe(1)
  })
  
  it('renders time display', () => {
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.length).toBe(1)
  })
  
  it('time starts at 25', () => {
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('25:00')
  })
  
  it('setinterval is called after clicking the start button', () => {
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
    expect(setInterval).toHaveBeenCalledTimes(1)
  })

  it('sets startTimer to true when clicking start button', () => {
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
    expect(store.getState().startTimer).toBe(true)
  })

  it('time decreases by 1 second when clicking start button', () => {
    // find button and click
    let startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
  
    // check value after 1 second on display
    act(() => jest.advanceTimersByTime(1000))
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('24:59')
  })

  it('time stops when clicking start button twice', () => {
    // find button and click
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')

    // click once after 5 seconds
    act(() => jest.advanceTimersByTime(5000))
    startButton.simulate('click')

    // click second time and check value after 10 seconds on display
    act(() => jest.advanceTimersByTime(5000))
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('24:55')
  })

  test('time resets when reset button is clicked', () => {
    // find start button and click, advance time by 5 seconds
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
    act(() => jest.advanceTimersByTime(5000))

    // find reset button and click
    const resetButton = findByTestAttr(wrapper, 'reset-button').first()
    resetButton.simulate('click')

    // check if value of time is 25 again
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('25:00')
  })

  test('time does not continue after reset button is clicked', () => {
    //find start button and click, advance time by 5 seconds
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
    act(() => jest.advanceTimersByTime(5000))

    // find reset button and click, afvance by 5 seconds
    const resetButton = findByTestAttr(wrapper, 'reset-button').first()
    resetButton.simulate('click')
    act(() => jest.advanceTimersByTime(5000))

    // check if time display is 25:00
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('25:00')
  })

  test('amount of pomodoros is increased by 1 after timer is finished', () => {
    //find start button and click, advance time by 25 minutes
    const startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
    act(() => jest.advanceTimersByTime(2500000))

    // check state of pomodoros
    const pomodorosState = store.getState().pomodoros
    expect(pomodorosState).toBe(1)
  })
})