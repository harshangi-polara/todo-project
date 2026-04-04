import { useTodos } from "../../contexts/TodoContext";
import { useAuth } from "../../contexts/AuthContext";
import TodoItem from "../../components/todo/TodoItem";
import TodoForm from "../../components/todo/TodoForm";

export default function TodoPage() {
  const { todos, loading, addTodo, editTodo, removeTodo } = useTodos();
  const { logout } = useAuth();

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">My Todos</h2>

        <TodoForm onAdd={addTodo} />

        {todos.map((t) => (
          <TodoItem
            key={t._id}
            todo={t}
            onDelete={removeTodo}
            onUpdate={editTodo}
          />
        ))}

        <button onClick={logout} className="text-sm text-gray-500">
          Logout
        </button>
      </div>
    </div>
  );
}
