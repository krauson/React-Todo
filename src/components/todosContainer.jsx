import React, { useEffect, useState } from 'react'
import { getUsertodos } from '../utils';
import '../cssFiles/styles.css'
import TodoComp from './TodoComp';


const TodosPage = (props) => {
  const [userTodos, setUserTodos] = useState()

  const id = props.userId

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await getUsertodos(id)
      // console.log(data)
      setUserTodos(data)
    }
    fetchData()
  }, []);

  return (
    <div className='todosContainer'>
      <span style={{ textAlign: "center"}}>Todos - User {id}</span>   <button >Add</button>

      <TodoComp userTodos={userTodos}/>
    </div>
  )
}

export default TodosPage
