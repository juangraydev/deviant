import React, { useState, useEffect, useCallback } from 'react';
import MainRouter from './routes.js';
import logo from './logo.svg';
import './App.css';
import {
  Link
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
  Checkbox
} from 'antd';
import "antd/dist/antd.css";
import { 
  HomeOutlined,
  UploadOutlined, 
  UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined, 
  VideoCameraOutlined 
} from '@ant-design/icons';
import fire from './config/Fire';

export const AuthContext = React.createContext();

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;
function App() {

  const [user, setUser] = useState(null)

  useEffect(() =>{
    fire.auth().onAuthStateChanged(setUser);
    console.log(user);
  }, [])

  const [authModal, setAuthModal] = useState({
    visibility: true,
    type: false
  })

  const authHandle = async (value) => {
    console.log(value.email);
    if(authModal.type === true){
      await fire.auth().createUserWithEmailAndPassword(value.email, value.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("Register "+errorMessage);
      }); 
    }else{
      await fire.auth().signInWithEmailAndPassword(value.email, value.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("Login "+errorMessage);
      });
    }
  }

  const showModal = () => {
    console.log("open bick");
    setAuthModal({
      visibility: true
    })
  }

  const handleCancel = () => {
    console.log("close");
    setAuthModal({
      visibility: false
    })
  }

  const onChangeType = () => {
    setAuthModal({
      type: !authModal.type,
      visibility: true
    })
  }

  return (
  <AuthContext.Provider value={{user}}>
    <Layout>
      <Layout>
        <Header>    
          <Text strong style={{fontSize: '24px', float: 'left', color: 'white', margin: 'auto'}}>Online Shopping</Text>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            {user ?? <Button 
              style={{float: 'right', marginTop: '13px'}} 
              type="primary" 
              shape="round" 
              icon={<UserOutlined />} 
              size="large"
              onClick={showModal}  
            >
              Login / Register
            </Button>}
          </Menu>
           <Modal
            centered={true}
            visible={authModal.visibility}
            onCancel={handleCancel}
            footer={false}
            width={420}
            bodyStyle={{
              paddingTop: '10px'
            }
            }
          > 
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={authHandle}
            >
              <Text strong style={{fontSize: '24px', display: 'block', textAlign: 'center', color: 'black', margin: '20px auto'}}>Online Shopping</Text>
              <Row gutter={[16]}>
                <Col span={12}>
                  {authModal.type === true ? 
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: 'First name is required!' }]}
                  >
                    <Input placeholder="First Name"/>
                  </Form.Item>
                  :<></>}
                </Col>
                <Col span={12}>
                  {authModal.type === true ? 
                  <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: 'Last name is required!' }]}
                  >
                    <Input placeholder="Last Name"/>
                  </Form.Item>
                  :<></>}
                </Col>
              </Row>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email"/>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password"/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%', float: 'right'}}>
                  {authModal.type === true ? <>Register</> : <>Login</>}
                </Button>
              </Form.Item>
              {authModal.type === true
                ? <Text style={{display: 'block',textAlign: 'center'}}>Already have an account?<Button onClick={onChangeType} type="link" style={{paddingLeft:'1px'}}>Sign In</Button></Text>
                : <Text style={{display: 'block',textAlign: 'center'}}>Don't have an account?<Button onClick={onChangeType} type="link" style={{paddingLeft:'1px'}}>Sign Up</Button></Text>
              }

              <Button type="link" style={{display: 'block', margin: 'auto'}}>Forgot Password?</Button>
            </Form>
          </Modal>
        </Header>
        <Content style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>       
          <MainRouter/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Online Shop CopyRight by JuanGrayDev</Footer>
      </Layout>
    </Layout>
  </AuthContext.Provider>
  );
}

export default App;