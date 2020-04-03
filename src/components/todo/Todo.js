import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import { TextField, Checkbox } from '@material-ui/core'

import { addToList, deleteToList, checkTodo, errorForm } from '../../actions'

class Todo extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const input = ReactDOM.findDOMNode(this.userEntry)
    if (input.value) {
      this.props.addToList(input.value, false, this.props.todoList)
      input.value = ''
    } else {
      this.props.errorForm(true)
    }
  }
  
  render() {
    return (
      <div data-test="todo-component">
        <h1>To do:</h1>
        <div data-test="todo-list-container">
          {
            this.props.todoList.length === 0
            ?
            'Nothing here!'
            :
            <ul data-test="todo-list">
              {this.props.todoList.map((todo, index) => (
                <li key={index}>
                  <Checkbox
                    checked={todo.checked}
                    onChange={() => this.props.checkTodo(index, !todo.checked, this.props.todoList)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  {todo.text}
                  <button
                    className="todo-button--delete"
                    data-test="delete-button"
                    onClick={(e) => {
                      e.preventDefault()
                      this.props.deleteToList(index, this.props.todoList)
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              ))}
            </ul>
          }
        </div>
        <form 
          onSubmit={this.handleSubmit}
          >
          <TextField 
          type="text"
          label="Add a task" 
          color="secondary" 
          error={this.props.errors}
          helperText={this.props.errors && 'Empty field!'}
          inputRef={ref => this.userEntry = ref}
          onChange={() => this.props.errorForm(false)}
          />
          <button 
            className="todo-button--add"
            data-test="add-button"
          >
            <AddCircleOutlinedIcon />
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    errors: state.errors
  }
}

export default connect
  (mapStateToProps,
    {
      addToList,
      deleteToList,
      checkTodo,
      errorForm
    })
  (Todo)