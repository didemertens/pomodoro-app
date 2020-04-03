import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { Animated } from 'react-animated-css'

import '../styles/main.scss'
import Timeup from './pomodoro/Timeup'
import PomTimer from './pomodoro/PomTimer'
import Todo from './todo/Todo'

const App = (props) => {
  return (
    <Grid 
    container 
    className="app-outer-container">
      <h1 className="app-main-title">Pomochore</h1>
      <Grid
        container 
      >
        <Grid
          item md={6}
          container 
          justify = "center"
          alignItems="center"
          direction="column"
          >
            <Paper
              elevation={3}
              >
              <div className="app-main-container" data-test="component-app">
              {props.breakOver && 
                <Animated animationIn="zoomIn"  animationInDuration={1000} isVisible={true}>
                  <p className="app-break-subtitle">Time to get back to work</p>
                </Animated>
                }
                {!props.timeUp ?
                  <PomTimer />
                  :
                  <Timeup />
                }
              </div>
            </Paper>
          </Grid>
          <Grid
          item md={6}
          container 
          justify = "center"
          alignItems="center"
          >
            <Paper
              elevation={3}
            >
              <div className="app-todo-container">
                <Todo />
              </div>
            </Paper>
          </Grid>
          <p className="app-pomo-amount">{'🍅'.repeat(props.pomodoros)}</p>
      </Grid>
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
