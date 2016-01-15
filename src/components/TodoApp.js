import * as React from 'react';
import { Component } from 'flumpt';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoList {...this.props}/>
        <TodoForm {...this.props}/>
      </div>
    );
  }
}
