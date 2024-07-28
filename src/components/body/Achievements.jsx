import { Col, Container, Row } from 'react-bootstrap';
import './achievements.css';

import ach1 from '../../assets/ach1.png';
import ach2 from '../../assets/ach2.png';
import ach3 from '../../assets/ach3.png';
import ach4 from '../../assets/ach4.png';

const Achievements = () => {
    return (
        <div className="achievements-section" style={{ backgroundColor: '#F5F7FA' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="ach-col-1">
                        <h2>
                            Helping a local <br /><span>business reinvent itself</span>
                        </h2>
                        <p>We reached here with our hard work and dedication</p>
                    </Col>

                    <Col md={7} className="achievements-data">
                        <Row className="g-4">
                            <Col xs={12} sm={6} className="ach-item">
                                <div className="d-flex align-items-center">
                                    <img src={ach1} alt="Members" className="img-fluid" />
                                    <div className="ms-2">
                                        <h3>2,245,341</h3>
                                        <p>Members</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="ach-item">
                                <div className="d-flex align-items-center">
                                    <img src={ach2} alt="Clubs" className="img-fluid" />
                                    <div className="ms-2">
                                        <h3>46,328</h3>
                                        <p>Clubs</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="ach-item">
                                <div className="d-flex align-items-center">
                                    <img src={ach3} alt="Event Bookings" className="img-fluid" />
                                    <div className="ms-2">
                                        <h3>828,867</h3>
                                        <p>Event Bookings</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="ach-item">
                                <div className="d-flex align-items-center">
                                    <img src={ach4} alt="Payments" className="img-fluid" />
                                    <div className="ms-2">
                                        <h3>1,926,436</h3>
                                        <p>Payments</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievements;
