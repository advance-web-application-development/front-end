import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ListGroup from "./pages/Group/List/List";
import ButtonAppBar from "./pages/Group/Detail/Detail";
import GroupMember from "./pages/Group/Member/Member";
import GroupSile from "./pages/Group/Slide/Slide";

import { Header } from "./components/Header";
import { UserProfile, ProfileSetting } from "./pages/UserProfile";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false
    }
  }
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <main
            style={{
              marginTop: "6.4rem",
              padding: "2.4rem 2.4rem",
              overflowY: "auto",
              width: "100vw",
              height: "100vh"
            }}>
            <Routes>
              <Route exact path="/" element={<Navigate to="/signin" />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route exact path="/groups" element={<ListGroup />} >
                <Route exact path="/group-detail" element={<ButtonAppBar />} />
                <Route exact path="/group-members" element={<GroupMember />} />
                <Route exact path="/group-slides" element={<GroupSile />} />
              </Route>

              <Route path="/user" element={<UserProfile />}>
                <Route path={``} element={<Navigate to={`./profile`} />} />
                <Route path={`profile`} element={<ProfileSetting />} />
              </Route>
              <Route element={<NoMatch />} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
