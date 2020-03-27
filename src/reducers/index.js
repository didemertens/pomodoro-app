import { combineReducers } from 'redux'

const minutesReducer = (minutes = 25) => {
  return minutes
}

const secondsReducer = (seconds = 0) => {
  return seconds
}

const clickButtonReducer = (buttonClicked = false, action) => {
  if (action.type === 'BUTTON_CLICKED') {
    return action.payload
  }
  return buttonClicked
}

export default combineReducers({
  minutes: minutesReducer,
  seconds: secondsReducer,
  startTimer: clickButtonReducer
})