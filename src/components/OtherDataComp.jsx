import React, { useState } from 'react'

const OtherDataComp = (props) => {

  const user = props.user
  return (
    <div>
      Street: <input type="text" placeholder={user.address.street}></input><br/>
      City: <input type="text" placeholder={user.address.city}></input><br/>
      Zip Code: <input type="text" placeholder={user.address.zipcode}></input>
    </div>
  )
}

export default OtherDataComp
