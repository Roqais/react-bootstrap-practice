import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import footLogo from '../assets/footLogo.png';
import send from '../assets/send.png'
import links from '../assets/links.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#263238', color: '#F5F7FA', padding: '50px 0' }}>
            <Container>
                <Row>
                    <Col md={5} className="d-flex flex-column justify-content-start align-items-center ">
                        <img src={footLogo} className="img-fluid mb-5" alt="" />
                        <div className='text-left' style={{ color: '#F5F7FA', lineHeight: "10px", fontWeight: '400', fontSize: '14px' }}>
                            <p>Copyright © 2020 Nexcent ltd.</p>
                            <p>All rights reserved</p>
                            <img src={links} className='img-fluid mt-2' alt="" />

                        </div>
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                        <h5 style={{ fontWeight: '600', fontSize: '24px' }} className='mb-4'>Company</h5>
                        <ul className="list-unstyled" style={{ fontWeight: '300', fontSize: '14px' }}>
                            <li className='mb-2'>About us</li>
                            <li className='mb-2'>Blog</li>
                            <li className='mb-2'>Contact us</li>
                            <li className='mb-2'>Pricing</li>
                            <li className='mb-2'>Testimonials</li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                        <h5 style={{ fontWeight: '600', fontSize: '24px' }} className='mb-4'>Support</h5>
                        <ul className="list-unstyled" style={{ fontWeight: '300', fontSize: '14px' }}>
                            <li className='mb-2'>Help center</li>
                            <li className='mb-2'>Terms of service</li>
                            <li className='mb-2'>Legal</li>
                            <li className='mb-2'>Privacy policy</li>
                            <li className='mb-2'>Status</li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <h5>Stay up to date</h5>
                        <Form>
                            <Form.Group className="d-flex mt-4" style={{ backgroundColor: '#5c686e', borderRadius: '5px', overflow: 'hidden', height: '45px' }}>
                                <Form.Control type="email" placeholder="Your email address" style={{ backgroundColor: '#5c686e', border: 'none', flex: 1, height: '100%',color:'#D9DBE1' }} />
                                <Button variant="" style={{ backgroundColor: '#5c686e', border: 'none', height: '100%' }}>
                                    <img src={send} alt="" />
                                </Button>
                            </Form.Group>


                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
