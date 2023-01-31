import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ toWhere, text, ...props }) => {
  return (
    <NavLink to={toWhere} style={{ margin: '0 auto', display: 'block', ...props }}>
      <button
        style={{
          fontSize: "1.5rem",
          padding: "20.5px 2em",
          width: "100%",
          minHeight: "60px",
          minWidth: "110px",
          borderRadius: "4px",
        }}
      >
        {text}
      </button>
    </NavLink>
  );
};

export default Button;
