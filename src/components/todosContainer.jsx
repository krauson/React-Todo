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
      <div className='todosUserTitle'>Todos - User {id}</div>
      <div style={{ textAlign: "right"}}>
        <button >Add</button>
      </div>
     

      <TodoComp userTodos={userTodos}/>
    </div>
  )
}

export default TodosPage
