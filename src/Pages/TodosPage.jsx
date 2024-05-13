import React, { useEffect, useState } from 'react'
import { getUsertodos } from '../utils';
import '../cssFiles/styles.css'

const TodosPage = (props) => {
  const [userTodos, setUserTodos] = useState([])

  const id = props.userId

  useEffect(() => {
    const fetchData = async(id) => {
      const {data} = await getUsertodos(id)
      setUserTodos(data)
    }
    fetchData()
  }, []);

  return (
    <div className='todosComp'>
      <h3>Todos - User {id}</h3>    <button>Add</button>
    </div>
  )
}

export default TodosPage
