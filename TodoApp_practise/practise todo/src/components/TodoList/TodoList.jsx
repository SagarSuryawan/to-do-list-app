import { useContext } from "react"
import Todo from "../Todo/Todo"
import todoContex from "../../Contex/todoContex"


function TodoList() {

    const {list, setList} = useContext(todoContex)
   
    return(
        <div>
           {list.length > 0 && list.map((task) => 
           <Todo key={task.id}
           id = {task.id}
            TodoData = {task.todoData} 
            isFinished = {task.finished}

            // check updated
            changeFinished = {(isFinished)=>{
                const updatedList = list.map((t)=>{
                    if(t.id == task.id){
                        task.finished = isFinished
                    }
                    return t;
                })
                setList(updatedList)
            }}

            // on Editing
            onEdit = {(todoText)=>{
                const updatedList = list.map((t)=>{
                    if(t.id == task.id){
                        task.todoData = todoText
                    }
                    return t;
                })
                setList(updatedList)
            }}

            // On Delete
            onDelete = {()=>{
                const updatedList = list.filter((t)=>
                    (t.id != task.id)
                )
            setList(updatedList)
            }}
           />)}
        </div>
    )

}

export default TodoList