import React from 'react'
import { connect } from 'react-redux'
import { clickStart, decreaseMinutes, decreaseSeconds, setTimeUp, setPomodoros, setBreakTime } from '../actions'

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
            // ! change time later
            this.props.decreaseMinutes(25)
            this.props.decreaseSeconds(0)
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
    // ! change time later
    this.props.decreaseMinutes(25)
    this.props.decreaseSeconds(0)
    this.props.clickStart(this.props.startTimer)
    clearInterval(this.timeInterval)
  }

  render() {
    return (
      <div data-test="pomtimer-component">
        <p data-test="time-display">{`${this.props.minutes}:${this.props.seconds.toString().length <= 1 ? `0${this.props.seconds}` : this.props.seconds}`}</p>
        <button
          data-test="start-button"
          onClick={() => { this.props.clickStart(this.props.startTimer); this.handleTimer() }}
        >
          {this.props.startTimer
            ?
            'Pause'
            :
            'Start'}
        </button>
        <button
          data-test="reset-button"
          onClick={this.handleReset}
        >
          Reset
        </button>
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