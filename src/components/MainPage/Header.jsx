import React from "react";
import logo from "../../images/netflix-logo.png";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Component className="wrapper">
      <header
        className="header"
        style={{ height: "15vh", position: "absolute" }}
      >
        <div className="header__logo">
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", width: "135px" }}
          />
        </div>
        <div className="header__sign-in">
          <div>
            <LanguageIcon style={{ color: "white", height: "1rem" }} />
            <select name="lang" id="lang">
              <option value="english">English</option>
              <option value="espanol">Espanol</option>
              
            </select>
          </div>
          <NavLink to="/login">Sign In</NavLink>
        </div>
      </header>
    </Component>
  );
};

const Component = styled.div`
  .header {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .header__sign-in {
      display: flex;
      column-gap: 15px;
      div {
        display: flex;
        width: fit-content;
        align-items: center;
        border: 1px solid white;
        background: transparent;
        padding: 3px;
        border-radius: 5px;
        position: relative;

        select {
          color: white;
          background-color: transparent;
          border: none;
          font-size: 1rem;
          white-space: nowrap;
          appearance: none;
          padding-right: 25px;
          background: 
          url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABkSURBVHgBlc9dDYAwDATgwwESJgUJoAALOEACUiYFCUiYhHKQPnTZ/yXdw7avaScRmQF4jGX7T+JL+nNGLXjhO1A62Tcy666gR9dCDjv9kEMOtSgOBoUmMngxcMVICA7WXnp/Afu+yQgieRTPAAAAAElFTkSuQmCC') 
          no-repeat 90% center;

          option {
            background-color: gray;
          }
        }
      }
      a {
        padding: 10px 15px;
        background-color: red;
        color: white;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

export default Header;
