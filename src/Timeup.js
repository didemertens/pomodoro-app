import React from 'react'
import PropTypes from 'prop-types'
import BreakTimer from './BreakTimer'

const Timeup = ({ timeUp, pomodoros }) => {
  return (
    <div data-test="component-timeup">
      {timeUp
        ?
        <>
          {
            pomodoros % 4 === 0
              ?
              <p data-test="timeup-message">Time for a long break!'</p>
              :
              <p data-test="timeup-message">Time for a short break!</p>
          }
          <BreakTimer pomodoros={pomodoros} />
        </>
        :
        ''
      }
    </div>
  )
}

Timeup.propTypes = {
  timeUp: PropTypes.bool.isRequired,
}

export default Timeup