import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForYouPage from "../pages/ForYouPage";
import FollowingPage from "../pages/FollowingPage";
import WritePage from "../pages/WritePage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LP";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route index element={<HomePage />} />
      <Route path="/for-you" element={<ForYouPage />} />
      <Route path="/following" element={<FollowingPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* a catch-all for 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;
