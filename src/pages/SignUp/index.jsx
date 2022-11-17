import React, { useState } from "react";
import Styled from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { registerUser } from "../../utils/api";
import Header from "../Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GOOGLE_CLIENT_ID } from "../../actions/constants";
import { loginUserWithGoogle } from "../../utils/api";
import GoogleLoginButton from "../../components/GoogleLoginButton";
const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const SignUpSchema = Yup.object({
    username: Yup.string().min(3, "Minimum 3 characters").required("Username required"),
    email: Yup.string()
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
      email: "",
      password: ""
    },
    validationSchema: SignUpSchema,
    onSubmit: async (value) => {
      console.log("sign up submit ", value);
      const data = await registerUser(value.username, value.email, value.password);
      console.log("data register ", data);
      if (data.status != 200) {
        // alert(data.data);
        toast.error(data.data, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light"
        });
        return;
      }
      const userResponse = data.data.username;
      // user have successfully register
      // alert(`User ${userResponse} have successfully signed up`);
      const msg = `User ${userResponse} have successfully signed up`;
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
      navigate("/signin");
    }
  });
  const responseGoogle = async (response) => {
    console.log("response google ", response);
    const res = await loginUserWithGoogle(response.tokenId);
    const { data, status } = res;

    if (status != 200) {
      toast.error(data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
    } else {
      const { accessToken, refreshToken, msg } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
      navigate("/home");
    }
  };
  // const userRole = [
  //   {
  //     value: "teacher",
  //     content: "teacher"
  //   },
  //   {
  //     value: "student",
  //     content: "student"
  //   }
  // ];
  return (
    <Styled>
      <div className="signup-container">
        <Header />
        <main className="signup-main">
          <div className="main-container">
            <div className="auth-form">
              <div className="card-container">
                <h2>Sign up</h2>
                <form
                  className="form-login"
                  method="post"
                  onSubmit={formik.handleSubmit}
                  autoComplete="on">
                  <div className="input-box">
                    <label htmlFor="username" className="input-label">
                      Username
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
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="Input email"
                      className="input-text"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="error-message">{formik.errors.email}</p>
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
                  {/* <div className="input-box">
                    <label htmlFor="role_id" className="input-label">
                      Your role
                    </label>
                    <select
                      id="role_id"
                      name="role_id"
                      value={formik.values.role_id}
                      onChange={formik.handleChange}>
                      {userRole.map((item, idx) => {
                        return (
                          <option key={`userRole-${idx}`} value={item.value}>
                            {item.content}
                          </option>
                        );
                      })}
                    </select>
                  </div> */}
                  <button type="submit" className="signup-btn">
                    Sign up
                  </button>
                </form>
                <div className="auth-split">
                  <hr className="card-line" />
                  <span className="card-text">or</span>
                </div>
                <div className="single-sign-on">
                  <GoogleLoginButton responseGoogle={responseGoogle} />
                </div>
                <p className="redirect-signup">
                  Already have an account?
                  <a href="/signin">Sign in</a>
                </p>

                <p className="text-disclaimer">
                  By signing up, you accept our Terms and Conditions. Please read our Privacy Policy
                  and Children’s Privacy Policy.
                </p>
                <p className="text-disclaimer">
                  I understand that I can withdraw my consent at any time and the withdrawal will
                  not affect the lawfulness of the consent before its withdrawal, as described in
                  the Kahoot! Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Styled>
  );
};

export default SignUp;
