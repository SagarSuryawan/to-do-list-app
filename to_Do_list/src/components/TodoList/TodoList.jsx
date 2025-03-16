import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"
import TodoContex from "../../contex/TodoContex";

function TodoList() {

  const {list, setList} = useContext(TodoContex)

    return (
        <div className="TodoApp">
                    {list.length > 0 && 
                    list.map( (task) => <Todo key={task.id} id= {task.id} 
                                      TodoData = {task.todoData} 
                                      isFinished={task.finished}

                                      // checked updated
                                      changeFinished = {(isFinished) =>{
                                        const updatedlList = list.map((t) =>{
                                          if(t.id == task.id){
                                            task.finsihed = isFinished
                                          }
                                          
                                          return t;
                                         
                                        })
                                        setList(updatedlList)
                                      }}

                                      // delete task
                                      onDelete = {()=>{
                                        const updatedlList = list.filter((t) => 
                                        t.id != task.id
                                        )
                                        setList(updatedlList)
                                      }}

                                      // edit task
                                        onEdit = {(todoText) =>{
                                          const updatedlList = list.map(t =>{
                                            if(t.id == task.id){
                                              task.todoData = todoText
                                            }
                                            return t;
                                          })
                                          setList(updatedlList)
                                      }}
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
