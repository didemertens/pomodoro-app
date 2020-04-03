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

export const setBreakTime = (breakOver) => {
  return {
    type: 'SET_BREAKOVER',
    payload: breakOver
  }
} 

// FOR TODO LIST
export const addToList = (text, checked, todoArray) => {
  return {
    type: 'ADD_TODO',
    todo: {
      text: text,
      checked: checked
    },
    todoArray: todoArray
  }
}

export const deleteToList = (index, todoArray) => {
  return {
    type: 'DELETE_TODO',
    index: index,
    todoArray: todoArray
  }
}

export const checkTodo = (index, checked, todoArray) => {
  return {
    type: 'CHECK_TODO',
    todo: {
      index: index,
      checked: checked
    },
    todoArray: todoArray
  }
}