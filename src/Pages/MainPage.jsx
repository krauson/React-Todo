import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils";
import UserComp from "./UserComp";
import "../cssFiles/userComp.css"

const MainPage = () => {
  let [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers();
      setUsers(data)
      setFilteredUsers(data)
    };
    fetchUsers();
  }, []);

  const handleInputChange = (event) => {
    const searchVal = event.target.value
    const tempFilteredUsers = users.filter(user => 
      user.name.includes(searchVal) ||
     user.email.includes(searchVal))
    setFilteredUsers(tempFilteredUsers)
  }

  // const handleInputChange = (event) => {
  //   const searchVal = event.target.value
  //   const tempFilteredUsers = users.filter(user => 
  //     user.name.toLowerCase().includes(searchVal) ||
  //    user.email.toLowerCase().includes(searchVal))
  //   setFilteredUsers(tempFilteredUsers)
  // }

  // const updateUser = (user) => {
  //   console.log({user})
  //   const chosenUser = users.filter(user => user.id === user.id)
  //   // chosenUser = {...chosenUser, name, email}
  //   users = [...users, chosenUser]
  // }

  // Update user's data function
  const updateUserData = (id, newData) => {
    // Find the user by id and update its data
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, ...newData };
      }
      return user;
    });
    // Set the updated users array to the state
    setUsers(updatedUsers);
  };

  return (
    <div>
      Search <input onChange={handleInputChange} type="text" style={{ marginRight: "20px" }} />
      <button style={{ backgroundColor: "yellowgreen", fontSize:"12px", marginBottom: "1rem"}}>Add</button> <br/>
      {
        filteredUsers !== undefined && filteredUsers.map((user) => {
          return (
            <UserComp user={user} key={user.id} updateUserData={updateUserData}/>
          )
        })
      }
    </div>
  );
};

export default MainPage;
