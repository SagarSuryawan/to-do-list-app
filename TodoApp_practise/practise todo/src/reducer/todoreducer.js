
function reducer(state, action) {

    if(action.type == "add_todo"){
        let task = action.payload.task;
        return [
            ...state ,{id:state.length+1, todoData:task,finished:false}
        ]
    }
    else if(action.type == "edit_todo"){
        let todoText = action.payload.todoText;
        let task = action.payload.task;
        const updatedList = state.map((t)=>{
            if(t.id == task.id){
                task.todoData = todoText
            }
            return t;
        })
        return updatedList
    }
    else if(action.type == "delete_todo"){
        let task = action.payload.task;
        const updatedList = state.filter((t)=>
            (t.id != task.id)
        )
        return updatedList
    }

}

export default reducer