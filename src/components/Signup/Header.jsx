import React from "react";
import logo from "../../images/netflix-logo.png";
import { NavLink } from "react-router-dom";

const Header = ({ action }) => {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e6e6e6",
        height: "90px",
      }}
    >
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "inherit",
        }}
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "45px", width: "167px" }}
          />
        </NavLink>
        <NavLink
          to="/login"
          style={{
            color: "#333",
            fontSize: "1.2rem",
            fontWeight: "700",
            lineHeight: "90px",
          }}
        >
          {action}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
