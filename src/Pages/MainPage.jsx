import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils";
import UserComp from "./UserComp";
import '../App.css'

const MainPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userUrl = "https://jsonplaceholder.typicode.com/users";
      const { data } = await getAllUsers(userUrl);
      setUsers(data)
    };
    fetchUsers()
  }, []);

  return (
    <div>
      Search <input type="text" style={{ marginRight: "20px" }} />
      <button style={{ backgroundColor: "yellowgreen", fontSize:"12px", marginBottom: "1rem"}}>Add</button> <br/>

      {
        users.length > 1 && users.map(user => {
          return (
            <UserComp user={user} key={user.id}/>
          )
        })
      }
    </div>
  );
};

export default MainPage;
