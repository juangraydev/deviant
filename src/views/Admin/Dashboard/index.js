import React, { useState, useContext, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Carousel
} from 'antd';
import "antd/dist/antd.css";
import AuthContext from '../../../Auth';

function DashboardAdmin() {
  const {setLayout} = useContext(AuthContext);

  
  useEffect(() => {
    setLayout({
      footer: false,
      header: false,
      sider: true
    })
  }, [])
  return (
    <Row>
      <Col>DashboardAdmin</Col>
    </Row>
  );
}

export default DashboardAdmin;
