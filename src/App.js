import './style/Style.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Page1 from './components/home/Page1';
import Page2 from './components/users/Page2';
import { BiTask, BiLogOut } from 'react-icons/bi';
import { BsBuilding, BsBox } from 'react-icons/bs';
import { CgBox } from 'react-icons/cg';
import { FaSearchDollar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineTicket } from 'react-icons/hi';
import { ImStack } from 'react-icons/im';
import { RiHome8Line, RiShapeLine } from 'react-icons/ri';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Add from './components/users/Add';
import Update from './components/users/Update';
const { Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item className="side-item" key="1">
              <RiHome8Line />
              <Link to="/" />
            </Menu.Item>
            <Menu.Item className="side-item" key="2">
              <HiOutlineTicket />
            </Menu.Item>
            <Menu.Item className="side-item" key="3">
              <BiTask />
            </Menu.Item>
            <Menu.Item className="side-item" key="4">
              <CgBox />
            </Menu.Item>
            <Menu.Item className="side-item" key="5">
              <BsBuilding />
            </Menu.Item>
            <Menu.Item className="side-item" key="6">
              <FiUsers />
              <Link to="/page2" />
            </Menu.Item>
            <Menu.Item className="side-item" key="7">
              <ImStack />
            </Menu.Item>
            <Menu.Item className="side-item" key="8">
              <BsBox />
            </Menu.Item>
            <Menu.Item className="side-item" key="9">
              <RiShapeLine />
            </Menu.Item>
            <Menu.Item className="side-item" key="10">
              <FaSearchDollar />
            </Menu.Item>
            <Menu.Item className="side-item" key="11">
              <BiLogOut />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Switch>
                <Route exact path="/" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/adduser" component={Add} />
                <Route path="/updateuser/:id" component={Update} />
              </Switch>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Mitramas Infosys Global ©2022 Created by MIG
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
