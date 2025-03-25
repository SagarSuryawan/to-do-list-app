
export const todoFinished = (task, isFinished) => ({type:'finished_todo', payload:{task, isFinished, task}})

export const addTodo = (inputText) => ({type: 'add_todo', payload:{task:inputText}})

export const deleteTodo = (task) => ({type: 'delete_todo', payload:{task}})

export const editTodo = (task, todoText) => ({type: 'edit_todo', payload:{task, todoText}})

