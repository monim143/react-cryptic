/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <Route
            {...rest}
            render={props => {
                isAuthenticated ? <Component {...props} /> : <Redirect to="/sign-in" />
            }}
        />
    );
}

export default ProtectedRoute;