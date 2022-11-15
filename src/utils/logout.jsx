import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const onLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
