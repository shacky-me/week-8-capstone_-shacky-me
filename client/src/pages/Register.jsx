import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full p-2 border"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
