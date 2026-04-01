import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo } from "../../api/todo.api";
import TodoItem from "../../components/todo/TodoItem";
import TodoForm from "../../components/todo/TodoForm";

export default function TodoPage({ setAuth }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (data) => {
    await createTodo(data);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">My Todos</h2>

        <TodoForm onAdd={handleAdd} />

        {todos.map((t) => (
          <TodoItem key={t._id} todo={t} onDelete={handleDelete} />
        ))}

        <button
          onClick={() => {
            localStorage.removeItem("token");
            setAuth(false);
          }}
          className="text-sm text-gray-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
