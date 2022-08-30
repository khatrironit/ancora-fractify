import React from 'react'
import boy from '../shared/img/boy.svg';
import play from '../shared/img/play.svg';
import incr from '../shared/img/incr.svg';
import { Container, Row, Col } from 'reactstrap';

export default function Home() {
  return (
    <>
        <Row className="home">
            <Col>
                <div className="mt-4">
                    <span className='label'><span className="d-flex align-items-center"><span>Unlock</span> &nbsp;&nbsp;<span className="outline">your</span></span>
                    online growth <span className="d-flex align-items-center"><span>potential</span>&nbsp; <span className="outline-btn"><button>Yes</button></span></span></span>
                </div><br/><br/><br/>
                <div className="buttonbox">
                    <div>
                        <button>Our Product</button>
                    </div>
                    <div>
                        <img src={play} />
                    </div>
                </div>
            </Col>
            <Col xs="5" className="mobile-hidden">
                <img className="boyImage" src={boy} />
            </Col>
        </Row><br/>
        <Row>
            <Col className='text-center'>
                <div className='orange-card'>
                        <div className="card">
                            <div>
                                <img src={incr} />
                            </div>
                            <div className='text1'>
                                Drive your money to<br/> work smarter than others
                            </div>
                            <div className="text2">
                                A safe and secure invesment nedd guided aproach with real time<br/> analytics and risk analysis ,
                                we can help you to catch all at once.
                            </div>
                        </div>
                </div>
            </Col>
        </Row><br/><br/>
        <Row>
            <Col className="text-center">
                <span className="signuptext">Signup Now & Get</span>
            </Col>
        </Row><br/><br/>
        <Row>
            <Col>
                <div className="footer">
                    <div className='footer-card'>
                        <div className="number">01</div>
                        <div className="text">
                            <div className='heading'>Early Access</div>
                            <div className='subheading'>You’ll be priorities from the pool<br/> of millioins</div>
                        </div>
                    </div>
                    <div className='footer-card'>
                        <div className="number">02</div>
                        <div className="text">
                            <div className='heading'>Zero Brokerage</div>
                            <div className='subheading'>You’ll be priorities from the  pool<br/> of millioins</div>
                        </div>
                    </div>
                    <div className='footer-card'>
                        <div className="number">03</div>
                        <div className="text">
                            <div className='heading'>Zero Processing Charges</div>
                            <div className='subheading'>You’ll be priorities from<br/> the  pool of millioins</div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </>
  )
}
