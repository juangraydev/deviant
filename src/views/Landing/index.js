import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import {
  Row,
  Col,
  Card
} from 'antd';
import "antd/dist/antd.css";


function LandingPage() {

  return (
    <> 
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Row gutter={[16,16]}>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
            <Col span={8}>
              <Card></Card>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Card></Card>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
