import React from 'react'
import '../cssFiles/App.css'

const UserComp = (props) => {
  return (
    // <div className="mainPage">
    <div className="mainPage" style={{ border: "red solid 2px", textAlign:"left", padding:"1rem", marginBottom: "1rem"}}>
      ID: {props.user.id} <br/>
      Name  : <input type="text" placeholder={props.user.name}/> <br/>
      Email : <input type="text" placeholder={props.user.email}/> <br/>
      <button style={{ backgroundColor:'grey', fontSize:"10px", }}>Other Data</button>
    </div>
  )
}

export default UserComp
