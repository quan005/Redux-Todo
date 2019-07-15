import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {toggleTodo} from '../Actions'

const Todo = props => {

    const toggleHandler = event => {
        event.preventDefault();
        props.toggleTodo(props.id);
    }

    return (

        <li
            onClick={toggleHandler}
            style={{ textDecoration: props.completed ? 'line-through' : 'none'}}
        >
            {props.text}

        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}


export default connect(null, mapDispatchToProps)(Todo)
