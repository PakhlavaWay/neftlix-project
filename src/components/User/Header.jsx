import React from "react";
import logo from "../../images/netflix-logo.png";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <header className="container w-full mx-auto h-12 !mt-2 absolute">
      <div className="header__wrapper wrapper h-full w-full flex justify-between items-center text-white text-sm leading-5">
        <NavLink className="logo basis-1/12" to="/">
          <img className="w-26 h-6" src={logo} alt="logo" />
        </NavLink>
        <nav className="flex basis-7/12 gap-4">
          <NavLink to="/" className='font-bold'>Home</NavLink>
          <NavLink to="/">TV Shows</NavLink>
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/">New & Popular</NavLink>
          <NavLink to="/">My List</NavLink>
          <NavLink to="/">Browse by Languages</NavLink>
        </nav>
        <div className="flex basis-3/12 gap-4">
          <SearchIcon className="ml-auto"/>
          <NavLink to="/">Kids</NavLink>
          <NavLink to="/">DVD</NavLink>
          <NotificationsNoneIcon />
          <div>
            <AccountBoxIcon />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
