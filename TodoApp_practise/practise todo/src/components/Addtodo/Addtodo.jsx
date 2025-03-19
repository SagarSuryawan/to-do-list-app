import { useState } from "react"
import { useContext } from "react"
import todoDispatch from "../../Contex/todoDispatch"


function Addtodo() {

    const [inputText,setInputText] = useState('')
    const {dispatch} = useContext(todoDispatch)
    return(
        
        <div>
            <input 
            type="text"
             placeholder="Enter your Task"
            value={inputText}
            onChange= { task =>setInputText(task.target.value)}
            />
            <button onClick={() => {
                dispatch({type: "add_todo", payload:{task:inputText}})
                setInputText('')
            }}>Add Task</button>
        </div>
    )
}

export default Addtodo