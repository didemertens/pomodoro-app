import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import { GradientButton } from '../../styles/common/gradientButton'
import { clickStart, decreaseMinutes, decreaseSeconds, setTimeUp, setPomodoros, setBreakTime } from '../../actions'

class PomTimer extends React.Component {
  handleTimer = () => {
    this.props.setBreakTime(false)
    if (!this.props.startTimer) {
      this.props.setTimeUp(false)
      this.timeInterval = setInterval(() => {
        const { seconds, minutes } = this.props
        if (seconds > 0) {
          this.props.decreaseSeconds(this.props.seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            this.props.setTimeUp(true)
            this.props.clickStart(this.props.startTimer)
            this.props.setPomodoros(this.props.pomodoros + 1)
            clearInterval(this.timeInterval)
          } else {
            this.props.decreaseMinutes(this.props.minutes - 1)
            this.props.decreaseSeconds(59)
          }
        }
      }, 1000)
    } else {
      clearInterval(this.timeInterval)
    }
  }

  handleReset = () => {
    if (this.props.minutes === 25 && this.props.seconds === 0) return
    if (this.props.startTimer) this.props.clickStart(this.props.startTimer)
    this.props.decreaseMinutes(25)
    this.props.decreaseSeconds(0)
    clearInterval(this.timeInterval)
  }

  render() {
    return (
      <div className="timer-main-container" data-test="pomtimer-component">
        <p className="timer-display" data-test="time-display">
          {`${this.props.minutes.toString().length <= 1 ? `0${this.props.minutes}` : this.props.minutes}:${this.props.seconds.toString().length <= 1 ? `0${this.props.seconds}` : this.props.seconds}`}
        </p>
        <Grid 
          container
        >
          <Grid item xs={6}>
            <GradientButton
              size="large"
              data-test="start-button"
              onClick={() => { this.props.clickStart(this.props.startTimer); this.handleTimer() }}
            >
              {this.props.startTimer
                ?
                'Pause'
                :
                'Start'}
            </GradientButton>
          </Grid>
          <Grid item xs={6}>
            <GradientButton
              size="large"
              data-test="reset-button"
              onClick={this.handleReset}
            >
              Reset
            </GradientButton>
          </Grid>
        </Grid>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minutes: state.minutes,
    seconds: state.seconds,
    startTimer: state.startTimer,
    timeUp: state.timeUp,
    pomodoros: state.pomodoros,
    breakTimer: state.breakTimer
  }
}

export default connect
  (mapStateToProps,
    {
      clickStart,
      decreaseMinutes,
      decreaseSeconds,
      setTimeUp,
      setPomodoros,
      setBreakTime
    })
  (PomTimer)