import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo'
import { findByTestAttr, storeFactory } from '../../test/testUtils'

describe('break timer testing', () => {
  const initialState = {}
  let store, wrapper

  beforeEach(()=>{
    store = storeFactory(initialState)
    wrapper = shallow(<Todo store={store} />)
  })

  it('renders without error', () => {
    const todoComponent = findByTestAttr(wrapper, 'todo-component')
    expect(todoComponent.length).toBe(1)
  })

  it('does not render a list of to dos when array is empty', () => {
    const todoList = findByTestAttr(wrapper, 'todo-list')
    expect(todoList.children().length).toBe(0)
  })

  it('renders a list of to dos when in array', () => {
    const todoList = findByTestAttr(wrapper, 'todo-list')
    expect(todoList.length).toBe(2)
  })

  it('renders an add button', () => {
    const addButton = findByTestAttr(wrapper, 'add-button').first()
    expect(addButton.length).toBe(1)
  })


  it('adds a to do to list when clicking on add button', () => {
    const addButton = findByTestAttr(wrapper, 'add-button').first()
    addButton.simulate('click')
    const todoList = findByTestAttr(wrapper, 'todo-list')
    expect(todoList.length).toBe(3)
  })

})