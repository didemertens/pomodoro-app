import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { addToList } from '../../actions'
import { GradientButton } from '../../styles/common/gradientButton'

class Todo extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const input = ReactDOM.findDOMNode(this.userEntry)
    this.props.addToList(input.value, this.props.todoList)
    input.value = ''
  }

  render() {
    console.log(this.props.todoList)
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
                <li key={index}>{todo}</li>
              ))}
            </ul>
          }
        </div>
        <form onSubmit={this.handleSubmit}
          >
          <input type="text" ref={ref => this.userEntry = ref}/>
          <button
            data-test="add-button"
            >
              Add
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
      addToList
    })
  (Todo)