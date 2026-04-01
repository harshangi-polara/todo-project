export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
