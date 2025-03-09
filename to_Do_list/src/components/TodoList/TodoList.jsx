import { useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"

function TodoList({list}) {

    return (
        <div className="TodoApp">
        {list.length > 0 && list.map((task)=> <Todo key={task.id} isFinished={task.finished} TodoData = {task.todoData} />)}
        </div>
    )

}

export default TodoList;

  /*
   This component defines a static list of tasks. If the list is not empty (`list.length > 0`), 
   it iterates over the tasks using `map()` and renders each one using the `Todo` component. 
   The `Todo` component receives two props: 
   - `key`: A unique identifier for React’s efficient rendering. 
   - `todoData`: The actual task content to be displayed.


   whu list wrap in usestate.?
=> Reactivity → If you update list using setList(), React will automatically re-render the component and reflect the updated list in the UI.
   Enabling Dynamic Changes → Since list is inside useState, we can:
   Add new todos dynamically.
   Delete or update existing todos.
   Fetch and modify data from an API in the future.
*/
