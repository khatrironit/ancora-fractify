import React from 'react'
import fractify from '../shared/img/fractify.svg'
import { Row, Col } from 'reactstrap';

export default function Header() {
  return (
    <Row className="header">
        <Col className="text-left">
            <img src={fractify} />
        </Col>
        <Col xs="auto" className="mobile-hidden"><span className='label'>Product</span></Col>
        <Col xs="auto" className="mobile-hidden"><span className='label'>Invest</span></Col>
        <Col xs="auto" className="mobile-hidden"><span className='label'>Community</span></Col>
        <Col xs="auto" className="mobile-hidden"><span className='label'>About</span></Col>
        <Col className="text-right">
            <button className="btn">Early Access</button>
        </Col>
    </Row>
  )
}
