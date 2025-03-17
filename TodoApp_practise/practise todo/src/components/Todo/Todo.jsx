import { useState } from "react"

function Todo({TodoData, isFinished, changeFinished,onEdit,onDelete}) {

    const [finished, setFinished] = useState(isFinished)
    const [isEditing, setIsediting] = useState(false)
    const [editText, setEditText] = useState(TodoData)

    return(
        <div>
            <input type="checkbox"  checked = {finished} onChange={(e)=> {
                {console.log(e.target.checked)}
                setFinished(e.target.checked)
                changeFinished(e.target.checked)    

            }} />
            
            {(isEditing) ? <input type="text" value={editText} onChange={e=>setEditText(e.target.value)}/> :<span>{TodoData}</span>}

            <button onClick={()=> {setIsediting(!isEditing)
             onEdit(editText)}}
            >{!isEditing ? 'Edit':'Save'}</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo