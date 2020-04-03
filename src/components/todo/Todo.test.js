import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo'
import { findByTestAttr, storeFactory } from '../../test/testUtils'

describe('todo component testing with empty todoList', () => {
  let initialState = { todoList: [] }
  let store, wrapper

  beforeEach(()=>{
    store = storeFactory(initialState)
    wrapper = shallow(<Todo store={store} />).dive().dive()
  })

  it('renders without error', () => {
    const todoComponent = findByTestAttr(wrapper, 'todo-component')
    expect(todoComponent.length).toBe(1)
  })

  it('does not render a list of to dos when array is empty', () => {
    const todoList = findByTestAttr(wrapper, 'todo-list')
    expect(todoList.children().length).toBe(0)
  })

  it('renders an add button', () => {
    const addButton = findByTestAttr(wrapper, 'add-button').first()
    expect(addButton.length).toBe(1)
  })
})

describe('todo component testing with todoList', () => {
  let initialState = { todoList: ['test1', 'test2'] }
  let store, wrapper

  beforeEach(()=>{
    store = storeFactory(initialState)
    wrapper = shallow(<Todo store={store} />).dive().dive()
  })

  it('renders a list of to dos when in array', () => {
    const todoList = findByTestAttr(wrapper, 'todo-list')
    expect(todoList.children().length).toBe(2)
  })

})