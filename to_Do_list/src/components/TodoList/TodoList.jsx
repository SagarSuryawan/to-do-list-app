import Todo from "../Todo/Todo";
import "./TodoList.css"

function TodoList() {

    const list = [
        { id:1, todoData: 'todo 1 ' },
        { id:2, todoData: 'todo 2 ' },
        { id:3, todoData: 'todo 3 ' }
    ]

    return (
        <div className="TodoApp">
        {list.length > 0 && list.map((task)=> <Todo key={task.id} TodoData   = {task.todoData} />)}
        </div>
    )

}

export default TodoList;

   
   /*
   what happing here ...let discuss
   
   
   */