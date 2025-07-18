import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
// import SinglePost from "./pages/SinglePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
