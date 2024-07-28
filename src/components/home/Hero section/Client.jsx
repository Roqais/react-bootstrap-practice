import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import b1 from '../../../assets/b1.png';
import b2 from '../../../assets/b2.png';
import b3 from '../../../assets/b3.png';
import b4 from '../../../assets/b4.png';
import b5 from '../../../assets/b5.png';
import b6 from '../../../assets/b6.png';
import './client.css';

const Client = () => {
    return (
        <>
            <Container className="client-section" style={{ marginTop: "50px" }}>
                <Row className="text-center mb-4">
                    <Col>
                        <h2 style={{ fontWeight: "600", fontSize: '36px' }}>Our Clients</h2>
                        <p>We have been working with some Fortune 500+ clients</p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center">
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b1} alt="Client 1" className="client-logo" />
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b2} alt="Client 2" className="client-logo" />
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b3} alt="Client 3" className="client-logo" />
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b4} alt="Client 4" className="client-logo" />
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b5} alt="Client 5" className="client-logo" />
                    </Col>
                    <Col xs={6} sm={4} md={2} className="mb-3">
                        <img src={b6} alt="Client 6" className="client-logo" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Client;
