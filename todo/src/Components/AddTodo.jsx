import React from 'react'
import { connect } from 'react-redux'

import { addTodoItem, inputHandler, clearInput, deleteTodo } from '../Actions'

const AddTodo = props => {

    const addHandler = event => {
        event.preventDefault();
        const id = props.todos.length + 1;
        props.addTodoItem(props.inputText, id);
        props.clearInput();
    }

    const deleteHandler = event => {
        event.preventDefault();
        props.deleteTodo();
    }
    
    //    const handleCompleted = event => {
    //       let todoArr = props.todos.filter( todo => {
    //         return todo.completed !== true
    //       })
    //       props.clearCompleted(todoArr);
    //   }

    return (
        <div>
            <form onSubmit={addHandler}>
                <input type="text" value={props.inputText} placeholder="Enter a new todo" onChange={props.inputHandler} />
                <button type="submit"> Add Todo </button>
                <button type="button" onClick= {deleteHandler}>Clear Completed</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        inputText: state.inputText
    }
}

export default connect(mapStateToProps, {addTodoItem, deleteTodo, inputHandler, clearInput})(AddTodo)
