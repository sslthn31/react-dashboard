import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { Layout, Breadcrumb, Avatar } from 'antd';
import Profile from './Profile';
import BankAccount from './BankAccount';
import Location from './Location';
import Activity from './Activity';
import Relation from './Relation';

const Page1 = () => {
  const { Content } = Layout;
  return (
    <div>
      <Layout className="site-layout">
        <Content className="header-layout">
          <div className="left-side">
            <Breadcrumb
              style={{
                margin: '10px 0',
              }}
            >
              <Breadcrumb.Item>Perusahaan</Breadcrumb.Item>
              <Breadcrumb.Item>Mitramas Infosys Global</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="rigth-side">
            <AiOutlineSearch className="icon" />
            <AiOutlineBell className="icon" />
            <div className="profile">
              <Avatar size={35} icon={<AntDesignOutlined />} />
              <h4>profile</h4>
            </div>
          </div>
        </Content>
        <Content>
          <div
            className="site-layout-background"
            style={{
              padding: 10,
              minHeight: 360,
            }}
          >
            <div className="first-column">
              <Profile />
            </div>
            <div className="second-column">
              <Location />
              <br />
              <div className="columns">
                <div className="column">
                  <BankAccount />
                </div>
                <div className="column">
                  <Activity />
                </div>
                <div className="column">
                  <Relation />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Page1;
