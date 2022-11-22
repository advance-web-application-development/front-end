import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";

export const Styled = styled.div`
  line-height: 1.72rem;
  #logo {
    width: 4rem;
  }

  #menubar {
    line-height: 1.72;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }

  .nav-link {
    height: 6.4rem;
    display: flex;
    align-items: center;
    padding: 0.2rem 2rem 0;
    position: relative;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 1.4rem;
  }

  .nav-link:hover {
    background-color: #ccc;
  }
  .nav-link.active {
    color: #ff8b66;
    border-bottom: 1px solid transparent;
    background: #feefe3;
  }

  .nav-link:hover:after {
    border: #ff8b66;
    border-radius: 0.25rem 0;
  }
`;

export const MenuBar = styled(Navbar)`
  padding: 0 !important;
  height: 64px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export const MenuList = styled(Nav)`
  height: inherit;
`;

export const MenuItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 24px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  :hover {
    background-color: #ccc;
    color: #000;
  }
  :after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0px;
    width: 100%;
    height: 0px;
    border-top: 4px solid transparent;
    border-radius: 25px 25px 0 0;
  }
  &.active {
    color: #009e58 !important;
  }
  &.active:after {
    border-color:#009e58 !important;
  }
  &.active:hover{
    background-color: #deece8;
  }
  &.active:hover:after {
    border-top: 5px solid;
  }
`;

export const UserAvatar = styled(Avatar)`
  text-decoration: none;
`;
