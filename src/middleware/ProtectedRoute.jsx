// ✅ client/src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();

  // Wait for Clerk to load
  if (!isLoaded) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "5rem",
          fontSize: "1.2rem",
          color: "#3b82f6",
        }}
      >
        Loading...
      </div>
    );
  }

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // If authenticated, render children
  return children;
}

export default ProtectedRoute;
