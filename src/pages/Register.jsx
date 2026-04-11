import { useState } from "react";
import API from "../utils/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await API.post("/auth/register", { email, password });
    alert("Registered! Now login.");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Register</h2>

        <input
          placeholder="Email"
          className="w-full border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;