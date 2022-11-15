import React, { useState } from "react";
import Styled from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginUser } from "../../components/api";
const SignIn = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const signInSchema = Yup.object({
    username: Yup.string()
      .email("Not a proper email")
      .min(10, "Minimum 10 characters")
      .required("Username required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be at least 8 characters")
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
  return (
    <Styled>
      <div className="signin-container">
        <div className="header">
          <img src="./kahoot.png" className="header-img" alt="kahoot" />
        </div>
        <main class="signin-main">
          <div className="main-container">
            <div className="auth-form">
              <div className="card-container">
                <h2>Log in</h2>
                <form className="form-login" method="post" onSubmit={formik.handleSubmit}>
                  <div className="input-box">
                    <label htmlFor="username" className="input-label">
                      Email
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
                  <button className="google-sign">
                    <img
                      className="google-sign-img"
                      src="https://assets-cdn.kahoot.it/auth/assets/google.004af66e.svg"
                      alt="google"
                    />
                    <div className="google-sign-label">Continue with google </div>
                  </button>
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
