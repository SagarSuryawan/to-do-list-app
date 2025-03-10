import { useState } from "react"

function Addtodo({updateList}) {

    const [inputText,setInputText] = useState('')
    return(
        
        <div>
            <input 
            type="text"
             placeholder="Enter your Task"
            value={inputText}
            onChange={(task)=>setInputText(task.target.value)}
            />
            <button onClick={() =>updateList(inputText)}>Add Task</button>
        </div>
    )
}

export default Addtodo