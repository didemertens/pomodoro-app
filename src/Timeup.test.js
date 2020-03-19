import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import findByTestAttr from '../test/testUtils'
import Timeup from './Timeup'

Enzyme.configure({ adapter: new EnzymeAdapter() })

// factory function to create a shallow wrapper for the timeup component
const setup = (props = {}) => {
  return shallow(<Timeup {...props} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-timeup')
  expect(appComponent.length).toBe(1)
})

test('renders no text when timeUp prop is false', () => {
  const wrapper = setup({ timeUp: false })
  const appComponent = findByTestAttr(wrapper, 'component-timeup')
  expect(appComponent.text()).toBe('')
})

test('renders non-empty message when timeUp prop is true', () => {
  const wrapper = setup({ timeUp: true })
  const message = findByTestAttr(wrapper, 'timeup-message')
  expect(message.text().length).not.toBe(0)
})