
function Todo({TodoData}) {
 return(
     <div>

        <input type="checkbox" name="" id="" />
        {TodoData}
        <button>Edit</button>
        <button>Delete</button>

     </div>
  )

}

export default Todo;


/*
what happing here ...let discuss
in this component it is a blueprint of each task displayed with input checked.
name of task(received from TodoList) and buttons for edit and delete
*/