import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr, storeFactory } from '../test/testUtils'

const setup = (props = {}, state = null, initialState={}) => {
  const store = storeFactory(initialState)
  return shallow(<App store={store} />)
}

// fake timers for setInterval
jest.useFakeTimers();

test('renders without errors', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

// test('renders a start button', () => {
//   const wrapper = setup()
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   expect(startButton.length).toBe(1)
// })

// test('renders time display', () => {
//   const wrapper = setup()
//   const timeDisplay = findByTestAttr(wrapper, 'time-display')
//   expect(timeDisplay.length).toBe(1)
// })

// test('time starts at 25', () => {
//   const wrapper = setup()
//   const initialMinuteState = wrapper.state('minutes')
//   const initialSecondState = wrapper.state('seconds')
//   expect(initialMinuteState).toBe(25)
//   expect(initialSecondState).toBe(0)
// })

// test('time decreases by 1 second when clicking start button', () => {
//   const wrapper = setup()

//   // find button and click
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   startButton.simulate('click')

//   // check value after 1 second on display
//   jest.advanceTimersByTime(1000)
//   const timeDisplay = findByTestAttr(wrapper, 'time-display')
//   expect(timeDisplay.text()).toContain('24:59')
// })

// test('time stops when clicking start button twice', () => {
//   const wrapper = setup()

//   // find button and click
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   startButton.simulate('click')

//   // click once after 5 seconds
//   jest.advanceTimersByTime(5000)
//   startButton.simulate('click')
//   // click second time and check value after 10 seconds on display
//   jest.advanceTimersByTime(5000)
//   startButton.simulate('click')
//   const timeDisplay = findByTestAttr(wrapper, 'time-display')
//   expect(timeDisplay.text()).toContain('24:55')
// })

// test('time resets when reset button is clicked', () => {
//   const wrapper = setup()

//   //find start button and click, advance time by 5 seconds
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   startButton.simulate('click')
//   jest.advanceTimersByTime(5000)

//   // find reset button and click
//   const resetButton = findByTestAttr(wrapper, 'reset-button')
//   resetButton.simulate('click')

//   // check if value of time is 25 again
//   const minuteState = wrapper.state('minutes')
//   const secondState = wrapper.state('seconds')
//   expect(minuteState).toBe(25)
//   expect(secondState).toBe(0)
// })

// test('time does not continue after reset button is clicked', () => {
//   const wrapper = setup()

//   //find start button and click, advance time by 5 seconds
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   startButton.simulate('click')
//   jest.advanceTimersByTime(5000)

//   // find reset button and click, afvance by 5 seconds
//   const resetButton = findByTestAttr(wrapper, 'reset-button')
//   resetButton.simulate('click')
//   jest.advanceTimersByTime(5000)

//   // check if time display is 25:00
//   const timeDisplay = findByTestAttr(wrapper, 'time-display')
//   expect(timeDisplay.text()).toContain('25:00')
// })

// test('amount of pomodoros is increased by 1 after timer is finished', () => {
//   const wrapper = setup()

//   //find start button and click, advance time by 25 minutes
//   const startButton = findByTestAttr(wrapper, 'start-button')
//   startButton.simulate('click')
//   jest.advanceTimersByTime(2500000)

//   // check state of pomodoros
//   const pomodorosState = wrapper.state('pomodoros')
//   expect(pomodorosState).toBe(1)
// })