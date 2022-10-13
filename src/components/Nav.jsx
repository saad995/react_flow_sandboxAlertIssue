import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  const windowHeight = window.innerHeight;

  const divStyle = {
    width: "100%",
    height: windowHeight * 0.9
  };

  return (
    <div style={divStyle}>
      <div>
        <Link to="/flow/1">
          <button
            onClick={() => {
              alert("Nav");
            }}
          >
            Send
          </button>
        </Link>
      </div>
    </div>
  );
};
