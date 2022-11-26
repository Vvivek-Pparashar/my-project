import React from "react";
import { Layout, Col, Row, FloatButton } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import DataBase from "./DataBase";
import CardComp from "./CardComp";

const { Content } = Layout;

const ContinerComp = ({ mode, D2L, L2D }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        background: "white",
      }}
    >
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {DataBase.map((e) => {
          return (
            <Col
              s={8}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              style={{
                display: "flex",
                height: "200px",
                justifyContent: "center",
              }}
            >
              <CardComp Name={e.Name} RollNO={e.RollNO} />
            </Col>
          );
        })}
      </Row>

      <FloatButton.Group icon={<SettingOutlined />} trigger="click">
        <FloatButton
          icon={<i class="fa fa-sun-o" aria-hidden="true"></i>}
          type={mode.mode === "light" ? "primary" : "default"}
          onClick={() => {
            D2L();
          }}
        />
        <FloatButton
          icon={<i class="fa fa-moon-o" aria-hidden="true"></i>}
          type={mode.mode === "dark" ? "primary" : "default"}
          onClick={() => {
            L2D();
          }}
        />
      </FloatButton.Group>
    </Content>
  );
};

export default ContinerComp;
