import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const getAllUsers = () => {
  return axios.get(usersUrl);
};

const getUsertodos = (id) => {
  return axios.get(`${todosUrl}?userId=${id}`);
};



export { getAllUsers, getUsertodos };
