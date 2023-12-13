import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu'
import { useSelector } from "react-redux"
import logoImg from "@/assets/img/logo.png"

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const { currentMenu } = useSelector((state: RootState) => ({
    currentMenu: state.handleMenu.currentMenu
  }))
  console.log(currentMenu)

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical">
          <img src={logoImg} alt="logo" />
          <span>Romy's Blog Management</span>
        </div>
        <MainMenu />
      </Sider>
      {/* 右边内容 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ margin: '0px 16px', lineHeight: '64px' }} items={[
            { title: currentMenu?.label },
          ]}>
          </Breadcrumb>
        </Header>
        {/* 右边内容部分 */}
        <Content style={{ margin: '16px', }} >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Romy's Blog ©2023 Created by ROMY</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;