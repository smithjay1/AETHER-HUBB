import React, { createContext, useContext, useState, useEffect } from "react";
import {
  User,
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
  createUser,
  createOAuthUser,
  authenticateUser,
  getUserByEmail,
} from "@/lib/database";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  needsOnboarding: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
  registerWithEmail: (userData: {
    firstName: string;
    lastName: string;
    email: string;
  }) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  loginWithGitHub: () => Promise<boolean>;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        const currentUser = getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user exists in database
      const existingUser = getUserByEmail(email);
      if (!existingUser) {
        return false;
      }

      // Authenticate user (in production, verify password hash)
      const authenticatedUser = authenticateUser(email, password);
      if (!authenticatedUser) {
        return false;
      }

      setUser(authenticatedUser);
      setCurrentUser(authenticatedUser);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate API call - replace with actual registration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const registerWithEmail = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check if user already exists
      const existingUser = getUserByEmail(userData.email);
      if (existingUser) {
        throw new Error("User already exists with this email");
      }

      // Create new user in database
      const newUser = createUser({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        authProvider: "email",
        profileCompleted: false,
      });

      setUser(newUser);
      setCurrentUser(newUser);
      return true;
    } catch (error) {
      console.error("Email registration error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate OAuth flow delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual Google OAuth implementation
      // This would get actual user data from Google OAuth response
      const mockGoogleData = {
        email: "user@gmail.com",
        given_name: "John",
        family_name: "Doe",
        name: "John Doe",
      };

      // Check if user already exists
      let user = getUserByEmail(mockGoogleData.email);

      if (!user) {
        // Create new user from OAuth data
        user = createOAuthUser("google", mockGoogleData);
      }

      setUser(user);
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error("Google authentication error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGitHub = async (): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate OAuth flow delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual GitHub OAuth implementation
      // This would get actual user data from GitHub OAuth response
      const mockGitHubData = {
        email: "user@github.com",
        name: "Jane Smith",
        login: "janesmith",
      };

      // Check if user already exists
      let user = getUserByEmail(mockGitHubData.email);

      if (!user) {
        // Create new user from OAuth data
        user = createOAuthUser("github", mockGitHubData);
      }

      setUser(user);
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error("GitHub authentication error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    clearCurrentUser();
  };

  const completeOnboarding = () => {
    if (user) {
      const updatedUser = { ...user, profileCompleted: true };
      setUser(updatedUser);
      setCurrentUser(updatedUser);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    needsOnboarding: !!user && !user.profileCompleted,
    isLoading,
    login,
    logout,
    register,
    registerWithEmail,
    loginWithGoogle,
    loginWithGitHub,
    completeOnboarding,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
