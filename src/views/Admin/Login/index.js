import React, { useState, useContext, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Carousel,
  Form,
  Input,
  Button,
  Typography
} from 'antd';
import "antd/dist/antd.css";
import AuthContext from '../../../Auth';

const { Text, Title } = Typography

function Page() {

  const {setLayout} = useContext(AuthContext);

  
  useEffect(() => {
    setLayout({
      footer: false,
      header: false
    })
  }, [])
  
  return (
    <>
      
      <Form
        name="basic"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          maxWidth: 350,
          width: 350,
          padding: '10px'
        }}
      >
        <div class="logo login"></div>
        <Title level={2} style={{ margin: '10px 0px', textAlign: 'center' }}>Deviant IT Solutions</Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width: "100% "}}>
            Sign In
          </Button>
        </Form.Item>
        <Text style={{display: 'block',textAlign: 'center'}}>Don't have an account?<Button type="link" style={{paddingLeft:'1px'}}>Sign Up</Button></Text>
        <Button type="link" style={{display: 'block', margin: 'auto'}}>Forgot Password?</Button>
      </Form>
    </>
  );
}

export default Page;
