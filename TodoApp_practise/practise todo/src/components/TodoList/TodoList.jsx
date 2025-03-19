import { useContext } from "react"
import Todo from "../Todo/Todo"
import todoContex from "../../Contex/todoContex"
import todoDispatch from "../../Contex/todoDispatch"


function TodoList() {
    const {list} = useContext(todoContex)
    const {dispatch} = useContext(todoDispatch)

    function onComplete(task,isFinished){
        dispatch({type:'finished_todo', payload:{isFinished, task}})    
    }
    function onEdits(todoText, task){
        dispatch({type: "edit_todo", payload:{todoText, task}})
    }
    function onDelets(task){
        dispatch({type: "delete_todo", payload:{task}})
    }
   
    return(
        <div>
           {list.length > 0 && list.map((task) => 
           <Todo key={task.id}
           id = {task.id}
            TodoData = {task.todoData} 
            isFinished = {task.finished}

            // check updated
            changeFinished = {(isFinished)=>{
                onComplete(task,isFinished)
            }}

            // on Editing
            onEdit = {(todoText)=>{
                onEdits(todoText, task)
            }}

            // On Delete
            onDelete = {()=>{
                onDelets(task)
            }}
           />)}
        </div>
    )

}

export default TodoList