import React from "react";
import { Outlet } from "react-router-dom";

const RootRoute = () => {
  const windowHeight = window.innerHeight;

  const divStyle = {
    width: "100%",
    height: windowHeight * 0.9
  };

  const headerStyle = {
    width: "100%",
    height: windowHeight * 0.1,
    backgroundColor: "#000000"
  };

  return (
    <div>
      <div style={headerStyle}></div>
      <div style={divStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootRoute;
