import React from "react";
import { Route, Redirect } from "react-router-dom";

// <AuthRoute path="/questions/new" component={QuestionNewPage} />
const AuthRoute = props => {
    const { isAuth, component: Component, restProps } = props

    return(
        <Route 
            {...restProps}
            render = { restProps => {
                if (isAuth) {
                    return <Component {...restProps} />;
                } else {
                    return <Redirect to="/sign_in" />;
                }
            }}
        />
    );
}

export default AuthRoute;