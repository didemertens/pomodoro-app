import React from 'react'
import PropTypes from 'prop-types'

const Timeup = ({ timeUp }) => {
  return (
    <div data-test="component-timeup">
      {timeUp
        ?
        <p data-test="timeup-message">Time is up!</p>
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