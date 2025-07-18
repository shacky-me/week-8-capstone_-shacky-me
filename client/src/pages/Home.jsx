import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to write!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              className="block p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">
                by {post.author?.username || "Unknown"} •{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-2">
                {post.content.substring(0, 150)}...
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
