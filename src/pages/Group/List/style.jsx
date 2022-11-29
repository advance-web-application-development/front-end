import styled from "styled-components";
const Styled = styled.div`
  .group-list-top-bar {
    display: flex;
    flex: 1 1 0%;
    justify-content: flex-end;
  }
  .create-group-button {
    margin: 0px;
    border: 0px;
    cursor: pointer;
    vertical-align: bottom;
    box-shadow: rgb(0 0 0 / 25%) 0px -4px inset;
    background: rgb(19, 104, 206);
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    /* padding: 20px; */
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    min-width: 42px;
    min-height: 42px;
    padding: 0px 16px 5px;
    position: relative;
    font-family: Montserrat, "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 42px;
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
  .form {
    width: 100%;
  }
  .error-message {
    color: red;
    font-size: 14px;
    line-height: 20px;
    margin: 20px 0px;
  }
`;

export default Styled;
