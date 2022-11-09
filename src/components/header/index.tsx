import { Image, Col, Row } from "antd";
import React from "react";
import Styled from "./style";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
export default function Header() {
  return (
    <Styled>
      <Row className="full-h">
        <Col className="center" style={{ maxHeight: "111px" }}>
          <Image width={210} height={49} src="/fpt_play.png" preview={false} />
        </Col>
        <Col flex="auto" style={{ lineHeight: "111px", display: "flex" }}>
          <nav className="nav-header">
            <a href="">Trang chủ</a>
            <a href="">Demo</a>
            <a href="">Báo giá</a>
            <a href="">Liên hệ</a>
            <a href="">+ 84 984 800 205</a>
          </nav>
          <Image
            width={40}
            height={40}
            src="/search.png"
            preview={false}
            className="img-search"
          />
        </Col>
      </Row>
    </Styled>
  );
}
