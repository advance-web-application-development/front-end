import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "@/container/home";
import NotFound from "@/container/not-found";

function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  )
}

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;