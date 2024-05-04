import React, { useState } from 'react'
import OtherDataComp from './OtherDataComp'
import "../cssFiles/userComp.css"


const UserComp = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const user = props.user
  return (
    <div className="userComp">
      ID: {props.user.id} <br/>
      Name  : <input type="text" placeholder={user.name}/> <br/>
      Email : <input type="text" placeholder={user.email}/> <br/>
      <button className="otherData" onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)} style={{ }}>Other Data</button>
      <button>Update</button>      
      <button>Delete</button>    
      {isMouseOver && <OtherDataComp user={user} />}
    </div>
  )
}

export default UserComp
