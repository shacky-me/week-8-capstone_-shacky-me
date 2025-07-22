import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import ForYouPage from "../pages/ForYouPage";
import FollowingPage from "../pages/FollowingPage";
import WritePage from "../pages/WritePage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LP";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Or a loading spinner

  return (
    <Routes>
      {/* Root route: wait for Clerk to load before deciding */}
      <Route
        path="/"
        element={isSignedIn ? <Navigate to="/home" replace /> : <LandingPage />}
      />

      {/* Protected routes */}
      <Route
        path="/home"
        element={<ProtectedRoute component={<HomePage />} />}
      />
      <Route
        path="/for-you"
        element={<ProtectedRoute component={<ForYouPage />} />}
      />
      <Route
        path="/following"
        element={<ProtectedRoute component={<FollowingPage />} />}
      />
      <Route
        path="/write"
        element={<ProtectedRoute component={<WritePage />} />}
      />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
