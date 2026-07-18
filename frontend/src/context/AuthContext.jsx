import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [savedJobIds, setSavedJobIds] = useState([]);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const login = async (userData) => {
    const response = await axios.post(
      `${API_URL}/api/auth/login`,
      userData
    );

    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
  };

  const register = async (userData) => {
    const response = await axios.post(
      `${API_URL}/api/auth/register`,
      userData
    );

    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setSavedJobIds([]);
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobIds((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        savedJobIds,
        toggleSaveJob,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return ctx;
}