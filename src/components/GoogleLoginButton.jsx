import React from "react";
import { GOOGLE_CLIENT_ID } from "../actions/constants";
import { GoogleLogin } from "react-google-login";
const GoogleLoginButton = (props) => {
  console.log("props ", props, GOOGLE_CLIENT_ID);
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Continue with google"
      onSuccess={props.responseGoogle}
      onFailure={props.responseGoogle}
      cookiePolicy={"single_host_origin"}
      prompt="select_account"></GoogleLogin>
  );
};
export default GoogleLoginButton;
