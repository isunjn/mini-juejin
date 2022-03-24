import React from "react";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default MainContent;
