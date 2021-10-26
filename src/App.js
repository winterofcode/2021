import React from "react";
import "antd/dist/antd.css";
import AppHeader from "./components/header/header";
import AppHome from "./views/home";

import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="Layout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
