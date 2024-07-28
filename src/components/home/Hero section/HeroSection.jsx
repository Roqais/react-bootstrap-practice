import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import illustration from "../../../assets/Illustration.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css';

function HeroSection() {
    return (
        <>
            <div className="hero-section">
                <Carousel>
                    <Carousel.Item>
                        <Row className="w-100">
                            <Col xs={12} md={5} className='caro-col order-md-2 order-1'>
                                <img
                                    className="d-block caro-img"
                                    src={illustration}
                                    alt="First slide"
                                />
                            </Col>
                            <Col xs={12} md={7} className='caro-col order-md-1 order-2'>
                                <div className='caro-div'>
                                    <h1 className='caro-heading'>
                                        Lessons and Insights <span className='highlight'>from 8 years</span>
                                    </h1>
                                    <p className='caro-text'>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="w-100">
                            <Col xs={12} md={5} className='caro-col order-md-2 order-1'>
                                <img
                                    className="d-block caro-img"
                                    src={illustration}
                                    alt="Second slide"
                                />
                            </Col>
                            <Col xs={12} md={7} className='caro-col order-md-1 order-2'>
                                <div className='caro-div'>
                                    <h1 className='caro-heading'>
                                        Lessons and Insights <span className='highlight'>from 8 years</span>
                                    </h1>
                                    <p className='caro-text'>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="w-100">
                            <Col xs={12} md={5} className='caro-col order-md-2 order-1'>
                                <img
                                    className="d-block caro-img"
                                    src={illustration}
                                    alt="Third slide"
                                />
                            </Col>
                            <Col xs={12} md={7} className='caro-col order-md-1 order-2'>
                                <div className='caro-div'>
                                    <h1 className='caro-heading'>
                                        Lessons and Insights <span className='highlight'>from 8 years</span>
                                    </h1>
                                    <p className='caro-text'>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default HeroSection;
