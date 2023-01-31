import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = ({ bgColor, bTop }) => {
  return (
    <Component style={{ backgroundColor: bgColor, borderTop: bTop ? "1px solid #e6e6e6" : 'none' }}>
      <section className="wrapper">
        <div className="footer__questions">
          <p>
            Questions? Call <a href="tel:+18445052993">1-844-505-2993</a>
          </p>
        </div>
        <nav className="footer__links">
          <div className="footer__link">
            <NavLink>FAQ</NavLink>
            <NavLink>Cookie Preferences</NavLink>
          </div>
          <div className="footer__link">
            <NavLink>Help Center</NavLink>
            <NavLink>Corporate Information</NavLink>
          </div>
          <div className="footer__link">
            <NavLink>Terms of Use</NavLink>
            <NavLink>Do Not Sell or Share My Personal Information</NavLink>
          </div>
          <NavLink to={"/"}>Privacy</NavLink>
        </nav>
        <div className="language">
            <LanguageIcon style={{ color: "#737373", height: "1rem" }} />
            <select name="lang" id="lang">
              <option value="english">English</option>
              <option value="espanol">Espanol</option>
            </select>
        </div>
      </section>
    </Component>
  );
};

const Component = styled.footer`
    height: 40vh;
    position: absolute;
    z-index: 3;
    bottom: 0;
    width: 100%;
    // background: rgba(0,0,0,.75);

    section {
        display: grid;
        grid-template-rows: 0.7fr 1fr 1fr;
        padding: 30px 40px;
        height: 100%;
        p {
            color: #737373;
            font-size: 1rem;
            a {
                color: #737373;
                font-size: 1rem;
            }
        }

        .footer__links {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            column-gap: 10px;
            div {
                
            }
            a {
                color: #737373;
                font-size: 0.81rem;
                display: block;
                margin-bottom: 20px;
            }

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
