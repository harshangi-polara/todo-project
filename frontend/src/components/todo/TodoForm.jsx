import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border p-2 rounded"
        placeholder="Enter todo"
      />
      <button className="bg-green-500 text-white px-4 rounded">Add</button>
    </form>
  );
}
