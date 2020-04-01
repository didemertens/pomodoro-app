import checkPropTypes from 'check-prop-types'
import rootReducer from '../reducers'
import { createStore } from 'redux'

// Creating a testing store
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}

// return node(s) with the given data-test attribute
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
  )
  expect(propError).toBeUndefined()
}
