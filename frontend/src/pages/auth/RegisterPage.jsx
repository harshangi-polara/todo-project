import { useState } from "react";
import { registerUser, loginUser } from "../../api/auth.api";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function RegisterPage({ onSwitchToLogin }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await registerUser(form);
      // After successful registration, auto-login
      const loginRes = await loginUser(form);
      login(loginRes.data.token);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <Input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button>Register</Button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-500 underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
