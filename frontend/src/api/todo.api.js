import API from "./axios";

export const getTodos = () => API.get("/todos");
export const createTodo = (data) => API.post("/todos", data);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
