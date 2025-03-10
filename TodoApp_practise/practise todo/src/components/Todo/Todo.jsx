
function Todo({TodoData, isFinished}) {

    return(
        <div>
            <input type="checkbox" name="" id="" checked = {isFinished} />
           {TodoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo