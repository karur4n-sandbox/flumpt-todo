import * as React from 'react'
import { Component } from 'flumpt'

export default class TodoForm extends Component {
  constructor() {
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.todoInput = document.querySelector('#js-todo-input')
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault()
      this.dispatch('todo:create', this.todoInput.value)
      this.todoInput.value = ""
    }
  }

  handleClick(e) {
    this.dispatch('todo:create', this.todoInput.value)
    this.todoInput.value = ""
  }
  render() {
    return (
      <div>
        <input type="text" id="js-todo-input" placeholder="Todo title" onKeyPress={this.handleKeyPress} />
        <input type="submit" value="Add" onClick={this.handleClick} />
      </div>
    )
  }
}
