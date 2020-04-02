import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Timeup from './Timeup'

// factory function to create a shallow wrapper for the timeup component
const firstState = { timeUp: true, pomodoros: 8 }

const setupMultiplePom = (initialState={...firstState}) => {
  const store = storeFactory(initialState)
  return shallow(<Timeup store={store} />).dive().dive()
}

describe('Time is up testing', () => {
  const initialState = { timeUp: true, pomodoros: 3 }
  let store, wrapper

  beforeEach(()=> {
    store = storeFactory(initialState)
    wrapper = shallow(<Timeup store={store} />).dive().dive()
  })
  
  it('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-timeup')
    expect(appComponent.length).toBe(1)
  })

  it('if amount of pomodoros is not divisible by 4, say it is time for a SHORT break', () => {
    const message = findByTestAttr(wrapper, 'timeup-message-short')
    expect(message.text()).toContain('short')
  })

  it('if amount of pomodoros is divisible by 4, say it is time for a LONG break', () => {
    const wrapper = setupMultiplePom()
    const message = findByTestAttr(wrapper, 'timeup-message-long')
    expect(message.text()).toContain('long')
  })
})