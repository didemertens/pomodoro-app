import React from 'react'
import PropTypes from 'prop-types'

class BreakTimer extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    startClicked: false,
    breakOver: false
  }

  componentDidMount() {
    if ((this.props.pomodoros + 1) % 4 === 0) {
      this.setState({ minutes: 30 })
    } else {
      this.setState({ minutes: 5 })
    }
  }

  handleClick = () => {
    if (!this.state.startClicked) {
      this.timeInterval = setInterval(() => {
        const { seconds, minutes } = this.state
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1
          }))
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.timeInterval)
            this.setState({ startClicked: false })
            this.setState({ breakOver: true })
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59
            }))
          }
        }
      }, 1000)
    } else {
      clearInterval(this.timeInterval)
    }
    this.setState({ startClicked: !this.state.startClicked })
  }

  render() {
    const { startClicked, minutes, seconds, breakOver } = this.state
    return (
      <div data-test="component-breaktimer">
        <div data-test="display-timer">
          {`${minutes}:${seconds.toString().length <= 1 ? `0${seconds}` : seconds}`}
        </div>
        {
          !breakOver &&
          <button
            data-test="start-button"
            onClick={this.handleClick}
          >
            {startClicked
              ?
              'Pause'
              :
              'Start'}
          </button>
        }
      </div>
    )
  }
}

BreakTimer.propTypes = {
  pomodoros: PropTypes.number.isRequired,
}

export default BreakTimer