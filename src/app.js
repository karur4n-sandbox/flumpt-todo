import * as React from 'react';
import { Flux } from 'flumpt';
import clone from 'clone';
import genId from 'gen-id';

import TodoApp from './components/TodoApp';

export default class App extends Flux {
  subscribe() {
    this.on('todo:create', (newTodoTitle) => {
      const newTodo = {
        title: newTodoTitle,
        completed: false,
        id: genId('nnnnnnnnnnnnc').generate(),
      };
      this.update(({ todos }) => {
        return { todos: todos.concat(newTodo) };
      });
    });

    this.on('todo:toggle', (todo) => {
      const newTodos = this.state.todos.map((t) => {
        const newTodo = clone(t);
        if (todo.id === t.id) {
          newTodo.completed = !t.completed;
          return newTodo;
        }
        return t;
      });

      this.update(() => {
        return { todos: newTodos };
      });
    });

    this.on('todo:remove', (todo) => {
      const newTodos = this.state.todos.filter((t) => {
        return (t.id !== todo.id) ? true : false;
      });

      this.update(() => {
        return { todos: newTodos };
      });
    });
  }

  render(state) {
    return <TodoApp {...state} />;
  }
}
