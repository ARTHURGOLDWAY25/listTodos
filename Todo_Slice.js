import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []

}

const Todo_Slice = createSlice({
  name: 'todoList', // Adjusted name to follow camelCase convention
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todos.push(action.payload)
    }
  }
  
});

export const {addTodo} = Todo_Slice.actions

export default Todo_Slice.reducer