import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = () => {
  return axios.get(usersUrl)
}



export { getAllUsers }