import { useReducer } from 'react'
import todoReducer from './reducers/todoReducer'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContex from './contex/TodoContex'
import todoDispatchContex from './contex/todoDispatch'

function App() {

 const [list, dispatch] =  useReducer(todoReducer, []); 

  return (

    <TodoContex.Provider value={{list}}>

      <todoDispatchContex.Provider value={{dispatch}}>
        {console.log(list)}
        <AddTodo />
        <TodoList/>
      </todoDispatchContex.Provider>
    
    </TodoContex.Provider>
  )
}

export default App


/*
App.js has the list state and passes it to TodoList.
TodoList maps over list and passes each task to Todo.
Todo receives TodoData and isFinished from the list and renders them.

 Full Flow Summary
1. App.jsx (Manages State)
Stores the task list (list).
Passes the list to TodoList for display.
Passes updateList to AddTodo to add tasks.

2. AddTodo.jsx (Handles Input)
User types a new task.
Calls updateList(newTask) when clicking Add Task.
The new task gets added to list in App.

3. TodoList.jsx (Loops Through Tasks)
Gets the updated list from App.
Maps through tasks and renders Todo for each.

4. Todo.jsx (Displays a Single Task)
Displays the task name & checkbox.
Can be modified to edit/delete tasks.
*/