import { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { TodoProvider } from "./contexts/TodoContext";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import TodoPage from "./pages/todo/TodoPage";

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (isAuthenticated) return <TodoPage />;

  return showRegister ? (
    <RegisterPage onSwitchToLogin={() => setShowRegister(false)} />
  ) : (
    <LoginPage onSwitchToRegister={() => setShowRegister(true)} />
  );
}

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
