import React from 'react'
import { connect } from 'react-redux'

import Timeup from './Timeup'
import PomTimer from './PomTimer'

const App = (props) => {
  return (
    <div data-test="component-app">
      <PomTimer />
      {props.timeUp &&
        <Timeup />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    timeUp: state.timeUp
  }
}

export default connect(mapStateToProps)(App)
