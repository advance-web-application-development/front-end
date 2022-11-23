import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers, fetchGroup, createGroup } from "../../../utils/api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// import { onLogout } from "../../utils/method";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Typography, Box, Table, TableBody, TableCell, TableRow, Button, TableContainer, Paper, Modal } from '@mui/material';
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
export default function ListGroup() {
  return (
    <QueryClientProvider client={queryClient}>
      <GroupsPage />
    </QueryClientProvider>
  );
}

// function List() {
  // const rows = [{id: 1, name:'dysfdygfsdh'}]
//   console.log(rows);
  // const navigate = useNavigate();
//   // const accessToken = localStorage.getItem("accessToken");
//   // const { data, isLoading, error, isError, refetch } = useQuery(
//   //   "user",
//   //   () => fetchUsers(accessToken),
//   //   {
//   //     enabled: false
//   //   }
//   // );
//   // useEffect(() => {
//   //   verifyToken();
//   //   refetch();
//   // }, []);

//   // //vertify token
//   // const verifyToken = async () => {
//   //   if (!accessToken) {
//   //   }
//   // };
//   // if (isLoading) {
//   //   return <div>Is Loading</div>;
//   // }
//   // if (isError) {
//   //   console.log("err", error);
//   // }
//   // // const onLogoutSuccess = () => {
//   // //   console.log("log out success from google");
//   // // };
//   // // const onLogoutFailture = () => {
//   // //   console.log("log out fail from google");
//   // // };
//   return (
//     <div>
//       <div style={{display:"inline-block"}}>
//         <Typography>Nhóm</Typography>
//         <Box>
//           <Button variant="contained" startIcon={<AddIcon />}>Tạo Nhóm</Button>
//         </Box>
//       </div>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
    //   <TableContainer component={Paper}>
    //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //       <TableBody>
    //         {rows.map((row) => (
    //           <TableRow
    //             key={row.id}
    //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //           >
    //             <TableCell component="th" scope="row">
    //               {row.name}
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

//     </div>
//   );
// }
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

function GroupsPage() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const GroupSchema = Yup.object({
    name: Yup.string().max(20, "Maximine 20 characters").required("Name required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: GroupSchema,
    onSubmit: async (value) => {
      const data = await createGroup(value.name);
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
      this.setFieldValue("name",'');

      const msg = `Group ${data.data.group.name} have successfully create`;
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light"
      });
      reloadGroup('');
    }
  });
  const reloadGroup = async(params) => {
    const list = await fetchGroup(params)
    setData(list.groups);
  };

  useEffect(() => {
    reloadGroup('')
  }, []);

  const getGroupDetail=(groupId)=>{
      console.log(groupId)
      navigate('/group-detail', { state: { id: groupId } });
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem key={'my-group'} disablePadding>
            <ListItemButton onClick={()=>reloadGroup('')} >
              <ListItemText primary={'Nhóm Của Tôi'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'my-owner-group'} disablePadding>
            <ListItemButton onClick={()=>{reloadGroup('/owner')}}>
              <ListItemText primary={'Nhóm Của Tôi Quản Lý'} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );


  return (
    <Styled>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: 'white'
          }}

        >
          <Toolbar>
            <Typography variant="h6" component="div" style={{ color: 'black' }}>
              Danh Sách Nhóm
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>Tạo Nhóm</Button>
            </Box>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ ...style, width: 200 }}>

                <form
                  className="form"
                  method="post"
                  onSubmit={formik.handleSubmit}
                  autoComplete="on">
                  <div className="input-box">
                    <label htmlFor="name" className="input-label">
                      Tên
                    </label>
                    <input
                      className="input-text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="Nhập Tên"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="error-message">{formik.errors.name}</p>
                    )}
                  </div>
                  
                  <Button variant="contained" type="submit">
                    Tạo Nhóm
                  </Button>
                  <Button variant="contained" onClick={handleClose} >Hủy</Button>

                </form>
              </Box>
            </Modal>

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => getGroupDetail(row.id)}

                  >
                    <TableCell component="th" scope="row" >
                      {row.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Styled>
  );
}

