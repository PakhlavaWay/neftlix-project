import React, { useState } from "react";
import logo from "../../images/netflix-logo.png";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [langMode, setLangMode] = useState(false);

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
          <div
            onClick={() => setLangMode(!langMode)}
            className="hover:cursor-pointer relative"
          >
            <LanguageIcon style={{ color: "white", height: "1rem" }} />
            <div className="text-white !border-none xxs:!hidden sm:!block">{language}</div>
            <div
              className={`select !border-4 !border-solid !bg-white ${
                langMode ? "!absolute top-9 right-0 !flex !flex-col !items-start" : "!hidden"
              }`}
            >
              <p className="!text-base !text-gray-500 hover:!text-gray-700" onClick={() => setLanguage("English")}>English</p>
              <p className="!text-base !text-gray-500 hover:!text-gray-700" onClick={() => setLanguage("Espanol")}>Espanol</p>
            </div>
            {langMode ? (
              <ArrowDropUpIcon className="text-white" />
            ) : (
              <ArrowDropDownIcon className="text-white" />
            )}
          </div>
          <NavLink to="/login" className="flex items-center">Sign In</NavLink>
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
      }
      a {
        padding: 5px 15px!important;
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
