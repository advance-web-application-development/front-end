import styled from "styled-components";
const Styled = styled.div`
  .signup-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
  .header {
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 2;
    height: 3.5rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
    background: #fff;
    padding: 10px 20px;
    display: flex;
  }
  .header-img {
    width: 5rem;
  }
  .signup-main {
    padding-top: 3.5rem;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    width: fit-content;
  }
  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
    padding: 10px 40px;
  }
  .card-container h2 {
    font-weight: bold;
    line-height: 140%;
    margin-top: 30px;
  }
  .input-box {
    align-self: flex-start;
    width: 100%;
  }
  .input-label {
    font-weight: bold;
    display: block;
    padding: 5px 0px;
  }
  .input-box .input-text[type="text"],
  .input-box .input-text[type="password"] {
    width: 100%;
    min-height: 2.75rem;
    font-family: Montserrat, "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 1px solid rgb(178, 178, 178);
    border-radius: 5px;
    background-color: #fff !important;
    color: rgb(51, 51, 51) !important;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.2px;
    outline: none;
    border: none;
    transition: all 1s ease-in;
    padding-left: 20px;
    text-overflow: ellipsis;
  }
  .input-text[type="password"] {
    padding-right: 35px;
    overflow: hidden;
    white-space: nowrap;
  }
  .input-text:focus {
    border: 1px solid rgb(19, 104, 206) !important;
  }
  .signup-btn {
    margin: 30px 0px;
    border: none;
    width: 100%;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 25%) 0px -4px inset;
    background: rgb(38, 137, 12);
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    min-width: 42px;
    min-height: 42px;
    padding: 0px 16px 4px;
  }
  .card-line {
    margin: 0px;
    width: 100%;
    border-top: 1px solid rgb(204, 204, 204);
  }
  .auth-split {
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 100%;
    flex-direction: row;
  }
  .card-text {
    position: absolute;
    padding: 0px 0.5rem;
    background: rgb(255, 255, 255);
    font-weight: bold;
    margin-top: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .single-sign-on {
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .google-sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0.25rem 0px;
    border-radius: 4px;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    padding: 0px;
    line-height: 1rem;
    height: auto;
    font-weight: 500;
  }
  .google-sign-img {
    min-height: 1.75rem;
    margin: 0px 0.5rem;
  }
  .form-login {
    width: 100%;
  }
  .text-disclaimer {
    margin-top: 1rem;
    max-width: 26rem;
    text-align: center;
    font-size: 0.8rem;
    color: rgb(110, 110, 110);
  }
  .error-message {
    color: red;
    font-size: 14px;
    line-height: 20px;
    margin: 20px 0px;
  }
  .redirect-signup {
    text-align: center;
    letter-spacing: 1px;
  }
  .redirect-signup a {
    color: rgb(19, 104, 206);
    margin-left: 5px;
  }
  .pwd-container {
    position: relative;
  }
  .pwd-action {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  #role_id {
    width: 100%;
    margin-top: 10px;
    height: 30px;
    border: none;
  }
`;

export default Styled;
