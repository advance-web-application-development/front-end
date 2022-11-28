import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../utils/api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { onLogout } from "../../utils/method";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../utils/UserContext";
import { Button, Card, Col, Container, ListGroup, NavLink, Row } from "react-bootstrap";
import { StyledButton } from "./style";
import { margin } from "@mui/system";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

function HomePage_() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading, error, isError, refetch } = useQuery(
    "user",
    () => fetchUsers(accessToken),
    {
      enabled: false
    }
  );
  useEffect(() => {
    // verifyToken();
    refetch();
  }, []);

  //vertify token
  // const verifyToken = async () => {
  //   if (!accessToken) {
  //     navigate("/signin");
  //   }
  // };
  if (isLoading) {
    return <div>Is Loading</div>;
  }
  if (isError) {
    console.log("err", error);
  }
  // const onLogoutSuccess = () => {
  //   console.log("log out success from google");
  // };
  // const onLogoutFailture = () => {
  //   console.log("log out fail from google");
  // };
  return (
    <div>
      <p className="text-white text-[40px]">Hello {data ? data.username : ""}</p>
      <Link
        className="px-[10px] py-[8px] bg-[#20DF7F] h-[45px] w-full rounded-[10px] mt-[24px]"
        onClick={() => onLogout()}
        to="/signin">
        <p className="text-white text-[16px] text-center">Log Out</p>
      </Link>
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Logout button"
        onLogoutSuccess={() => onLogoutSuccess()}
        onFailure={() => onLogoutFailer()}
        className="logout button"
        ref={btngoogleLogout}
      /> */}
    </div>
  );
}

