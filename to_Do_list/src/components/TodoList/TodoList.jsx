import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"
import TodoContex from "../../contex/TodoContex";
import todoDispatch from "../../contex/todoDispatch";

function TodoList() {

  const {list} = useContext(TodoContex)
  const {dispatch}  = useContext(todoDispatch)

  // checked updated
  function onFinished(task, isFinished) {
    dispatch({type:'finished_todo', payload:{isFinished, task}})
  }

  function oonDelete (task) {
    dispatch({type: 'delete_todo', payload:{task}})
  }

  function oonEdit(task,todoText){
    dispatch({type: 'edit_todo', payload:{task, todoText}})
  }
  

    return (
        <div className="TodoApp">{list.length > 0 && 
              list.map( (task) => 
              <Todo key={task.id} 
              id= {task.id} 
              TodoData = {task.todoData}
              isFinished={task.finished}
              // checked updated
              changeFinished = {(isFinished) =>
              onFinished(task, isFinished)
            }
              // delete task
              onDelete = {()=> oonDelete(task)}
              // edit task
              onEdit = {(todoText) => oonEdit(task, todoText)}
              />)}
      </div>
    )

}

export default TodoList;

  /*
    App.js has the list state and passes it to TodoList.
    TodoList maps over list and passes each task to Todo.
    Todo receives TodoData and isFinished from the list and renders them.

   This component defines a static list of tasks. If the list is not empty (`list.length > 0`), 
   it iterates over the tasks using `map()` and renders each one using the `Todo` component. 
   The `Todo` component receives two props: 
   - `key`: A unique identifier for React’s efficient rendering. 
   - `todoData`: The actual task content to be displayed.


   why list wrap in usestate.?
=> Reactivity → If you update list using setList(), React will automatically re-render the component and reflect the updated list in the UI.
   Enabling Dynamic Changes → Since list is inside useState, we can:
   Add new todos dynamically.
   Delete or update existing todos.
   Fetch and modify data from an API in the future.
*/
