import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'

import '../styles/main.scss'
import Timeup from './Timeup'
import PomTimer from './PomTimer'

const App = (props) => {
  return (
    <Grid
      container 
      justify = "center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper
        elevation={3}
        >
        <div className="app-main-container" data-test="component-app">
          {'🍅'.repeat(props.pomodoros)}
          <h1 className="app-main-title">Your productive day starts here</h1>
          {props.breakOver && 'Break over. Time to get back to work!'}
          {!props.timeUp ?
            <PomTimer />
            :
            <Timeup />
          }
        </div>
      </Paper>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    timeUp: state.timeUp,
    pomodoros: state.pomodoros,
    breakOver: state.breakOver
  }
}

export default connect(mapStateToProps)(App)
