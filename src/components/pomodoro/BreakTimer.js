import React from 'react'
import { connect } from 'react-redux'

import { GradientButton } from '../../styles/common/gradientButton'
import { clickStart, decreaseMinutes, decreaseSeconds, setTimeUp, setBreakTime } from '../../actions'

class BreakTimer extends React.Component {
  componentDidMount() {
    if ((this.props.pomodoros + 1) % 4 === 0) {
      this.props.decreaseMinutes(30)
    } else {
      // ! remove seconds later
      // this.props.decreaseMinutes(5)
      this.props.decreaseSeconds(2)
    }
  }

  handleTimer = () => {
    if (!this.props.startTimer) {
      this.timeInterval = setInterval(() => {
        const { seconds, minutes } = this.props
        if (seconds > 0) {
          this.props.decreaseSeconds(this.props.seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            this.props.clickStart(this.props.startTimer)
            // ! reset time later
            this.props.decreaseMinutes(0)
            this.props.decreaseSeconds(2)
            this.props.setTimeUp(false)
            this.props.setBreakTime(true)
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

  render() {
    return (
      <div className="timer-main-container" data-test="component-breaktimer">
        <div className="timer-display" data-test="display-timer">
        {`${this.props.minutes.toString().length <= 1 ? `0${this.props.minutes}` : this.props.minutes}:${this.props.seconds.toString().length <= 1 ? `0${this.props.seconds}` : this.props.seconds}`}
        </div>
        <GradientButton
          data-test="start-button"
          onClick={() => { this.props.clickStart(this.props.startTimer); this.handleTimer() }}
        >
          {this.props.startTimer
            ?
            'Pause'
            :
            'Start'}
        </GradientButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minutes: state.minutes,
    seconds: state.seconds,
    pomodoros: state.pomodoros,
    startTimer: state.startTimer
  }
}
export default connect(
  mapStateToProps,
  {
    clickStart,
    decreaseMinutes,
    decreaseSeconds,
    setTimeUp,
    setBreakTime
  })
  (BreakTimer)