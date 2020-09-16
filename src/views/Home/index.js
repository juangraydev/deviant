import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Carousel,
  Typography,
  Form,
  Input,
  Button
} from 'antd';
import "antd/dist/antd.css";
import "./style.css"
import logo from './../../images/deviant_logo.png'

const { Text, Title } = Typography;

const style = {
  section1: {
    background: '#191F34',
    height: 'calc(100vh)',
    width: '100%'
  },
  logo: {
    background: "url("+logo+")",
    backgroundSize: "200px 200px",
    height: '210px',
    width: '210px',
    margin: 'auto',
  },
  sec1row1: {
    height: '80vh'
  },
  sec1row2: {
    margin: 'auto'
  }
}

function HomePage() {

  const contentStyle = {
    height: 'calc(100vh)',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#191g34',
  };

  return (
    <>
      <Row style={ style.section1 }>
        <Col span={24}>
          <Row justify="center" align="middle" style={ style.sec1row1 }>
            <Col span={24}>
              <div style={ style.logo }></div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12} style={ style.sec1row2 }>
              <Button type="primary" shape="round">Learn More</Button>
              <Button shape="round" >Projects</Button>
            </Col>
          </Row>
          {/* <Row>
            <Col span={24} style={ style.sec1btn } >
              <Button type="primary" shape="round">Learn More</Button>
              <Button shape="round" >Projects</Button>
            </Col>
          </Row> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row style={{maxWidth: '1200px', margin: '40px auto', padding: '20px'}} >
        <Col span={12}>
          <div class="container">
            <Title>Contact Us</Title>
            <Text type="secondary" style={{fontSize: '20px'}}>If you need anything, we’re here to help.</Text>
            <Title level={3}>Other ways to connect</Title>
            <Title level={4}>(703) 239-3683‬<br/>sales@deviant.com</Title>
          </div>
        </Col>
        <Col span={12}>
          <Card>
            <Form>
              <Form.Item>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="E-mail Address" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Contact Number" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
