import "./AddTodo.css"

function AddTodo () {

    return(
        <div className="addTodo">
             <input
             placeholder="Add your Task"
             type="text" className="inputTask"
             />

             <button className="AddTask">Add Tasks</button>
        </div>
    )
}

export default AddTodo;



/*
what happing here ...let discuss

in this component there is input tas tag and button.
task typed in input tag and hit Add task it will update an list of tasks in TodoList component.
*/