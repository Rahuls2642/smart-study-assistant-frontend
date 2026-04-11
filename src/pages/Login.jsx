import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import API from "../utils/api";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    
    if (e) e.preventDefault();
    
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      setIsAuth(true);

      navigate("/"); 
      
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      alert("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          type="email" 
          placeholder="Email"
          className="w-full border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()} 
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full text-white p-2 ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;