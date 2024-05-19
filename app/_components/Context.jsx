import React, { createContext, useState, useContext } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state

  const handleSetUser = (newUser) => setUser(newUser);

  return (
     <></>
  );
};

export const useUser = () => useContext(UserContext);