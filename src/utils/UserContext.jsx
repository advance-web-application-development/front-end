import React, { useState, createContext, useEffect } from "react";
import SignIn from "../pages/SignIn";
import { isAuthenticated } from "./AuthService";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    console.log("vao useEffect: " + currentUser);
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
    const accessToken = localStorage.getItem("accessToken");
    console.log("currentPathname ", currentPathname);
    if (currentPathname != "/signin" && currentPathname != "/signup") {
      console.log("check sign in ", accessToken);
      if (currentUser == undefined && accessToken == null) {
        window.location.href = "/signin";
      }
    }
  });
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>{children}</UserContext.Provider>
  );
};
export default UserContext;
