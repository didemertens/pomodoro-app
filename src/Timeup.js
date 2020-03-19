import React from 'react'

const Timeup = (props) => {
  if (props.timeUp) {
    return (
      <div data-test="component-timeup">
        <p data-test="timeup-message">Time is up!</p>
      </div>
    )
  } else {
    return (
      <div data-test="component-timeup" />
    )
  }
}

export default Timeup