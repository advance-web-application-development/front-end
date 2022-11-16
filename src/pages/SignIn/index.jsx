import React, { useState, useEffect } from "react";
import Styled from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginUser, loginUserWithGoogle } from "../../components/api";
import { useGoogleLogin, GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../components/refreshToken";
const clientId = "822297739446-deshsuk8vegbl4lpb1ehfpfgm7n80eim.apps.googleusercontent.com";
// import { gapi } from "gapi-script";
const SignIn = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const responseGoogle = async (response) => {
    console.log("response google ", response);
    const res = await loginUserWithGoogle(response.tokenId);
    const data = await res.json();
  };
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "email"
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

  const signInSchema = Yup.object({
    username: Yup.string().min(3, "Minimum 3 characters").required("Username required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - shoulWd be at least 8 characters")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character")
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: signInSchema,
    onSubmit: async (value) => {
      console.log("value submit ", value);
      try {
        const responseSignIn = await loginUser(value.username, value.password);
        const { data, status } = responseSignIn;

        if (status != 200) {
          alert(data);
        } else {
          const { accessToken, refreshToken, msg } = data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          alert(msg);
          navigate("/home");
        }
      } catch (err) {
        throw err;
      }
    }
  });
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    // alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
  };
  const { signInWithGoogle } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline"
    // responseType: 'code',
    // prompt: 'consent',
  });
  return (
    <Styled>
      <div className="signin-container">
        <div className="header">
          <img src="./kahoot.png" className="header-img" alt="kahoot" />
        </div>
        <main className="signin-main">
          <div className="main-container">
            <div className="auth-form">
              <div className="card-container">
                <h2>Log in</h2>
                <form className="form-login" method="post" onSubmit={formik.handleSubmit}>
                  <div className="input-box">
                    <label htmlFor="username" className="input-label">
                      Username or email
                    </label>
                    <input
                      id="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="Input username"
                      className="input-text"
                    />
                    {formik.errors.username && formik.touched.username && (
                      <p className="error-message">{formik.errors.username}</p>
                    )}
                  </div>
                  <div className="input-box">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <div className="pwd-container">
                      <input
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type={showPwd ? "text" : "password"}
                        placeholder="Input password"
                        className="input-text"
                      />
                      <div className="pwd-action" onClick={() => setShowPwd(!showPwd)}>
                        <div className="pwd-img">
                          {showPwd == false ? (
                            <VisibilityOutlinedIcon />
                          ) : (
                            <VisibilityOffOutlinedIcon />
                          )}
                        </div>
                      </div>
                    </div>
                    {formik.errors.password && formik.touched.password && (
                      <p className="error-message">{formik.errors.password}</p>
                    )}
                  </div>
                  <button type="submit" className="login-btn">
                    Log in
                  </button>
                </form>
                <div className="auth-split">
                  <hr className="card-line" />
                  <span className="card-text">or</span>
                </div>
                <div className="single-sign-on">
                  {/* <div className="google-sign" onClick={signInWithGoogle}>
                    <img
                      className="google-sign-img"
                      src="https://assets-cdn.kahoot.it/auth/assets/google.004af66e.svg"
                      alt="google"
                    />
                    <span className="google-sign-label">Continue with google </span>
                  </div> */}

                  <GoogleLogin
                    clientId="822297739446-qu3br0ghfita1c8fls1v11jibi6r13fm.apps.googleusercontent.com"
                    buttonText="Continue with google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}></GoogleLogin>
                </div>
                <p className="redirect-signup">
                  Don't have an account?
                  <a href="/signup">Sign up</a>
                </p>
              </div>
            </div>
            <p className="text-disclaimer">
              By signing up, you accept our Terms and Conditions. Please read our Privacy Policy and
              Children’s Privacy Policy.
            </p>
            <p className="text-disclaimer">
              I understand that I can withdraw my consent at any time and the withdrawal will not
              affect the lawfulness of the consent before its withdrawal, as described in the
              Kahoot! Privacy Policy.
            </p>
          </div>
        </main>
      </div>
    </Styled>
  );
};

export default SignIn;
