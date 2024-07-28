import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import footLogo from '../assets/footLogo.png';
import send from '../assets/send.png';
import links from '../assets/links.png';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row>
                    <Col md={5} className="d-flex flex-column justify-content-start align-items-center">
                        <img src={footLogo} className="img-fluid mb-5" alt="Footer Logo" />
                        <div className='footer-text'>
                            <p>Copyright © 2020 Nexcent ltd.</p>
                            <p>All rights reserved</p>
                            <img src={links} className='img-fluid mt-2' alt="Social Links" />
                        </div>
                    </Col>
                    <Col md={2} className="footer-links mb-3 mb-md-0">
                        <h5 className='footer-heading mb-4'>Company</h5>
                        <ul className="list-unstyled">
                            <li className='mb-2'>About us</li>
                            <li className='mb-2'>Blog</li>
                            <li className='mb-2'>Contact us</li>
                            <li className='mb-2'>Pricing</li>
                            <li className='mb-2'>Testimonials</li>
                        </ul>
                    </Col>
                    <Col md={2} className="footer-links mb-3 mb-md-0">
                        <h5 className='footer-heading mb-4'>Support</h5>
                        <ul className="list-unstyled">
                            <li className='mb-2'>Help center</li>
                            <li className='mb-2'>Terms of service</li>
                            <li className='mb-2'>Legal</li>
                            <li className='mb-2'>Privacy policy</li>
                            <li className='mb-2'>Status</li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <h5 className='footer-heading'>Stay up to date</h5>
                        <Form>
                            <Form.Group className="d-flex mt-4 footer-input-group">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="footer-input"
                                />
                                <Button variant="" className="footer-button">
                                    <img src={send} alt="Send Icon" />
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
