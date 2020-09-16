import React, { useState, useEffect, useCallback, useContext, Children } from 'react';
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
import Header from './header';
import Content from './content';
import Footer from './footer';


export const MainLayout = () => {

  return(
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  )
}
