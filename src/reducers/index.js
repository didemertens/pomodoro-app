import { combineReducers } from 'redux'

// ! change default minutes and seconds later

const minutesReducer = (minutes = 0, action) => {
  if (action.type === 'DECREASE_MINUTES') {
    return action.payload
  }
  return minutes
}

const secondsReducer = (seconds = 2, action) => {
  if (action.type === 'DECREASE_SECONDS') {
    return action.payload
  }
  return seconds
}

// ! Change to false
const timeUpReducer = (timeUp = true, action) => {
  if (action.type === 'SET_TIMEUP') {
    return action.payload
  }
  return timeUp
}

const clickButtonReducer = (buttonClicked = false, action) => {
  if (action.type === 'BUTTON_CLICKED') {
    return action.payload
  }
  return buttonClicked
}

const pomodorosReducer = (pomodoros = 0, action) => {
  if (action.type === 'SET_POMODOROS') {
    return action.payload
  }
  return pomodoros
}

const breakOverReducer = (breakOver = false, action) => {
  if (action.type === 'SET_BREAKOVER') {
    return action.payload
  }
  return breakOver
}

export default combineReducers({
  minutes: minutesReducer,
  seconds: secondsReducer,
  startTimer: clickButtonReducer,
  timeUp: timeUpReducer,
  pomodoros: pomodorosReducer,
  breakOver: breakOverReducer
})