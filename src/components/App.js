import React from 'react';

import Timeup from './Timeup';
import PomTimer from './PomTimer';

class App extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    startClicked: false,
    timeUp: false,
    pomodoros: 0,
    timeInterval: null
  }

  handleClick = () => {
    if (this.state.timeUp) {
      this.setState({ minutes: 25 })
      this.setState({ seconds: 0 })
      this.setState({ timeUp: false })
    }
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
            this.setState({ timeUp: true })
            this.setState({ pomodoros: this.state.pomodoros + 1 })
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
    this.setState({ timeInterval: this.timeInterval })
  }

  handleReset = () => {
    this.setState({ minutes: 25 })
    this.setState({ seconds: 0 })
    this.setState({ startClicked: false })
    clearInterval(this.state.timeInterval)
  }

  render() {
    const { startClicked, timeUp, pomodoros } = this.state
    return (
      <div data-test="component-app">
        <PomTimer />
      </div>
      // <div data-test="component-app">
      //   <h1>Pomodoro</h1>
      //   <h4 data-test="time-display">{`${this.state.minutes}:${this.state.seconds.toString().length <= 1 ? `0${this.state.seconds}` : this.state.seconds}`}</h4>
      //   <button
      //     data-test="start-button"
      //     onClick={this.handleClick}
      //   >
      //     {startClicked
      //       ?
      //       'Pause'
      //       :
      //       'Start'}
      //   </button>
      //   <button
      //     data-test="reset-button"
      //     onClick={this.handleReset}
      //   >
      //     Reset
      //   </button>
      //   <Timeup
      //     timeUp={timeUp}
      //     pomodoros={pomodoros}
      //   />
      // </div>
    )
  }
}

export default App;
