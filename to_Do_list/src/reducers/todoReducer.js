
    function todoReducer(state = [], action){
        if(action.type == 'add_todo'){
            let task = action.payload.task
            return [
                ...state, {id:state.length+1, todoData:task     , finished:false}
              ]
        }
        else if(action.type == 'edit_todo'){
            let task = action.payload.task;
            let todoText = action.payload.todoText
            const updatedlList = state.map(t =>{
                if(t.id == task.id){
                  task.todoData = todoText
                }
                return t;
              })
              return updatedlList
        }
        else if(action.type == 'delete_todo'){
            let task = action.payload.task;
            const updatedlList = state.filter((t) => 
                t.id != task.id
                )
              return updatedlList

        }
        else if (action.type == 'finished_todo'){
          let isFinished = action.payload.isFinished;
          let task = action.payload.task;
          const updatedlList = state.map((t) =>{
            if(t.id == task.id){
              task.finsihed = isFinished
            }
            return t;
          })
          return updatedlList
        }
        else{
          return state
        }

    }

    export default todoReducer



    // no need call setter function;