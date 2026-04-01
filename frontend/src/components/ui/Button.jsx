export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
