import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Todo from './Todo'

const TodoList = props => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        {...todo}
        key={todo.id}
        id={todo.id}
        text={todo.value}
        completed={todo.completed}
      />
    )}
  </ul>
)

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default connect(mapStateToProps)(TodoList);
