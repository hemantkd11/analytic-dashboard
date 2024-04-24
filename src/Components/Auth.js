
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return (isAuthenticated = { isAuthenticated } ? (
    <>{children}</> 
  ) : (
    <Navigate to="/signin" replace />
  ));
};

export default ProtectedRoute;
