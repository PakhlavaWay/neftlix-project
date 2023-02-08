import React from "react";
import { useSelector } from "react-redux";

const CheckAuthorized = (Component) => {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  if (isAuthorized) return <Component />
  return <h1 style={{ color: 'red', textAlign: 'center', marginTop: '100px' }}>You are not authorized</h1>
};

export default CheckAuthorized;
