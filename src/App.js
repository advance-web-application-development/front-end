import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ListGroup from "./pages/Group/List/List";
import ButtonAppBar from "./pages/Group/Detail/Detail";
import GroupMember from "./pages/Group/Member/Member";
import GroupSlile from "./pages/Group/Slide/Slide";
import GroupInvitation from "./pages/Group/Invitate/Invitate";
import { Header } from "./components/Header";
import { UserProfile, DefaultProfile } from "./pages/UserProfile";

const App = () => {
  return (
    <>
  
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
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/groups" element={<ListGroup />} />
            <Route exact path="/group-detail" element={<ButtonAppBar />} />
            <Route exact path="/group-members" element={<GroupMember />} />
            <Route exact path="/group-slides" element={<GroupSlide />} />
            <Route exact path="/group-invitation/:id" element={<GroupInvitation />} />
            <Route path="/user" element={<UserProfile />}>
              <Route path={``} element={<Navigate to={`./profiles`} />} />
              <Route path={`profiles`} element={<DefaultProfile />} />
            </Route>
            <Route element={<NoMatch />} />
          </Routes>
        </main>
      </>
  );
};

export default App;
