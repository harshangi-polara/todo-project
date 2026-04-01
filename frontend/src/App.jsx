import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import TodoPage from "./pages/todo/TodoPage";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  return auth ? (
    <TodoPage setAuth={setAuth} />
  ) : (
    <LoginPage setAuth={setAuth} />
  );
}

export default App;
