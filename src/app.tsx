import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/container/app";
import "./style.scss";
import "./reset.css";
import "./style.css";

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module?.["hot"]) {
  // enables hot module replacement if plugin is installed
  module?.["hot"].accept();
}
