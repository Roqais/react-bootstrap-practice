import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import footLogo from '../assets/footLogo.png';
import send from '../assets/send.png';
import links from '../assets/links.png';
import './footer.css';

const Footer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [validated, setValidated] = useState(false);

    const [msg, setMsg] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            // Submit the form data
            console.log('Form submitted:', formData);
            // Reset form data
            setFormData({ name: '', email: '', message: '' });
            setValidated(false)
            setMsg("Msg Sent")
            setTimeout(() => {
                setMsg("")
            }, 1500);

        }
    };


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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mt-4">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="footer-input"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Name is required
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mt-4">
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Your email address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="footer-input"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email is required
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mt-4">
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={3}
                                    placeholder="Your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="footer-input"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Message is required
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="d-flex mt-4 justify-content-center footer-input-group">
                                <Button type="submit" variant="" className="">
                                    Submit
                                </Button>

                            </Form.Group>

                            {
                                msg && <p style={{ color: "red", marginTop: '20px' }}>{msg}</p>
                            }


                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
