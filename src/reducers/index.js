import { combineReducers } from 'redux'

// ! change default minutes to 25 and seconds to 0 later

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
const timeUpReducer = (timeUp = false, action) => {
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

// FOR TODO
const todoReducer = (todoList = [], action) => {
  if (action.type === 'ADD_TODO') {
    const updatedArray = [...action.todoArray]
    updatedArray.push(action.todo)
    return updatedArray
  } else if (action.type === 'DELETE_TODO') {
    const updatedArray = action.todoArray.filter((el, i) => i !== action.index)
    return updatedArray
  }  else if (action.type === 'CHECK_TODO') {
    return action.todoArray.map((el, i) => {
      if (i === action.todo.index) {
        const updatedTodo = {
          ...el,
          checked: action.todo.checked
        }
        return updatedTodo
      } else {
        return el
      }
    })
  } else if (action.type === 'REMOVE_ONE_TASK') {
    return todoList
  } else if (action.type == 'REMOVE_ALL_TASKS') {
    return []
}
  return todoList
}

const formReducer = (errors = false, action) => {
  if (action.type === 'ERROR_FORM') {
    return action.payload
  }
  return errors
}

export default combineReducers({
  minutes: minutesReducer,
  seconds: secondsReducer,
  startTimer: clickButtonReducer,
  timeUp: timeUpReducer,
  pomodoros: pomodorosReducer,
  breakOver: breakOverReducer,
  todoList: todoReducer,
  errors: formReducer,
})