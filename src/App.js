import React from "react";
import {  Navigate } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ListGroup from "./pages/Group/List/List";
import ButtonAppBar from "./pages/Group/Detail/Detail";
import GroupMember from "./pages/Group/Member/Member";
import GroupSile from "./pages/Group/Slide/Slide";
import GroupInvitation from "./pages/Group/Invitate/Invitate";
import { Route, Routes } from "react-router";

const App = () => {
  return (

      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/groups" element={<ListGroup />} />
        <Route exact path="/group-detail" element={<ButtonAppBar />} />
        <Route exact path="/group-members" element={<GroupMember />} />
        <Route exact path="/group-slides" element={<GroupSile />} />
        <Route exact path="/group-invitation/:id" element={<GroupInvitation />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
  );
};

export default App;
