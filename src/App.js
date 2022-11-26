import React from "react";
import NoMatch from "./pages/NoMatch";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ListGroup from "./pages/Group/List/List";
import ButtonAppBar from "./pages/Group/Detail/Detail";
import GroupMember from "./pages/Group/Member/Member";
import GroupSile from "./pages/Group/Slide/Slide";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Navigate to="/signin" />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/groups" element={<ListGroup />} />
          <Route exact path="/group-detail" element={<ButtonAppBar />} />
          <Route exact path="/group-members" element={<GroupMember />} />
          <Route exact path="/group-slides" element={<GroupSile />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
