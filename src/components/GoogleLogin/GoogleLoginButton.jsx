import React, { memo } from "react";
import { GOOGLE_CLIENT_ID } from "../../actions/constants";
import { GoogleLogin } from "react-google-login";
const GoogleLoginButton = (props) => {
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
export default memo(GoogleLoginButton);
