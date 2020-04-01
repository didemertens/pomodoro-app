import React from 'react'
import { connect } from 'react-redux'
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"

import Timeup from './Timeup'
import PomTimer from './PomTimer'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
)

const App = (props) => {
  return (
    <Provider store={store}>
      <div data-test="component-app">
        <h1>Pomodoro</h1>
        {'🍅'.repeat(props.pomodoros)}
        {props.breakOver && 'Break over. Time to get back to work!'}
        {!props.timeUp ?
          <PomTimer />
          :
          <Timeup />
        }
      </div>
    </Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    timeUp: state.timeUp,
    pomodoros: state.pomodoros,
    breakOver: state.breakOver
  }
}

export default connect(mapStateToProps)(App)
