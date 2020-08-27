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
  VideoCameraOutlined 
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export const sider = () => {


  return(
    <Sider className="mainSide">
      <div className="logoSide"></div>

      <Menu
        defaultSelectedKeys={['1']}
        theme="dark"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="4" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
      </Menu>
    </Sider>
  )
}