// Action creator, click start btn, returns an action
export const clickStart = (timerRuns) => {
  return {
    type: 'BUTTON_CLICKED',
    payload: !timerRuns
  }
}

export const decreaseMinutes = (minutes) => {
  return {
    type: 'DECREASE_MINUTES',
    payload: minutes
  }
}

export const decreaseSeconds = (seconds) => {
  return {
    type: 'DECREASE_SECONDS',
    payload: seconds
  }
}

export const setTimeUp = (timeUp) => {
  return {
    type: 'SET_TIMEUP',
    payload: timeUp
  }
}

export const setPomodoros = (pomodoros) => {
  return {
    type: 'SET_POMODOROS',
    payload: pomodoros
  }
}