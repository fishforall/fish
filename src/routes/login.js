import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button"


function Login(props) {
    const isAuth = useSelector(state => state.isAuth);
    const dispatch = useDispatch();
    const loginHandler = (data) => {
        console.log("object");
        dispatch({
            type: "LOGIN",
        })
    }
    if (isAuth) return (
        <>
            <Redirect
                to={{
                    pathname: props.location.prevpatchname,
                }}
            />
        </>
    )
    else {
        return (
            <>
                <Button onClick={loginHandler} variant="contained" color="primary">Loguj</Button>
            </>
        )
    }
}

export default Login;