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

const { Footer } = Layout;
const { Text, Title } = Typography;

const mainFooter = () => {

  return(
    <Footer style={{background: 'white'}}>
      <div class="container">
        <Row gutter={[16,16]} >
          <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <Text strong style={{fontSize: '20px'}}>Links</Text>
            <Menu 
              theme="light"  
              mode="vertical" 
              className="footerLinks"
            >
              <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">ABOUT</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/projects">PROJECTS</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/services">SERVICES</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/blogs">BLOG</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/contact">CONTACT</Link></Menu.Item>
            </Menu>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <Text strong style={{fontSize: '20px'}}>Projects</Text> 
            <Menu 
              theme="light"  
              mode="vertical" 
              className="footerLinks"
            >
              <Menu.Item key="1">E-Learning</Menu.Item>
              <Menu.Item key="2">Inventory System</Menu.Item>
              <Menu.Item key="3">Employee Management</Menu.Item>
              <Menu.Item key="4">Business Support System</Menu.Item>
            </Menu>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Text strong style={{fontSize: '20px'}}>Location</Text> 
            <Menu 
              theme="light"  
              mode="vertical" 
              className="footerLinks"
            >
              <Menu.Item key="1">Cebu City, Philippines</Menu.Item>
              <Menu.Item key="2">Kuala lumpur, Malaysia</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}></Col>
          
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col>
            <span class="copyright">© 2020 Deviant IT Solutions. All rights reserved. <a href="/privacy-policy" target="_blank">Privacy Policy</a> </span>
          </Col>
        </Row>
      </div>
    </Footer>
  )
}

export default mainFooter;