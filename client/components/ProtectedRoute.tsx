import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, needsOnboarding, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show loading spinner while checking authentication
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to landing page for unauthenticated users
    return <Navigate to="/landing" replace />;
  }

  // If user is authenticated but hasn't completed onboarding, redirect to course selection
  if (needsOnboarding && location.pathname !== "/get-started") {
    return <Navigate to="/get-started" replace />;
  }

  // If user has completed onboarding but is trying to access get-started, redirect to home
  if (!needsOnboarding && location.pathname === "/get-started") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
