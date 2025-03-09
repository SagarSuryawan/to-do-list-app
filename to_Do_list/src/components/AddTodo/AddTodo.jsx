import { useState } from "react";
import "./AddTodo.css"  

function AddTodo ({updateList}) {

    const [inputText, setInputText] = useState('')
    return(
        <div className="addTodo">

             <input
             placeholder="Add your Task"
             type="text" 
             className="inputTask"
             value={inputText}
             onChange={task => setInputText(task.target.value)}
             />

             <button onClick={()=>updateList(inputText) } className="AddTask">Add Tasks</button>
        </div>
    )
}

export default AddTodo;



/*
what happing here ...let discuss

in this component there is input tas tag and button.
task typed in input tag and hit Add task it will update an list of tasks in TodoList component.
*/