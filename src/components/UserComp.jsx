import React, { useEffect, useState } from 'react'
import OtherDataComp from './OtherDataComp'
import "../cssFiles/styles.css"
import TodosPage from './todosContainer';

const UserComp = (props) => {
  const [isOtherDataShown, setIsOtherDataShown] = useState(false);
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('');
  const [isIdclicked, setIsIdclicked] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

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
    setIsDeleted(true)
    deleteUser(user.id)
  }

  const handleClickId = () => {
    setIsIdclicked(!isIdclicked)
  }



  return (
    <div className="userComp" style={{ 
      backgroundColor: isIdclicked ? 'orange' : 'white',
      display: isDeleted ? "none" : "show"
    }}
      >
      <div onClick={handleClickId}>ID: {props.user.id} <br/> </div>
      Name  : <input placeholder={user.name} onChange={e => setNewName(e.target.value)}/> <br/>
      Email : <input placeholder={user.email} onChange={e => setNewEmail(e.target.value)} /> <br/>
      <button className="otherDataBtn" onMouseOver={() => setIsOtherDataShown(true)}
      onClick={() => setIsOtherDataShown(!isOtherDataShown)}>Other Data</button>
      <button onClick={handleUpdateClick}>Update</button>      
      <button onClick={handleDeleteClick}>Delete</button>

      {isOtherDataShown && <OtherDataComp user={user} />}

      <div>
        
        {isIdclicked && <TodosPage userId={user.id}/>}
      </div>
    </div>
  )
}

export default UserComp
