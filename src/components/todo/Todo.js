import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import MenuIcon from '@material-ui/icons/Menu'
import { TextField, Checkbox, Menu, MenuItem, Button } from '@material-ui/core'

import { addToList, deleteToList, checkTodo, errorForm, removeAllTasks } from '../../actions'

class Todo extends React.Component {
  state = {
    menuOpen: false,
    anchorEl: null,
    showDelete: false
  }

  handleMenu = (e) => {
    this.setState({menuOpen: !this.state.menuOpen})
    this.setState({anchorEl: e.currentTarget})
  }

 handleClose = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  showDeleteTaskIcon = () => [
    this.setState({ showDelete: true })
  ]

  // 

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
    console.log(this.state)
    return (
      <div className="todo-main-container" data-test="todo-component">
        <div className="todo-container-header">
          <div className="todo-container-header--titlemenu">
            <h1>To do:</h1>
            <div className="todo-container-header--menu">
              <MenuIcon onClick={this.handleMenu} />
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={this.state.menuOpen}
                onClose={this.handleClose}
              >
                <MenuItem 
                onClick={() => {
                  this.handleClose()
                  this.showDeleteTaskIcon()
                }}
                >
                  Remove a task</MenuItem>
                <MenuItem onClick={() => {
                  this.handleClose()
                  this.props.removeAllTasks()
                }}
                  >
                    Remove all tasks</MenuItem>
                {/* <MenuItem onClick={this.handleClose}>Logout</MenuItem> */}
              </Menu>
            </div>





          </div>
          <div data-test="todo-list-container">
            {
              this.props.todoList.length === 0
              ?
              <p>Nothing here!</p>
              :
              <ul className="todo-list" data-test="todo-list">
                {this.props.todoList.map((todo, index) => (
                  <li key={index}>
                    <Checkbox
                      checked={todo.checked}
                      onChange={() => this.props.checkTodo(index, !todo.checked, this.props.todoList)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <p className={todo.checked ? 'todo-list-task todo-list-task--checked' : 'todo-list-task'}>{todo.text}</p>
                    <button
                      className="todo-button--delete"
                      data-test="delete-button"
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.deleteToList(index, this.props.todoList)
                      }}
                    >
                      {this.state.showDelete && <DeleteForeverSharpIcon />}
                    </button>
                  </li>
                ))}
              </ul>
            }
            {this.state.showDelete && <Button 
            variant="contained" 
            color="primary"
            onClick={() => this.setState({ showDelete: false })}
            >
              Done</Button>}
          </div>
        </div>
        <form 
          className="todo-form--add"
          onSubmit={this.handleSubmit}
          >
          <TextField 
            className="todo-textfield"
            color="secondary" 
            error={this.props.errors}
            helperText={this.props.errors ? 'Empty field!' : 'Add a task'}
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
      errorForm,
      removeAllTasks
    })
  (Todo)