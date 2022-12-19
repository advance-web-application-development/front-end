import React, { useEffect, useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { createGroup, fetchGroup } from "../../../utils/api";
import GroupsIcon from "@mui/icons-material/Groups";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Header } from "../../../components/Header";
import  SideBar  from "../SideBar";
import UserContext from "../../../utils/UserContext";
import { Space, Table, Button, Form, Input, Modal } from 'antd';
const { Column, ColumnGroup } = Table;
import { Styled } from "./style";

const queryClient = new QueryClient();
export default function ListGroup({typeOfGroup}) {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    return (
        <QueryClientProvider client={queryClient}>
        <GroupsPage typeOfGroup={typeOfGroup}/>
        </QueryClientProvider>
    );
}



function GroupsPage({typeOfGroup}) {
    const [open, setOpen] = React.useState(false);
    const [form] = Form.useForm();

    const [data, setData] = React.useState([]);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        formik.setFieldValue("name", "");
        form.resetFields();

    };
    const GroupSchema = Yup.object({
        name: Yup.string().max(20, "Maximine 20 characters").required("Name required")
    });

    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validationSchema: GroupSchema,
        onSubmit: async (value) => {
        const data = await createGroup(value.name, accessToken);
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
        reloadGroup();
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
        reloadGroup();
        }
    });
    const reloadGroup = async () => {
        let list=[];
        console.log(typeOfGroup)
        switch(typeOfGroup){
            case '1':
            {
                list= await fetchGroup('', accessToken);
                for (let group of list.groups)
                {
                    group.key=group.id;
                }

                setData(list.groups);
                break;
            }
            case '2':
            {
                list = await fetchGroup('/owner', accessToken);
                for (let group of list.groups)
                {
                    group.key=group.id;
                }
                setData(list.groups);
                break;
            }
        }
    };
    useEffect(() => {
        document.title = "My Groups - KKahoot";
        document.getElementById("root").style.backgroundImage = "none";
        verifyToken();
        reloadGroup();
        console.log(typeOfGroup)

    }, [typeOfGroup]);

    const verifyToken = async () => {
        if (!accessToken) {
        navigate("/signin");
        }
    };


    const getGroupDetail = (groupId) => {
        navigate("/group-detail", { state: { id: groupId } });
    };

    return (
        <>
        <Header />
        <SideBar selectedKey={typeOfGroup}/>
        <Styled>
            <div className="group-list-top-bar">
                <button type="button" onClick={handleOpen} className="create-group-button">
                    Create group
                </button>
            </div>
            <Table dataSource={[...data]}
                style={{
                    left: 300,                    
                    position: "relative",
                    width: "75%"
                }}
                >
                <Column title="Name" dataIndex="name" key="name" width= "75%"/>
                <Column
                title="Action"
                key="id"
                dataIndex="id" 
                render={(record) => (
                    <Space size="middle">
                        <Button type="primary" onClick={()=>{getGroupDetail(record)}}>More</Button>                
                    </Space>
                )}
                />
            </Table>
            <Modal title="Create Group" open={open} footer={null}>
                <Form name="basic" onSubmit={formik.handleSubmit} form={form}>
                    <Form.Item label="Name" name="name" onChange={(e)=>{formik.setFieldValue('name',e.target.value)}}>
                            <Input  placeholder="Input your group name"/>
                    </Form.Item>
                    {formik.errors.name && formik.touched.name && (<p className="error-message">{formik.errors.name}</p>)}

                    <Form.Item wrapperCol={{ offset: 8,span: 16,}}
                    >
                        <Button type="primary" onClick={formik.handleSubmit} style={{margin: "10px"}} htmlType="submit">
                        Submit
                        </Button>
                        <Button  style={{margin: "10px"}} onClick={handleClose} htmlType="button" >
                            Cancel
                        </Button>

                    </Form.Item>
                </Form>
            </Modal>

        </Styled>
        </>
    );
}

