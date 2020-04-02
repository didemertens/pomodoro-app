import React from 'react'
import { connect } from 'react-redux'

import BreakTimer from './BreakTimer'

const Timeup = (props) => {
  return (
    <div data-test="component-timeup">
      {
        props.pomodoros && props.pomodoros % 4 === 0
          ?
          <p data-test="timeup-message-long">Time for a long break!</p>
          :
          <p data-test="timeup-message-short">Time for a short break!</p>
      }
      <BreakTimer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pomodoros: state.pomodoros
  }
}

export default connect(mapStateToProps)(Timeup)