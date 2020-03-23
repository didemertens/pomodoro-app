import React from 'react'

class BreakTimer extends React.Component {

  render() {
    return (
      <div data-test="component-breaktimer">
        {
          this.props.pomodoros % 4 === 0
            ?
            <div data-test="long-break-timer">
              <p>Long Break</p>
            </div>
            :
            <div data-test="short-break-timer">
              <p>Short Break</p>
            </div>
        }
      </div>
    )
  }
}

export default BreakTimer