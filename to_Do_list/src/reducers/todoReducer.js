
    function todoReducer(state, action){

        if(action.type == 'add_todo'){
            
            let todoText = action.payload.todoText
            return [
                ...state, {id:state.length+1, todoData:todoText, finished:false}
              ]

        }else if(action.type == 'edit_todo'){

            let task = action.payload.task;
            let todoText = action.payload.todoText

            const updatedlList = list.map(t =>{
                if(t.id == task.id){
                  task.todoData = todoText
                }
                return t;
              })
              return updatedlList

        }else if(action.type == 'delete_todo'){

            let task = action.payload.task;

            const updatedlList = list.filter((t) => 
                t.id != task.id
                )
              return updatedlList
        }

    }

    export default todoReducer



    // no need call setter function;