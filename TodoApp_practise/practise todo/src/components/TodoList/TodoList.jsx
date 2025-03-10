import Todo from "../Todo/Todo"

function TodoList({list}) {

   
    return(
        <div>
           {list.length > 0 && list.map((task) => <Todo key={task.id} TodoData = {task.todoData}/>)}
        </div>
    )

}

export default TodoList