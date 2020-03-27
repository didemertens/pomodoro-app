import React from 'react'
import { connect } from 'react-redux'
import { clickStart } from '../actions'

class PomTimer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Pomodoro</h1>
        <p data-test="time-display">{`${this.props.minutes}:${this.props.seconds.toString().length <= 1 ? `0${this.props.seconds}` : this.props.seconds}`}</p>
        <button
          data-test="start-button"
          onClick={() => this.props.clickStart(this.props.startTimer)}
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minutes: state.minutes,
    seconds: state.seconds,
    startTimer: state.startTimer
  }
}

export default connect(mapStateToProps, { clickStart })(PomTimer)