import React, { useEffect, useState } from 'react'
import OtherDataComp from './OtherDataComp'
import "../cssFiles/userComp.css"

const UserComp = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('');

  const user = props.user
  const updateUserData = props.updateUserData
  const deleteUser = props.deleteUser

  // Function to handle update button click
  const handleUpdateClick = () => {
    const newData = {};
    // Check if newName is not empty and update it
    if (newName.trim() !== '') {
      newData.name = newName.trim();
      setNewName('');
    }
    // Check if newEmail is not empty and update it
    if (newEmail.trim() !== '') {
      newData.email = newEmail.trim();
      setNewEmail('');
    }
    // Call the 'updateUserData' function passed from the parent component
    updateUserData(user.id, newData);
  };


  const handleDeleteClick = () => {
    deleteUser(user.id)
  }

  useEffect(() => {
    console.log('useEffect render')
  },[user])

  return (
    <div className="userComp">
      ID: {props.user.id} <br/>
      Name  : <input placeholder={user.name} onChange={e => setNewName(e.target.value)}/> <br/>
      Email : <input placeholder={user.email} onChange={e => setNewEmail(e.target.value)} /> <br/>
      <button className="otherData" onMouseOver={() => setIsShow(true)}
      onClick={() => setIsShow(!isShow)}>Other Data</button>
      <button onClick={handleUpdateClick}>Update</button>      
      <button onClick={handleDeleteClick}>Delete</button>    
      {isShow && <OtherDataComp user={user} />}
    </div>
  )
}

export default UserComp
