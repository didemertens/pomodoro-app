import React from 'react';
import './App.css';

import Timeup from './Timeup';

class App extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    timeUp: false
  }

  handleClick = () => {
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
          this.setState({ timeUp: true })
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  render() {
    return (
      <div data-test="component-app">
        <h1>Pomodoro</h1>
        <h4 data-test="time-display">{`${this.state.minutes}:${this.state.seconds.toString().length <= 1 ? `0${this.state.seconds}` : this.state.seconds}`}</h4>
        <button
          data-test="start-button"
          onClick={this.handleClick}
        >
          Start</button>
        <Timeup timeUp={this.state.timeUp} />
      </div>
    )
  }
}

export default App;
