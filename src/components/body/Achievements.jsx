import { Col, Container, Row, Button } from 'react-bootstrap'
import './achievements.css'

import ach1 from '../../assets/ach1.png'
import ach2 from '../../assets/ach2.png'
import ach3 from '../../assets/ach3.png'
import ach4 from '../../assets/ach4.png'


const Achievements = () => {
    return (
        <div style={{ backgroundColor: '#F5F7FA' }}>
            <Container>
                <Row>
                    <Col className='ach-col-1'>
                        <h2>
                            Helping a local <br /><span>business reinvent itself</span>
                        </h2>

                        <p>We reached here with our hard work and dedication</p>
                    </Col>

                    <Col className='m-5'>

                        <Row className='p-1'>
                            <div className='d-flex ach-row-1 '>
                                <div className="d-flex justify-content-center align-items-center ach-row-2">
                                    <img src={ach1} alt="" className="img-fluid" />

                                    <div className="ms-2">
                                        <h3>2,245,341</h3>
                                        <p>Members</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center align-items-center ach-row-2">
                                    <img src={ach2} alt="" className="img-fluid" />

                                    <div className="ms-2">
                                        <h3>46,328</h3>
                                        <p>Clubs</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>

                            <div className='d-flex ach-row-1'>
                                <div className="d-flex justify-content-center align-items-center ach-row-2">
                                    <img src={ach3} alt="" className="img-fluid" />

                                    <div className="ms-2">
                                        <h3>828,867</h3>
                                        <p>Event Bookings</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center align-items-center ach-row-2">
                                    <img src={ach4} alt="" className="img-fluid" />

                                    <div className="ms-2">
                                        <h3>1,926,436</h3>
                                        <p>Payments</p>
                                    </div>
                                </div>
                            </div>

                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Achievements