// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // بحفظ الuser في localStorage بسيط عشان يبقي persistent بين refresh
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const raw = localStorage.getItem("currentUser");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (currentUser)
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      else localStorage.removeItem("currentUser");
    } catch {}
  }, [currentUser]);

  // تسجيل تجريبي (في المشروع الحقيقي هتستخدمي register function تزود user وهاش)
  function mockLoginAsDemo() {
    const demo = { id: "u_demo", name: "Alaa", email: "alaa@example.com" };
    setCurrentUser(demo);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, mockLoginAsDemo, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
