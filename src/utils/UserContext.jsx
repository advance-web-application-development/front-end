import React, { useState, createContext, useEffect } from "react";
import SignIn from "../pages/SignIn";
import { isAuthenticated } from "./AuthService";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = await isAuthenticated();
      console.log("cuser ", cuser);
      if (cuser?.user != undefined) {
        setCurrentUser(cuser.user);
      }
    };

    checkLoggedIn();
  }, []);
  useEffect(() => {
    const currentPathname = window.location.pathname;
    console.log("currentPathname ", currentPathname);
    if (currentPathname != "/signin" && currentPathname != "/signup") {
      console.log("currentUser ", currentUser);
      if (currentUser == undefined) {
        window.location.href = "/signin";
      }
    }
  });
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>{children}</UserContext.Provider>
  );
};
export default UserContext;
