import "./Todo.css"

function Todo({TodoData}) {
 return(
     <div className="todoList">

        <input type="checkbox" name="" id="input" />
        {TodoData}
        <button className="EditBtn">Edit</button>
        <button className="DeleteBtn">Delete</button>

     </div>
  )

}

export default Todo;


/*
what happing here ...let discuss
in this component it is a blueprint of each task displayed with input checked.
name of task(received from TodoList) and buttons for edit and delete
*/