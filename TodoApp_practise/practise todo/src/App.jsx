
import { useReducer} from 'react'
import './App.css'  
import TodoList from './components/TodoList/TodoList'
import Addtodo from './components/Addtodo/Addtodo'
import todoContex from './Contex/todoContex'
import todoDispatch from './Contex/todoDispatch'
import reducer from './reducer/todoreducer'

function App() {
  
  const [list, dispatch] = useReducer(reducer,[

])

  return (
    <todoDispatch.Provider value={{dispatch}}>
    <todoContex.Provider value={{list}}>

      <Addtodo/>
      <TodoList/>

      </todoContex.Provider>
      </todoDispatch.Provider>
    
  )
}

export default App
