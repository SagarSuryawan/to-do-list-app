import { useContext, useState } from "react";
import "./AddTodo.css"  
import todoDispatch from "../../contex/todoDispatch";

function AddTodo () {

    const [inputText, setInputText] = useState('')
    const {dispatch} = useContext(todoDispatch)
    return(
        <div className="addTodo">

             <input
             placeholder="Add your Task"
             type="text" 
             className="inputTask"
             value={inputText}
             onChange={task => setInputText(task.target.value)}
             />

             <button onClick={()=>{
                dispatch({type: 'add_todo', payload:{task:inputText}})
                setInputText('')
                }}className="AddTask">Add Tasks</button>
        </div>
    )
}

export default AddTodo;
/*
App.js has the list state and passes it to TodoList.
TodoList maps over list and passes each task to Todo.
Todo receives TodoData and isFinished from the list and renders them.

what happing here ...let discuss

in this component there is input tas tag and button.
task typed in input tag and hit Add task it will update an list of tasks in TodoList component.
*/