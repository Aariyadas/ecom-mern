import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container style={{ backgroundColor: 'light' }}>
      <Row>
        <Col className='text-center py-3'>
          Copyright Glow Girl
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
