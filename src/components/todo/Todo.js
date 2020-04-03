import React from 'react'
import { connect } from 'react-redux'

import { addToList } from '../../actions'
import { GradientButton } from '../../styles/common/gradientButton'

class Todo extends React.Component {

  handleAdd = () => {
    return 'added'
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
        <GradientButton
              size="large"
              data-test="add-button"
              onClick={this.handleAdd}
            >
              Add
            </GradientButton>
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