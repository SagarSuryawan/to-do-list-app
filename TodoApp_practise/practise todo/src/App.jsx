
import { useState } from 'react'
import './App.css'  
import TodoList from './components/TodoList/TodoList'
import Addtodo from './components/Addtodo/Addtodo'

function App() {
  
  const [list,setList] = useState([
    {id:1, todoData:'todo 1', finished:false},
    {id:2, todoData:'todo 2',finished:false}
])

  return (
    <>
      <Addtodo updateList = {(task) =>setList([...list ,{id:list.length+1, todoData:task,finished:false}])}/>
      <TodoList list = {list}/>
    </>
  )
}

export default App
