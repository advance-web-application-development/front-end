import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
