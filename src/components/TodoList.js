import * as React from 'react';
import { Component } from 'flumpt';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div className="todoList">
        {todos}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};
