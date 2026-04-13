import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    setLoading(true);
    try {
      await API.post("/auth/register", { email, password });

      // smooth UX → redirect instead of alert spam
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert("Registration failed. Try a different email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">

      <div className="w-full max-w-md">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Create your account
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Start your workspace in seconds
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >


          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
            placeholder:text-gray-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
            placeholder:text-gray-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full text-sm font-medium transition-all
              ${
                loading
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md"
              }`}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>


        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;