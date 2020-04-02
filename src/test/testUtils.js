import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import { middlewares } from '../configStore'

// Creating a testing store
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(reducers, initialState)
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
