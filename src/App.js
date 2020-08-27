import React, { useState, useEffect, useCallback, useContext } from 'react';
import MainRouter from './routes.js';
import logo from './logo.svg';
import './App.css';
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
  VideoCameraOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import fire from './config/Fire';
import AuthContext from './Auth';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Text, Title } = Typography;



function sider() {

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




function App() {
  const [currentUser, setCurrentUser] = useState();
  const [layout, setLayout] = useState({
    header: true,
    footer: true
  })

  useEffect(() => {
    fire.auth().onAuthStateChanged(function(user){
      console.log(user.uid);
      if(user){
        fire.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
          console.log(snapshot.val());
          setCurrentUser({
            email: user.email,
            firstname: snapshot.val().firstname,
            lastname: snapshot.val().lastname,
            type: snapshot.val().type
          })
        });
      }else{
        setCurrentUser(null);
      }
    });
  }, [])

  const menu = (
    <Menu 
      theme="light"  
      mode="horizontal" 
      defaultSelectedKeys={['1']}
      className="menuDropdown"
      >
      <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/about">ABOUT</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/projects">PROJECTS</Link></Menu.Item>
      <Menu.Item key="4"><Link to="/services">SERVICES</Link></Menu.Item>
      <Menu.Item key="5"><Link to="/blogs">BLOG</Link></Menu.Item>
      <Menu.Item key="6"><Link to="/contact">CONTACT</Link></Menu.Item>
    </Menu>
  )

  return (
    <Router>
      <AuthContext.Provider value={{currentUser, setCurrentUser, setLayout}}>
        <Layout>
          {layout.header ? 
            <Affix offsetTop={0}>
              <Header 
                className="mainHeader"
              >
                <div class="container">
                  <div class="logo"></div>
                  <Title className="textLogo">Deviant IT Solutions</Title>
                  
                  <Dropdown overlay={menu} trigger={['click']}>
                    <MenuFoldOutlined className="dropdownMenu" onClick={e => e.preventDefault()}/>
                  </Dropdown>
                  <Menu 
                    theme="dark"  
                    mode="horizontal" 
                    defaultSelectedKeys={['1']}
                    className="headerMenu"
                    >
                    <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/about">ABOUT</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/projects">PROJECTS</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/services">SERVICES</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/blogs">BLOG</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/contact">CONTACT</Link></Menu.Item>
                  </Menu>
                </div>
              </Header>
          </Affix>
          :<></>
          }
          <Content>       
            <MainRouter/>
          </Content>
          {layout.footer ?
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
          :<></>
          }
        </Layout>
      </AuthContext.Provider>
    </Router>
  )

  
}


export default App;