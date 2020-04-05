import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = () => {
    console.log("object");
}

const faceBookLogin = () => {
    return (<FacebookLogin
        appId="146225643483574"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />);
}

export default faceBookLogin;