import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const fetchPost = async () => {
    try {
      const res = await API.get(`/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      setError("Post not found.");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      await API.delete(`/posts/${id}`);
      navigate("/");
    } catch (err) {
      alert("Error deleting post");
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Loading...</p>;

  const isAuthor = user && post.author && user._id === post.author._id;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        by {post.author?.username} •{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-lg leading-7 mb-6">{post.content}</p>

      {isAuthor && (
        <div className="space-x-3">
          <Link
            to={`/posts/${id}/edit`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
