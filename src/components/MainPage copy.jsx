import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils";
import UserComp from "./UserComp";
import '../App.css'

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const userUrl = "https://jsonplaceholder.typicode.com/users";
      const { data } = await getAllUsers(userUrl);
      setUsers(data)
      setAllsers(data)
    };
    fetchUsers();
  }, []);

  // const search = (event) => {
  //   const searchVal = event.target.value
  //   setUsers(allUsers)
  //   let filteredUsers = users
  //   console.log({filteredUsers})
  //   filteredUsers = users.filter(user => user.name.includes(searchVal) || user.email.includes(searchVal))
  //   console.log({allUsers})
  //   console.log({filteredUsers})
  //   setUsers(filteredUsers)
  // }

  return (
    <div>
      Search <input onChange={search} type="text" style={{ marginRight: "20px" }} />
      <button style={{ backgroundColor: "yellowgreen", fontSize:"12px", marginBottom: "1rem"}}>Add</button> <br/>

      {
        users !== undefined && users.map(user => {
          return (
            <UserComp user={user} key={user.id}/>
          )
        })
      }
    </div>
  );
};

export default MainPage;
