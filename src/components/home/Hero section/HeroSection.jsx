import { Carousel, Button } from 'react-bootstrap';
import illustration from "../../../assets/Illustration.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css'

function HeroSection() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item >
                        <Row className="w-100">
                            <Col md={7} className='caro-col'>
                                <div className='caro-div'>
                                    <h1 style={{ fontSize: '4rem', fontWeight: '600' }}>
                                        Lessons and Insights <span style={{ color: "#4CAF4F" }}>from 8 years</span>
                                    </h1>
                                    <p style={{ fontWeight: '400', fontSize: '16px' }}>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                            <Col md={5} className='caro-col'>
                                <img
                                    className="d-block w-60"
                                    src={illustration}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row className="w-100">
                            <Col md={7} className='caro-col'>
                                <div className='caro-div'>
                                    <h1 style={{ fontSize: '4rem', fontWeight: '600' }}>
                                        Lessons and Insights <span style={{ color: "#4CAF4F" }}>from 8 years</span>
                                    </h1>
                                    <p style={{ fontWeight: '400', fontSize: '16px' }}>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                            <Col md={5} className='caro-col'>
                                <img
                                    className="d-block w-60"
                                    src={illustration}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row className="w-100">
                            <Col md={7} className='caro-col'>
                                <div className='caro-div'>
                                    <h1 style={{ fontSize: '4rem', fontWeight: '600' }}>
                                        Lessons and Insights <span style={{ color: "#4CAF4F" }}>from 8 years</span>
                                    </h1>
                                    <p style={{ fontWeight: '400', fontSize: '16px' }}>Where to grow your business as a photographer: site or social media?</p>
                                    <Button size='lg' variant="primary" className='caro-button'>Register</Button>
                                </div>
                            </Col>
                            <Col md={5} className='caro-col'>
                                <img
                                    className="d-block w-60"
                                    src={illustration}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default HeroSection;
