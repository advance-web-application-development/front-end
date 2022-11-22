import React from "react";
import Container from "react-bootstrap/Container";
import Avatar from "@mui/material/Avatar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Styled, MenuItem as MenuBarItem, MenuBar, MenuList } from "./style.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom";

// Lấy 2 chữ cái đầu của tên cho Avatar.
function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  };
}

export const Header = function (props) {
  // const MenuCreate = [
  //   {
  //     Name: "Tạo group",
  //     Link: "/home"
  //   }
  // ];
  return (
    <>
      <MenuBar id="menubar-horizontal" bg="light" className="d-none d-md-flex">
        <Container fluid style={{ height: "inherit" }}>
          <MenuBar.Brand href="/">
            <img id="logo" width={40} src="/assets/images/google-classroom.png" />
          </MenuBar.Brand>
          {/* <MenuBar.Toggle aria-controls="navbar-nav" /> */}
          <MenuList className="me-auto">
            <MenuBarItem to="/home">Home</MenuBarItem>
            <MenuBarItem to="/groups">Groups</MenuBarItem>
          </MenuList>
          <MenuList className="d-flex align-items-center justify-content-evenly">
            <CreatingButton variant="contained" id="create-btn" className="m-2 expanded">
              <AddIcon className="d-lg-none" sx={{ width: "32px" }} />
              <p className="d-none d-lg-block mb-0">Create</p>
            </CreatingButton>
            <AvatarButton>
              <Avatar {...stringAvatar("Kent Dodds")} className="bg-success" role="button" />
            </AvatarButton>
            <NotificationsOutlinedIcon
              className="m-2"
              sx={{ width: "40px", height: "40px" }}
              role="button"
            />
          </MenuList>
        </Container>
      </MenuBar>
    </>
  );
};

//#region Create Button

function CreatingButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="create-btn"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        className="m-2 expanded">
        {props.children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}>
        <MenuItem>
          <a className="text-decoration-none text-dark" href="/groups/create">
            Create new group
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

//#endregion

//#region Avatar Button
function AvatarButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="avatar-btn"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="p-0 m-2">
        {props.children}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}>
        <Link className="text-decoration-none text-dark" to="/user/profiles">
          <MenuItem sx={{ minWidth: 40 }}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </MenuItem>
        </Link>
        <Link className="text-decoration-none text-dark" href="/logout">
          <MenuItem sx={{ minWidth: 40 }}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
//#endregion
