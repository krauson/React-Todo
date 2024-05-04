import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = () => {
  return axios.get(usersUrl)
}

const updateUser = async(user, id) => {
  const {data} = await axios.patch(`${usersUrl}/${id}`, user)
  console.log(data)
  return data
}

export { getAllUsers, updateUser }