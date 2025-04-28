import React, { useState, createContext } from "react";
import { AuthContextValueShape } from "./type";
import { useLocalStorage } from "../hooks/use-local-storage/use-local-storage";

/* ------------------------------------------------------------------------------ */

export const AuthContext = createContext<AuthContextValueShape | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({
    isChecking: true,
    isAuthenticated: false,
    user: null,
  });

  const {
    storedValue: token,
    setValue: setToken,
    removeValue: removeToken,
  } = useLocalStorage("MagnetifyAdminUser", null);

  // User detail
  const currentUser = {
    isSuccess: false,
    data: { data: null },
  };

  if (currentUser.isSuccess && !auth.user) {
    setAuth((prev) => ({ ...prev, user: currentUser.data.data }));
  }

  // Value to be provided to consumers of the context
  const value = {
    auth: { ...auth, token, isAuthenticated: Boolean(token) },
    setAuth,
    removeToken,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
