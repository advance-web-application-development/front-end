import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { UserProfile, DefaultProfile } from "./pages/UserProfile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main
          style={{
            marginTop: "5rem",
            padding: "1rem 2.4rem",
            overflowY: "auto",
            width: "100vw",
            height: "100vh"
          }}>
          <Routes>
            <Route exact path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/groups"
              element={
                <>
                  <h2>This is groups page</h2>
                </>
              }
            />
            <Route path="/user" element={<UserProfile />}>
              <Route path={``} element={<Navigate to={`./profiles`} />} />
              <Route path={`profiles`} element={<DefaultProfile />} />
            </Route>
            <Route element={<NoMatch />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
