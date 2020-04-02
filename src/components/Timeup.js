import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { Animated } from 'react-animated-css'

import BreakTimer from './BreakTimer'

const Timeup = (props) => {
  return (
    <Grid
    container 
    justify = "center"
    alignItems="center"
    >
      <div className="timeup-main-container" data-test="component-timeup">
        {
          props.pomodoros && props.pomodoros % 4 === 0
            ?
            <Animated animationIn="zoomIn"  animationInDuration={1000} isVisible={true}>
              <p data-test="timeup-message-long">Time for a long break</p>
            </Animated>
            :
            <Animated animationIn="zoomIn"  animationInDuration={1000} isVisible={true}>
              <p data-test="timeup-message-short">Time for a short break</p>
            </Animated>
        }
        <BreakTimer />
      </div>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    pomodoros: state.pomodoros
  }
}

export default connect(mapStateToProps)(Timeup)