
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContex from './contex/TodoContex'
function App() {

  
const [list, setList] = useState( 
  [
  //  { id:1, todoData: 'todo 1 ', finished: false },

 ]      
)

  return (

    <TodoContex.Provider value={{list, setList}}>

        {console.log(list)}
        <AddTodo updateList={(task) => setList([
          ...list, {id:list.length+1, todoData:task, finished:false}
        ])} />
        
        <TodoList/>

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