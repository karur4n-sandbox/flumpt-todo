import * as React from 'react';
import { Component } from 'flumpt';
import classNames from 'classnames';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleToggle() {
    this.dispatch('todo:toggle', this.props);
  }

  handleRemoveClick(e) {
    e.preventDefault();
    this.dispatch('todo:remove', this.props);
  }

  render() {
    const todoTitleClass = classNames({
      title__todo: true,
      'title__todo--completed': this.props.completed,
    });

    return (
      <div className="todo" style={styles.container}>
        <input type="checkbox" value={this.props.title}
          checked={this.props.completed} onChange={this.handleToggle}
        />
        <span className={todoTitleClass}>{this.props.title}</span>
        <span className="remove__button" onClick={this.handleRemoveClick}>[x]</span>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid red'
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};
