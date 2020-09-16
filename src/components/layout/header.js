import React, { useState, useEffect, useCallback, useContext } from 'react';
import {
  Link,
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import { 
  Layout, 
  Menu, 
  Button, 
  Modal, 
  Badge, 
  Row, 
  Col, 
  Typography,
  Form,
  Input,
  Checkbox,
  Dropdown,
  Affix,
  Spin
} from 'antd';
import "antd/dist/antd.css";
import { 
  HomeOutlined,
  UploadOutlined, 
  UserOutlined, 
  DownOutlined,
  PieChartOutlined,
  LaptopOutlined, 
  NotificationOutlined, 
  SettingOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import logo from './../../images/deviant_logo.png'

const { Header, Footer, Sider, Content } = Layout;
const { Text, Title } = Typography;

const style = {
  header: {
    background: 'transparent',
    zIndex: 1,
    position: 'absolute',
    width: 'calc(100vw - 20px)',
    maxWidth: '100vw'
  },
  menu: {
    float: 'right'
  },
  logoContainer: {
    display: 'inline-flex'
  },
  logo: {
    display: 'inline-block',
    background: "url("+logo+")",
    backgroundSize: "60px 60px",
    height: '64px',
    width: '50px',
  },
  textLogo: {
    color: 'white',
    padding: '13px 0px'
  },
  dropdownMenu: {
    display: 'none'
  },
}

const mainHeader = () => {

  const menu = (
    <Menu 
      theme="dark"  
      mode="horizontal" 
      defaultSelectedKeys={['1']}
      className="menuDropdown"
      >
      <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/about">ABOUT US</Link></Menu.Item>
      <Menu.Item><Link to="/contact">CONTACT US</Link></Menu.Item>
    </Menu>
  )

  return(
    // <Affix>
      <Header 
        style={ style.header }
        theme="compact"
      >
        <div style={ style.logoContainer}>
          <div style={ style.logo }></div>
          <Title style={ style.textLogo } level={3}>Deviant IT Solutions</Title>
        </div>
        <Menu 
            theme="dark"  
            mode="horizontal" 
            defaultSelectedKeys={['1']}
            style={style.menu}
            >
            <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">ABOUT US</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">CONTACT US</Link></Menu.Item>
        </Menu>
        <Dropdown overlay={menu} trigger={['click']}>
            <MenuFoldOutlined style={ style.dropdownMenu } onClick={e => e.preventDefault()}/>
        </Dropdown>
      </Header>
    // </Affix>
  )
}

export default mainHeader;