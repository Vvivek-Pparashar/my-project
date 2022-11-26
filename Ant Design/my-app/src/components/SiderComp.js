import React from "react";
import { Layout, Menu } from "antd";
import Label from "./Label";

const { Sider } = Layout;

const SiderComp = ({ mode, collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={mode.mode}
      style={{
        position: "sticky",
        left: 0,
        top: 0,
        height: "100vh",
        padding: "7px 0",
        boxShadow: "3px 2px 5px 0 rgba(0,0,0,0.16)",
      }}
    >
      <Menu
        theme={mode.mode}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={Label.map((e) => {
          return {
            key: e.key,
            icon: <i className={e.icon}></i>,
            label: e.label,
          };
        })}
      />
    </Sider>
  );
};

export default SiderComp;
