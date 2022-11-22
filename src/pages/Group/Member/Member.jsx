import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers, addGroupMember, fetchGroupMember } from "../../../utils/api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// import { onLogout } from "../../utils/method";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

import { Typography, Box, Table, TableBody, TableCell, TableRow, Button, TableContainer, Paper, Modal, TableHead  } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styled from "./style";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const queryClient = new QueryClient();
export default function GroupMember() {
  return (
    <QueryClientProvider client={queryClient}>
      <MemberPage />
    </QueryClientProvider>
  );
}

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 240;

function MemberPage() {
  const [openRoleForm, setOpenRoleForm] = React.useState(false);
  const [openAddForm, setOpenAddForm] = React.useState(false);
  const [data, setData] = React.useState([]);

  const {state} = useLocation();
  const { id } = state; // Read values passed on state

  const handleOpenRoleForm = () => {
    setOpenRoleForm(true);
  };
  const handleCloseRoleForm = () => {
    setOpenRoleForm(false);
  };
  const handleOpenAddForm = () => {
    setOpenAddForm(true);
  };
  const handleCloseAddForm = () => {
    setOpenAddForm(false);
  };

  const RoleSchema = Yup.object({
    role: Yup.string().required("Role required"),
  });

  const roleFormik = useFormik({
    initialValues: {
      role: "",
    },
    validationSchema: RoleSchema,
    onSubmit: async (value) => {
      // console.log("submit ", value);
      // const data = await addGroupMember(value.name);
      // console.log("data register ", data);
      // if (data.status != 200) {
      //   // alert(data.data);
      //   toast.error(data.data, {
      //     position: "top-right",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //     theme: "light"
      //   });
      //   return;
      // }
      // const msg = `User ${userResponse} have successfully signed up`;
      // toast.success(msg, {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   theme: "light"
      // });
    }
  });
  const AddSchema = Yup.object({
    email: Yup.string()
      .email("Not a proper email")
      .min(10, "Minimum 10 characters")
      .required("Email required"),
  });

  const addFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: AddSchema,
    onSubmit: async (value) => {
      console.log("submit ", value);
      const data = await addGroupMember(value.email,id );
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
      reloadMember();
      handleCloseAddForm();
      const msg = `Adding member ${value.email} is successful `;
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
    }
  });


  const leaveGroup = () => {
    console.log("are you sure")
  };
  const getMemeber = () => {
    navigate('/group-members', { state: { id: id } });
  };
  const getSlide = () => {
    navigate('/group-slides', { state: { id: id } });
  };
  const back = () => {
    navigate('/groups');
  };
  const reloadMember = async() => {
    const list = await fetchGroupMember(id)
    setData(list.users)
    console.log(list.users)
  };
  useEffect(() => {
    reloadMember()
  }, []);



  


  return (
    <Styled>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ color: 'black' }}>
          Danh Sách Nhóm
        </Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Button variant="contained" startIcon={<ArrowBackIcon /> } onClick={back}></Button>
          <Button variant="contained" startIcon={<LogoutIcon /> } onClick={leaveGroup}>Rời Nhóm</Button>
          {/* <Button variant="contained" onClick={handleOpen} >Mời Thành Viên</Button> */}
        </Box>
      </Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        
          <Toolbar>
          <Button key="members" sx={{ color: 'black', p: 2, mr: 6 }} onClick={getMemeber}>
            Danh sách Thành Viên
          </Button>
          <Button key="slides" sx={{ color: 'black', p: 2 }} onClick={getSlide}>
            Chia sẻ Bộ Câu Hỏi
          </Button>
        </Toolbar>
      </Box>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ color: 'black' }}>
              Danh Sách Thành Viên
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <Button variant="contained" startIcon={<AddIcon /> } onClick={() => handleOpenAddForm()}>Thêm Thành Viên</Button>
            </Box>
          </Toolbar>
          <Modal
            hideBackdrop
            open={openAddForm}
            onClose={handleCloseAddForm}
          >
            <Box sx={{ ...style, width: 200 }}>

              <form
                className="form"
                method="post"
                onSubmit={addFormik.handleSubmit}
                autoComplete="on">
                <div className="input-box">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={addFormik.values.email}
                    onChange={addFormik.handleChange}
                    type="text"
                    placeholder="Input email"
                    className="input-text"
                  />
                  {addFormik.errors.email && addFormik.touched.email && (
                    <p className="error-message">{addFormik.errors.email}</p>
                  )}
                </div>
              
                <Button variant="contained" type="submit">
                  Thay Đổi
                </Button>
                <Button variant="contained" onClick={handleCloseAddForm} >Hủy</Button>

              </form>
            </Box>
          </Modal>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Tên</TableCell>
                  <TableCell align="right">Vai Trò</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => handleOpenRoleForm()}
                  >

                    <TableCell component="th" scope="row" >
                      {row.email}
                    </TableCell>
                    <TableCell align="right" >
                      {row.role}
                    </TableCell>

                  </TableRow>
                  
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Modal
        hideBackdrop
        open={openRoleForm}
        onClose={handleCloseRoleForm}
      >
        <Box sx={{ ...style, width: 200 }}>

          <form
            className="form"
            method="post"
            onSubmit={roleFormik.handleSubmit}
            autoComplete="on">
            <div className="input-box">
              <label htmlFor="role" className="input-label">
                Vai Trò
              </label>
              <select name="role" id="role" defaultValue={roleFormik.values.role} onChange={roleFormik.handleChange}>
                <option value="valor1">Valor 1</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
              </select>

              {roleFormik.errors.role && roleFormik.touched.role && (
                <p className="error-message">{roleFormik.errors.role}</p>
              )}s
            </div>
            
            <Button variant="contained" type="submit">
              Thay Đổi
            </Button>
            <Button variant="contained" onClick={handleCloseRoleForm} >Hủy</Button>

          </form>
        </Box>
      </Modal>

    </Styled>
  );
}

