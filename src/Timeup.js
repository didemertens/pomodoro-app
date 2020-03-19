import React from 'react'

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

export default Timeup