import { createSlice } from "@reduxjs/toolkit";
// import todoList from "../components/TodoList/TodoList";


const initialState = {
    todoList : []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (todo, action) => {
            let task = action.payload.task
            
            todo.todoList.push({id:todo.todoList.length+1, todoData:task, finished:false})
            
        },
        editTodo: (todo, action) => {
            let task = action.payload.task;
            let todoText = action.payload.todoText
            
            todo.todoList = todo.todoList.map(t =>{
                if(t.id == task.id){
                    t.todoData = todoText
                }
                return t;
              })
              
        },
        deleteTodo: (todo, action) => {
            let task = action.payload.task;
            todo.todoList = todo.todoList.filter((t) => 
                t.id != task.id
                )
        },
        todoFinished: (todo,action) => {
            let isFinished = action.payload.isFinished;
          let task = action.payload.task;
          todo.todoList = todo.todoList.map((t) =>{
            if(t.id == todo.id){
              task.finsihed = isFinished
            }
            return t;
          })
        }
    }
})

export default todoSlice.reducer
export const {deleteTodo, addTodo, editTodo, todoFinished} = todoSlice.actions