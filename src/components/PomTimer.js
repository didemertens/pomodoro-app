import React from 'react'
import { connect } from 'react-redux'
import { clickStart, decreaseMinutes, decreaseSeconds, setTimeUp, setPomodoros } from '../actions'

class PomTimer extends React.Component {

  // handleReset = () => {
  //   this.setState({ minutes: 25 })
  //   this.setState({ seconds: 0 })
  //   this.setState({ startClicked: false })
  //   clearInterval(this.state.timeInterval)
  // }

  handleTimer = () => {
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
            this.props.decreaseMinutes(0)
            this.props.decreaseSeconds(2)
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
    // this.setState({ timeInterval: this.timeInterval })
  }

  render() {
    console.log(this.props)
    return (
      <div data-test="pomtimer-component">
        <h1>Pomodoro</h1>
        {'🍅'.repeat(this.props.pomodoros)}
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
    pomodoros: state.pomodoros
  }
}

export default connect
  (mapStateToProps,
    {
      clickStart,
      decreaseMinutes,
      decreaseSeconds,
      setTimeUp,
      setPomodoros
    })
  (PomTimer)