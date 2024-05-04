import React, { useState } from 'react'
import OtherDataComp from './OtherDataComp'
import "../cssFiles/userComp.css"
import { updateUser } from '../utils'

const UserComp = (props) => {
  const [isShow, setIsShow] = useState(false);

  let user = props.user

  const patchUser = async() => {
    user = await updateUser(user, user.id)
    console.log({user})
  }

  return (
    <div className="userComp">
      ID: {props.user.id} <br/>
      Name  : <input placeholder={user.name} /> <br/>
      Email : <input placeholder={user.email} /> <br/>
      <button className="otherData" onMouseOver={() => setIsShow(true)}
      onClick={() => setIsShow(!isShow)}>Other Data</button>
      <button onClick={patchUser}>Update</button>      
      <button>Delete</button>    
      {isShow && <OtherDataComp user={user} />}
    </div>
  )
}

export default UserComp
