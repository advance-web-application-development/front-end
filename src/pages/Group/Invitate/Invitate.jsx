import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../utils/api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { onLogout } from "../../../utils/method";
import { Link } from "react-router-dom";
import {Button } from '@mui/material';

const queryClient = new QueryClient();
export default function GroupInvitation() {
  return (
    <QueryClientProvider client={queryClient}>
      <InvitatePage />
    </QueryClientProvider>
  );
}

function InvitatePage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading, error, isError, refetch } = useQuery(
    "user",
    () => fetchUsers(accessToken),
    {
      enabled: false
    }
  );
  useEffect(() => {
    verifyToken();
    refetch();
  }, []);

  //vertify token
  const verifyToken = async () => {
    if (!accessToken) {
      navigate("/signin");
    }
  };
  if (isLoading) {
    return <div>Is Loading</div>;
  }
  if (isError) {
    console.log("err", error);
  }
  return (
    <div>
      <p className="text-white text-[40px]">Hello {data ? data.username : ""}</p>
      <Button
        onClick={() => onLogout()}
        to="/signin">
        <p className="text-white text-[16px] text-center">Join</p>
      </Button>
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Logout button"
        onLogoutSuccess={() => onLogoutSuccess()}
        onFailure={() => onLogoutFailer()}
        className="logout button"
        ref={btngoogleLogout}
      /> */}
    </div>
  );
}