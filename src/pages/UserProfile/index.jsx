import React, { useEffect } from "react";
import { Router, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";

export const UserProfile = function (props) {
  return (
    <>
      <Outlet />
    </>
  );
};

export const DefaultProfile = function (props) {
  useEffect(() => {
    document.title = "Your Profile";
  }, []);
  return <h2>This is user Profile</h2>;
};
