import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  username: "",
  role: "",
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const login = (name, selectedRole) => {
    setUsername(name);
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername("");
    setRole("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
