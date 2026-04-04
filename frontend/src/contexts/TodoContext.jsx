import { createContext, useContext, useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todo.api";
import { useAuth } from "./AuthContext";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (data) => {
    try {
      await createTodo(data);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const editTodo = async (id, data) => {
    try {
      await updateTodo(id, data);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [isAuthenticated]);

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, editTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
