import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

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
            <p data-test="timeup-message-long">Time for a long break</p>
            :
            <p data-test="timeup-message-short">Time for a short break</p>
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