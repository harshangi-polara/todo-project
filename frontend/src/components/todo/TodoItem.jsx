import { useState } from "react";

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = async () => {
    if (!title.trim()) return;
    await onUpdate(todo._id, { title });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border p-1 rounded mr-2"
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button onClick={handleUpdate} className="text-green-500">
              Save
            </button>
            <button onClick={handleCancel} className="text-gray-500">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500">
            Edit
          </button>
        )}
        <button onClick={() => onDelete(todo._id)} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}
