import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils";
import UserComp from "./UserComp";
import "../cssFiles/userComp.css"

const MainPage = () => {
  const [users, setUsers] = useState([]);
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
      user.name.toLowerCase().includes(searchVal) ||
     user.email.toLowerCase().includes(searchVal))
    setFilteredUsers(tempFilteredUsers)
  }

  const updateUser = (id) => {
    const chosenUser = users.filter(user => user.id === id)
    users = [...users, user]
  }

  return (
    <div>
      Search <input onChange={handleInputChange} type="text" style={{ marginRight: "20px" }} />
      <button style={{ backgroundColor: "yellowgreen", fontSize:"12px", marginBottom: "1rem"}}>Add</button> <br/>
      {
        filteredUsers !== undefined && filteredUsers.map((user) => {
          return (
            <UserComp user={user} key={user.id} />
          )
        })
      }
    </div>
  );
};

export default MainPage;
