import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import { Input } from '@material-ui/core'

import { addToList, deleteToList } from '../../actions'

class Todo extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const input = ReactDOM.findDOMNode(this.userEntry)
    this.props.addToList(input.value, this.props.todoList)
    input.value = ''
  }

  render() {
    return (
      <div data-test="todo-component">
        <h1>To do:</h1>
        <div data-test="todo-list-container">
          {
            this.props.todoList.length === 0
            ?
            'Add a task!'
            :
            <ul data-test="todo-list">
              {this.props.todoList.map((todo, index) => (
                <li key={index}>
                  {todo}
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
          <Input type="text" color="secondary" inputRef={ref => this.userEntry = ref}/>
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
    todoList: state.todoList
  }
}

export default connect
  (mapStateToProps,
    {
      addToList,
      deleteToList
    })
  (Todo)