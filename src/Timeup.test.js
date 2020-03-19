import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import { checkProps } from '../test/testUtils'
import Timeup from './Timeup'

// factory function to create a shallow wrapper for the timeup component
const defaultProps = { timeUp: false }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Timeup {...setupProps} />)
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

test('does not throw a warning with expected props', () => {
  const expectedProps = { timeUp: false }
  checkProps(Timeup, expectedProps)
})