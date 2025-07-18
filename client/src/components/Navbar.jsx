import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between max-w-4xl mx-auto">
        <Link to="/" className="font-bold text-xl">
          MERN Blog
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span>{user.user.username}</span>
              <Link to="/create" className="hover:underline">
                New Post
              </Link>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