function HomePage() {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Home Page - KKahoot";
    document.getElementById("root").style.backgroundImage = "none";
  }, []);
  useEffect(() => {
    console.log("currentUser ", currentUser);
    
  }, [currentUser]);
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Col xs={12} md={3} style={{ marginBottom: "1.4rem" }}>
            <div>
              <Card style={{ boxShadow: "rgb(0 0 0 / 15%) 0 0.2rem 0.4rem" }}>
                <Card.Header style={{ padding: "1.2rem 1.6rem" }}>
                  <b>Assignments</b>
                </Card.Header>
                <Card.Body style={{ padding: "1.6rem" }}>
                  <div
                    className="bg-light text-secondary"
                    style={{
                      textAlign: "center",
                      padding: "2.4rem 1.6rem",
                      border: "1px dashed rgb(204, 204, 204)",
                      borderRadius: "0.4rem",
                      marginBottom: "1.4rem",
                      marginTop: "0.8rem"
                    }}>
                    <p style={{ textAlign: "center", margin: "0 1.6rem 0.8rem" }}>
                      Find fun learning games to play independently and challenge friends to beat
                      your score.
                    </p>
                    <br />
                    <StyledButton variant="primary">Learn more</StyledButton>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} md={9}>
            <Container fluid>
              <Row>
                <Col xs={12} lg={8}>
                  <div style={{ marginBottom: "1.6rem" }} className="d-inline-block">
                    <Card style={{ boxShadow: "rgb(0 0 0 / 15%) 0 0.2rem 0.4rem" }}>
                      <Card.Header style={{ padding: "1.2rem 1.6rem" }}>
                        <b>Groups</b>
                      </Card.Header>
                      <Card.Body style={{ padding: "1.6rem" }}>
                        <div
                          className="bg-light text-secondary"
                          style={{
                            textAlign: "center",
                            padding: "2.4rem 1.6rem",
                            border: "1px dashed rgb(204, 204, 204)",
                            borderRadius: "0.4rem",
                            marginBottom: "1.4rem",
                            marginTop: "0.8rem"
                          }}>
                          <p style={{ textAlign: "center", margin: "0 1.6rem 0.8rem" }}>
                            Create your first course and assign it to learners. Track progress with
                            detailed reports, send reminders, and edit content to match learners'
                            needs.
                          </p>
                          <br />
                          <StyledButton variant="primary" onClick={() => navigate("/groups")}>
                            Create Group
                          </StyledButton>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col xs={12} lg={4} style={{ marginBottom: "1.4rem" }}>
                  <div>
                    <Card style={{ boxShadow: "rgb(0 0 0 / 15%) 0 0.2rem 0.4rem" }}>
                      <Card.Header style={{ padding: "1.2rem 1.6rem" }}>
                        <b>Latest reports</b>
                      </Card.Header>
                      <Card.Body style={{ padding: "1.6rem" }}>
                        <div
                          className="bg-light text-secondary"
                          style={{
                            textAlign: "center",
                            padding: "2.4rem 1.6rem",
                            border: "1px dashed rgb(204, 204, 204)",
                            borderRadius: "0.4rem",
                            marginTop: "0.8rem"
                          }}>
                          <p style={{ textAlign: "center", margin: "0 1.6rem 0.8rem" }}>
                            Host your first kahoot to see reports here.
                          </p>
                          <br />
                          <StyledButton variant="primary">Host kahoot</StyledButton>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <div style={{ marginBottom: "1.6rem" }}>
                    <Card style={{ boxShadow: "rgb(0 0 0 / 15%) 0 0.2rem 0.4rem" }}>
                      <Card.Header style={{ padding: "1.2rem 1.6rem" }}>
                        <b>What's new</b>
                      </Card.Header>
                      <Card.Body style={{ padding: "1.6rem"}}>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            className="d-flex"
                            style={{ fontSize: "1.2rem", maxWidth: "calc(100% - 3.2rem)" }}>
                            <span style={{ marginRight: "0.8rem" }}>
                              <img
                                style={{
                                  width: "4.8rem",
                                  height: "4.8rem",
                                  borderRadius: "0.4rem"
                                }}
                                src=".\assets\images\blog_covers\blog01.jpg"
                                alt=""
                              />
                            </span>
                            <div
                              style={{ maxHeight: "5.6rem", maxWidth: "calc(100% - 3.2rem)" }}
                              className="d-block text-break ">
                              <div style={{ fontWeight: "550" }} className="text-break">
                                <a href="#" className="text-decoration-none text-dark">
                                  Introducing 'Slider': a new question type that will put your
                                  kahoots on a whole new scale!
                                </a>
                              </div>
                              <div
                                style={{ maxWidth: "calc(100% - 3.2rem)" }}
                                className="text-secondary text-truncate text-break">
                                Our new interactive Slider question type enables players to answer
                                questions by guessing a number to express a wide range of
                                possibilities and score partial points.
                              </div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            className="d-flex"
                            style={{ fontSize: "1.2rem", maxWidth: "calc(100% - 3.2rem)" }}>
                            <span style={{ marginRight: "0.8rem" }}>
                              <img
                                style={{
                                  width: "4.8rem",
                                  height: "4.8rem",
                                  borderRadius: "0.4rem"
                                }}
                                src=".\assets\images\blog_covers\blog01.jpg"
                                alt=""
                              />
                            </span>
                            <div
                              style={{ maxHeight: "5.6rem", maxWidth: "calc(100% - 3.2rem)" }}
                              className="d-block text-break ">
                              <div style={{ fontWeight: "550" }} className="text-break">
                                <a href="#" className="text-decoration-none text-dark">
                                  Introducing 'Slider': a new question type that will put your
                                  kahoots on a whole new scale!
                                </a>
                              </div>
                              <div
                                style={{ maxWidth: "calc(100% - 3.2rem)" }}
                                className="text-secondary text-truncate text-break">
                                Our new interactive Slider question type enables players to answer
                                questions by guessing a number to express a wide range of
                                possibilities and score partial points.
                              </div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            className="d-flex"
                            style={{ fontSize: "1.2rem", maxWidth: "calc(100% - 3.2rem)" }}>
                            <span style={{ marginRight: "0.8rem" }}>
                              <img
                                style={{
                                  width: "4.8rem",
                                  height: "4.8rem",
                                  borderRadius: "0.4rem"
                                }}
                                src=".\assets\images\blog_covers\blog01.jpg"
                                alt=""
                              />
                            </span>
                            <div
                              style={{ maxHeight: "5.6rem", maxWidth: "calc(100% - 3.2rem)" }}
                              className="d-block text-break ">
                              <div style={{ fontWeight: "550" }} className="text-break">
                                <a href="#" className="text-decoration-none text-dark">
                                  Introducing 'Slider': a new question type that will put your
                                  kahoots on a whole new scale!
                                </a>
                              </div>
                              <div
                                style={{ maxWidth: "calc(100% - 3.2rem)" }}
                                className="text-secondary text-truncate text-break">
                                Our new interactive Slider question type enables players to answer
                                questions by guessing a number to express a wide range of
                                possibilities and score partial points.
                              </div>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                      <Card.Link href="#" className="mx-auto" style={{padding: "1.6rem", fontWeight: "550", fontSize: "1.2rem"}}>Show more</Card.Link>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
