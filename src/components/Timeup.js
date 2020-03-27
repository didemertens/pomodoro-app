import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BreakTimer from './BreakTimer'

const Timeup = (props) => {
  return (
    <div data-test="component-timeup">
      {
        props.pomodoros && props.pomodoros % 4 === 0
          ?
          <p data-test="timeup-message">Time for a long break!</p>
          :
          <p data-test="timeup-message">Time for a short break!</p>
      }
      <BreakTimer />
    </div>
  )
}

// Timeup.propTypes = {
//   timeUp: PropTypes.bool.isRequired,
//   pomodoros: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => {
  return {
    pomodoros: state.pomodoros
  }
}

export default connect(mapStateToProps)(Timeup)