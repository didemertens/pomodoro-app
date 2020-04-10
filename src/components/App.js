import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { Animated } from 'react-animated-css'
import { Helmet } from 'react-helmet'
import ReactTooltip from 'react-tooltip'

import '../styles/main.scss'
import Timeup from './pomodoro/Timeup'
import PomTimer from './pomodoro/PomTimer'
import Todo from './todo/Todo'

const App = (props) => {
  return (
    <>
    <Helmet defer={false}>
      { 
      props.startTimer &&
      <title>{`${props.minutes.toString().length <= 1 ? `0${props.minutes}` : props.minutes}:${props.seconds.toString().length <= 1 ? `0${props.seconds}` : props.seconds}`}</title>
      }
    </Helmet>
    <Grid 
    container 
    className="app-outer-container">
      <div className="app-main-header-color">
        <Typography variant="h4" className="app-main-title">Pomochore</Typography>
      </div>
      <Grid
        container 
      >
        <Grid
          className="app-grid"
          item md={6}
          container 
          justify = "center"
          alignItems="center"
          direction="column"
          >
            <Paper
              elevation={3}
              >
              <HelpOutlineIcon className="app-help-icon" data-tip data-for='global' />
              <ReactTooltip place='right' effect='solid' id='global' aria-haspopup='true' type='warning'>
                <p>Set a task and start the timer. After 25 minutes you'll get a short or long break, 
                  <br />
                  depending on how many times you've completed a session (called 'pomodoro').</p>
                <p>Your task list will be saved so you can use it next time you visit Pomochore.</p>
                <p>Happy working!</p>
              </ReactTooltip>
              <div className="app-main-container" data-test="component-app">
              {props.breakOver && 
                <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                  <p className="app-break-subtitle">Time to get back to work</p>
                </Animated>
                }
                {!props.breakOver && !props.timeUp && 
                <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                  <p className="app-break-subtitle">
                    <span role="img" aria-label="Tomato">
                      🍅
                    </span>
                  </p>
                </Animated>
                }
                {!props.timeUp ?
                  <PomTimer />
                  :
                  <Timeup />
                }
              </div>
            </Paper>
            <p className="app-pomo-amount">{'🍅'.repeat(props.pomodoros)}</p>
          </Grid>

          <Grid
            className="app-grid"
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
          
      </Grid>
    </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    startTimer: state.startTimer,
    minutes: state.minutes,
    seconds: state.seconds,
    timeUp: state.timeUp,
    pomodoros: state.pomodoros,
    breakOver: state.breakOver
  }
}

export default connect(mapStateToProps)(App)
