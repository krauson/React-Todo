import React from 'react'

const TodoComp = (props) => {

  const title = props.userTodos && props.userTodos[0].completed
  console.log(props.userTodos)
  return (
    <div>
       {
        props.userTodos && props.userTodos.slice(0, 3).map(todo => {
          return(
            <div className='todo' key={todo.id}> 
               <div>
                  <strong>Title:</strong>  &nbsp; {todo.title.slice(0, 60)} <br/>
                 <strong> Completed:</strong>
                {todo.completed.toString()} 
               </div>

                <div style={{ textAlign: 'right' }}>
                  {
                   todo.completed ? (null) : (<button className='markCompleted'>Mark Completed</button>) 
                  }
                </div>
            </div>
          )
        })
       }

    </div>
  )
}

export default TodoComp
