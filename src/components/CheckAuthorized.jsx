import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CheckAuthorized = (Component) => {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  if (isAuthorized) return <Component />
  return (
    <div style={{ paddingTop: '100px', backgroundColor: "#141414", height: '100vh' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>You are not authorized</h1>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>Please, <NavLink to="/login" style={{ color: 'blue' }}>login</NavLink></p>
    </div>
  )
  
};

export default CheckAuthorized;
