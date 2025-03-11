import { useState } from "react";
import "./Todo.css"

function Todo({TodoData, isFinished, changeFinished,onDelete,onEdit}) {

   const [finished, setFinished] = useState(isFinished)
   const [isEditting, setIsEditing] = useState(false)
   const [editText, setEditText] = useState(TodoData)

 return(
     <div className="todoList">

        <input type="checkbox" id="input" checked = {finished} onChange={(e)=> {

         setFinished(e.target.checked)
         changeFinished(e.target.checked)
         }}/>

        {(isEditting ? (<input type = "text" value={editText} onChange={e => setEditText(e.target.value)}/>) :<span>{TodoData}</span> )}
        <button className="EditBtn" onClick={() =>{
         setIsEditing(!isEditting)
         onEdit(editText)
        }}>{!isEditting ? 'Edit' : 'Save'}</button>
        <button className="DeleteBtn" onClick={onDelete}>Delete</button>

     </div>
  )

}

export default Todo;


/*
App.js has the list state and passes it to TodoList.
TodoList maps over list and passes each task to Todo.
Todo receives TodoData and isFinished from the list and renders them.

what happing here ...let discuss
in this component it is a blueprint of each task displayed with input checked.
name of task(received from TodoList) and buttons for edit and delete
*/