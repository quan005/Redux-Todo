// let nextItem = 0;
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const INPUT_HANDLER = 'INPUT_HANDLER';
export const CLEAR_INPUT = 'CLEAR_INPUT';

export function addTodoItem(text, id) {
  // Fill in this function
    return {
        type: ADD_TODO_ITEM,
        payload: [
            {
                id: id,
                value: text,
                completed: false
            }
        ]
    }
}

export function inputHandler(event) {
    // Fill in this function
    return {
        type: INPUT_HANDLER,
        inputText: event.target.value
    }
}

export function clearInput() {
    // Fill in this function
    return {
        type: CLEAR_INPUT,
        inputText: ''
    }
}

export function toggleTodo(id) {
    // Fill in this function
    return {
        type: TOGGLE_TODO_ITEM,
        payload: id
    }
}

export function deleteTodo() {
    // Fill in this function
    return {
        type: DELETE_TODO_ITEM
    }
}
