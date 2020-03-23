import React from 'react'
import PropTypes from 'prop-types'

const Timeup = ({ timeUp, pomodoros }) => {
  return (
    <div data-test="component-timeup">
      {timeUp
        ?
        <>
          <p data-test="timeup-message">
            {
              pomodoros % 4 === 0
                ?
                'Time for a long break!'
                :
                'Time for a short break!'
            }
          </p>
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