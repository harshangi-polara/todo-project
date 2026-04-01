import { useState } from "react";
import { loginUser } from "../../api/auth.api";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function LoginPage({ setAuth }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);
    localStorage.setItem("token", res.data.token);
    setAuth(true);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <Input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button>Login</Button>
      </form>
    </div>
  );
}
