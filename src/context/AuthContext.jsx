// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { readJSON, writeJSON } from "../services/storage";
import { hashString } from "../services/hash";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // users array stored in localStorage under "users"
  const [users, setUsers] = useState(() => readJSON("users", []));
  // currentUser saved without passwordHash
  const [currentUser, setCurrentUser] = useState(() =>
    readJSON("currentUser", null)
  );

  // persist users list
  useEffect(() => {
    writeJSON("users", users);
  }, [users]);

  // persist currentUser (or remove)
  useEffect(() => {
    if (currentUser) writeJSON("currentUser", currentUser);
    else localStorage.removeItem("currentUser");
  }, [currentUser]);

  // register: validate, hash password, save user, auto-login
  async function register({ name, email, password }) {
    // basic validation
    if (!name || !email || !password)
      throw new Error("الرجاء ملء جميع الحقول.");
    const normalizedEmail = email.trim().toLowerCase();
    if (users.some((u) => u.email === normalizedEmail))
      throw new Error("هذا الإيميل مستخدم بالفعل.");
    if (password.length < 6)
      throw new Error("كلمة المرور قصيرة جداً (أدخلي 6 أحرف على الأقل).");

    const passwordHash = await hashString(password);
    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    setUsers((prev) => [...prev, newUser]);

    // auto-login: store only safe info (no passwordHash)
    setCurrentUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
    return newUser;
  }

  // login: check credentials
  async function login({ email, password }) {
    if (!email || !password) throw new Error("أدخل الإيميل وكلمة المرور.");
    const normalizedEmail = email.trim().toLowerCase();
    const passwordHash = await hashString(password);
    const user = users.find(
      (u) => u.email === normalizedEmail && u.passwordHash === passwordHash
    );
    if (!user) throw new Error("الإيميل أو كلمة المرور غير صحيحة.");
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    return user;
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, users, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
