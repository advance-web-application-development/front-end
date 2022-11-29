import React from "react";
import NoMatch from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ListGroup from "./pages/Group/List/List";
import ButtonAppBar from "./pages/Group/Detail/Detail";
import GroupMember from "./pages/Group/Member/Member";
import GroupSile from "./pages/Group/Slide/Slide";
import GroupInvitation from "./pages/Group/Invitate/Invitate";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProfile, ProfileSetting } from "./pages/UserProfile";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./utils/UserContext";
import { Header } from "./components/Header";
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
          <main
            style={{
              marginTop: "6.4rem",
              padding: "2.4rem 2.4rem",
              overflowY: "auto",
              width: "100vw",
              height: "100vh"
            }}>
            <UserProvider>
              <Routes>
                <Route exact path="/" element={<Navigate to="/signin" />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route exact path="/groups" element={<ListGroup />} />

                <Route path="group-detail" element={<ButtonAppBar />} />
                <Route path="group-members" element={<GroupMember />} />
                <Route path="group-slides" element={<GroupSile />} />
                <Route exact path="/group-invitation/:id" element={<GroupInvitation />} />

                <Route path="/user" element={<UserProfile />}>
                  <Route path={``} element={<Navigate to={`./profile`} />} />
                  <Route path={`profile`} element={<ProfileSetting />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </UserProvider>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
