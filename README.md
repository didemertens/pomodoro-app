# Pomochore
This is a website with both a Pomodoro timer and a list of tasks. I'm still building it and am using React and Redux with Enzyme and Jest for testing.

# Building with:
* React
* Redux
* Enzyme
* Jest
* Material-UI

# Deployment
The website is deployed on Heruko and can be found [here](https://pomochore.herokuapp.com/)

# Getting started
Clone or download the repo. Run `yarn` from the root directory and then run `yarn start`. The project will run on localhost:3000.

# Pomodoro timer
The Pomodoro technique is a time management method created by Francesco Cirillo. It uses a timer which is set to 25 minutes. Before you start, you decide each time what task to work on. After a session (which is called a 'pomodoro' after the tomato-shaped kitchen timer Cirillo used), you get either a short (5 minutes) or long break (30 minutes). This depends on how many sessions you have done. After 4 pomodoros, you get a long break. 

## Testing
I build the Pomodoro timer using test-driven development. Because I'm using Redux, I first created a fake Store to test all of the components. Most tests were straight forward, but because I'm using intervals for the timer I did run into a few problems. In the end, I was able to test the timers with Jest's timer mocks. Jest made it possible to for example test whether the time actually decreases when the start button has been clicked:

```
it('time decreases by 1 second when clicking start button', () => {
    // find button and click
    let startButton = findByTestAttr(wrapper, 'start-button').first()
    startButton.simulate('click')
  
    // check value after 1 second on display
    act(() => jest.advanceTimersByTime(1000))
    const timeDisplay = findByTestAttr(wrapper, 'time-display')
    expect(timeDisplay.text()).toContain('24:59')
  })
```

# Task list
Users can add tasks to their lists and mark these as done as well. I created one reducer function to perform all of the actions. 

```
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
  } else if (action.type === 'REMOVE_ALL_TASKS') {
    return []
}
  return todoList
}
```