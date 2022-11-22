import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../utils/api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { onLogout } from "../../utils/method";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

function HomePage_() {
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
  // const onLogoutSuccess = () => {
  //   console.log("log out success from google");
  // };
  // const onLogoutFailture = () => {
  //   console.log("log out fail from google");
  // };
  return (
    <div>
      <p className="text-white text-[40px]">Hello {data ? data.username : ""}</p>
      <Link
        className="px-[10px] py-[8px] bg-[#20DF7F] h-[45px] w-full rounded-[10px] mt-[24px]"
        onClick={() => onLogout()}
        to="/signin">
        <p className="text-white text-[16px] text-center">Log Out</p>
      </Link>
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

function HomePage() {
  useEffect(() => {
    document.title = "Home Page - KKahoot";
  }, []);
  return <>This is Homepage</>;
}
