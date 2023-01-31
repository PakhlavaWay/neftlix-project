import React from "react";
import styled from "styled-components";
import logo from '../../images/netflix-logo.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Component className="wrapper">
      <header className="header">
        <div className="header__logo">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
      </header>
    </Component>
  );
};

const Component = styled.section`
  .header {
    display: flex;
    align-items: center;
    height: 15vh;
    position: absolute;
    div {
      width: 165px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Header;
