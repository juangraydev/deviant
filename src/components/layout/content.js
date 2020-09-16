import React, { useState, useEffect, useCallback, useContext } from 'react';
import MainRouter from './../../routes';
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

const { Content } = Layout;

const mainContent = () => {

  return(
    <Content>
        <MainRouter/>
    </Content>
  )
}

export default mainContent;