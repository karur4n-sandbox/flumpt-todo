import * as React from 'react';
import { Component } from 'flumpt';
import classNames from 'classnames';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.dispatch('todo:toggle', this.props);
  }

  render() {
    const todoTitleClass = classNames({
      title__todo: true,
      'title__todo--completed': this.props.completed,
    });

    return (
      <div className="todo">
        <input type="checkbox" value={this.props.title}
          checked={this.props.completed} onChange={this.handleToggle}
        />
        <span className={todoTitleClass}>{this.props.title}</span>
      </div>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};
