import { ADD_TODO_ITEM, INPUT_HANDLER, TOGGLE_TODO_ITEM, DELETE_TODO_ITEM, CLEAR_INPUT } from '../Actions';

const initialState = {
  todos: [],
  inputText: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
        return {
            ...state,
            todos: state.todos.concat(action.payload)
        }

    case INPUT_HANDLER:
        return {
            ...state,
            inputText: action.inputText
        }
    
    case CLEAR_INPUT:
        return {
            ...state,
            inputText: ''
        }
        
    case TOGGLE_TODO_ITEM:
        const completedTodos = state.todos.map(todo => 
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
        return {
            ...state,
            todos: completedTodos
        }

    case DELETE_TODO_ITEM:
        const deleteTodos = state.todos.filter(todo => todo.completed === false)
        return {
            ...state,
            todos: deleteTodos
        }

    default:
      return state;
  }
};
