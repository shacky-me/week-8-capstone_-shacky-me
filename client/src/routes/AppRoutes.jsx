import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForYouPage from "../pages/ForYouPage";
import FollowingPage from "../pages/FollowingPage";
import WritePage from "../pages/WritePage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LP";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/for-you" element={<ForYouPage />} />
      <Route path="/following" element={<FollowingPage />} />
      <Route path="/write" element={<WritePage />} />
      {/* a catch-all for 404 Not Found */}
      <Route
        path="*"
        element={
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-700">Page Not Found</p>
          </div>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
