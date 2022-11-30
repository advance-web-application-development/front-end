import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { exitsGroup, sendInvitationMail } from "../../../utils/api";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Box, Button, Modal } from "@mui/material";
import { toast } from "react-toastify";
import { FRONTEND_URL } from "../../../actions/constants";
import GroupsIcon from "@mui/icons-material/Groups";


import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledNavLink } from "./style";
import { Header } from "../../../components/Header";
import { Menu } from "antd";
const drawerWidth = 240;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    formik.setFieldValue("email", "");
    setOpen(false);
  };
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const leaveGroup = async () => {
    const data = await exitsGroup(id, accessToken);
    if (data.status != 200) {
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
    navigate("/groups");
    const msg = `Leaving group is successful `;
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light"
    });
  };
  const getMemeber = () => {
    navigate("/group-members", { state: { id: id } });
  };
  const getSlide = () => {
    navigate("/group-slides", { state: { id: id } });
  };
  const back = () => {
    navigate("/groups");
  };
  const UserSchema = Yup.object({
    email: Yup.string()
      .email("Not a proper email")
      .min(10, "Minimum 10 characters")
      .required("Email required")
  });
  const verifyToken = async () => {
    console.log("jdjnfsdj:", accessToken);
    if (!accessToken) {
      navigate("/signin");
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: UserSchema,
    onSubmit: async (value) => {
      console.log(value);
      const data = await sendInvitationMail(value.email, id, accessToken);

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
      handleClose();
      const msg = `You have send mail for ${value.email} successfully `;
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
      reloadGroup("");
    }
  });
  return (
    <>
      <Header />
      <Menu
        style={{
          width: drawerWidth,
          position: "absolute",
          left: 0,
          top: "6.4rem",
          bottom: 0,
          fontSize: "1.4rem",
          paddingTop: "2.4rem",
          boxShadow: "rgb(0 0 0 / 5%) 4px 0px 8px 0px"
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["menuitem_1"]}
        mode="inline"
        items={MenuItemList}
      />
      <div>
        <Toolbar>
          <Typography variant="h6" component="div" style={{ color: "black" }}>
            Danh Sách Nhóm
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={back}></Button>

            <Button variant="contained" startIcon={<LogoutIcon />} onClick={leaveGroup}>
              Rời Nhóm
            </Button>
            <Button variant="contained" onClick={handleOpen}>
              Invite
            </Button>
          </Box>
          <Modal hideBackdrop open={open} onClose={handleClose}>
            <Box sx={{ ...style, width: 200 }}>
              <form className="form" method="post" onSubmit={formik.handleSubmit} autoComplete="on">
                <div className="input-box">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    className="input-text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="text"
                    placeholder="Nhập Email"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="error-message">{formik.errors.email}</p>
                  )}
                  <label htmlFor="email" className="input-label">
                    Coppy this invitation link and send it to invitate new member
                  </label>

                  <input
                    className="input-text"
                    id="email"
                    name="email"
                    value={`${FRONTEND_URL}/group-invitation/${id}`}
                    type="text"
                    readOnly
                    placeholder="Nhập Email"
                  />
                </div>

                <Button variant="contained" type="submit">
                  Invited
                </Button>
                <Button variant="contained" onClick={handleClose}>
                  Hủy
                </Button>
              </form>
            </Box>
          </Modal>
        </Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Button key="members" sx={{ color: "black", p: 2, mr: 6 }} onClick={getMemeber}>
              Danh sách Thành Viên
            </Button>
            <Button key="slides" sx={{ color: "black", p: 2 }} onClick={getSlide}>
              Chia sẻ Bộ Câu Hỏi
            </Button>
          </Toolbar>
        </Box>
      </div>
    </>
  );
}

// #region Create Dynamic Menu Item

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

var MenuItemList = [
  getItem(
    <StyledNavLink to="/groups">
      <GroupsIcon style={{ fontSize: "2rem" }} />
      <p style={{ marginLeft: "1rem" }}></p>
      Group I've joined
    </StyledNavLink>,
    "menuitem_1"
  ),
  getItem(
    <StyledNavLink to="/groups/owner">
      <GroupsIcon style={{ fontSize: "2rem" }} />
      <p style={{ marginLeft: "1rem" }}></p>
      Group I manage
    </StyledNavLink>,
    "menuitem_2"
  )
];

// #endregion
