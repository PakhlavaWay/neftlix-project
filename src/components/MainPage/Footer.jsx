import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Component className="footer">
      <div className="footer__wrapper">
        <p style={{ margin: '60px 0 20px' }}>
          Questions? Call <a href="tel:+18445052993" style={{ display: 'inline' }}>1-844-505-2993</a>
        </p>
        <div className="links__container">
          <div className="link__container">
            <NavLink to={"#"}>FAQ</NavLink>
            <NavLink to={"#"}>Investor Relations</NavLink>
            <NavLink to={"#"}>Ways to Watch</NavLink>
            <NavLink to={"#"}>Corporate Information</NavLink>
            <NavLink to={"#"}>Only on Netflix</NavLink>
          </div>
          <div className="link__container">
            <NavLink to={"#"}>Help Center</NavLink>
            <NavLink to={"#"}>Jobs</NavLink>
            <NavLink to={"#"}>Terms of Use</NavLink>
            <NavLink to={"#"}>Contact Us</NavLink>
            <NavLink to={"#"}>
              Do Not Sell or Share My Personal Information
            </NavLink>
          </div>
          <div className="link__container">
            <NavLink to={"#"}>Account</NavLink>
            <NavLink to={"#"}>Redeem Gift Cards</NavLink>
            <NavLink to={"#"}>Privacy</NavLink>
            <NavLink to={"#"}>Speed Test</NavLink>
          </div>
          <div className="link__container">
            <NavLink to={"#"}>Media Center</NavLink>
            <NavLink to={"#"}>Buy Gift Cards</NavLink>
            <NavLink to={"#"}>Cookie Preferences</NavLink>
            <NavLink to={"#"}>Legal Notices</NavLink>
          </div>
        </div>
        <div className="language">
            <LanguageIcon style={{ color: "#737373", height: "1rem" }} />
            <select name="lang" id="lang">
              <option value="english">English</option>
              <option value="espanol">Espanol</option>
            </select>
        </div>
      </div>
    </Component>
  );
};

const Component = styled.footer`
  height: 60vh;
  background-color: #000;
  .footer__wrapper {
    width: 70%;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-rows: 0.15fr 0.5fr 0.3fr;
    // row-gap: 20px;
    p {
        font-size: 1rem;
        color: #737373;
        align-self: end;
    }

    .links__container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 15px;
        margin-bottom: 25px;
        .link__container {
            align-self: start;
            a {
                margin: 15px 0;
            }
        }
    }
    a {
        font-size: 0.9rem;
        color: #737373;
        display: block;
    }

    .language {
        align-self: end;
        height: 50px;
        display: flex;
        width: fit-content;
        align-items: center;
        border: 1px solid white;
        background: transparent;
        padding: 5px 4px;
        border-radius: 5px;
        border: 1px solid #333;
        select {
          background: transparent;
          color: #737373;
          border: none;
          font-size: 1rem;
          white-space: nowrap    
        }    
    }
  }
`;

export default Footer;
