import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Optional: you can show a loader here

  return isSignedIn ? component : <Navigate to="login" replace />;
};

export default ProtectedRoute;
