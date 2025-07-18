import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/posts", form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  if (!user) return <p>Please login to create a post.</p>;

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="w-full p-2 border"
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write your post here..."
          className="w-full p-2 border h-40"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
