import { Layout } from "antd";
import React, { useState } from "react";
import "./App.css";
import ContinerComp from "./components/ContinerComp";
import HeaderComp from "./components/HeaderComp";
import SiderComp from "./components/SiderComp";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState({ mode: "dark" });

  const L2D = () => {
    setMode({ mode: "dark" });
  };

  const D2L = () => {
    setMode({ mode: "light" });
  };

  const changeColl = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout>
        <SiderComp mode={mode} collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderComp
            mode={mode}
            collapsed={collapsed}
            changeColl={changeColl}
          />
          <ContinerComp mode={mode} D2L={D2L} L2D={L2D} />
        </Layout>
      </Layout>
    </>
  );
};
export default App;
