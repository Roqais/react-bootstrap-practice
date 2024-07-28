import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import b1 from '../../../assets/b1.png'
import b2 from '../../../assets/b2.png'
import b3 from '../../../assets/b3.png'
import b4 from '../../../assets/b4.png'
import b5 from '../../../assets/b5.png'
import b6 from '../../../assets/b6.png'

import './client.css'

const Client = () => {
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <Col>
                    <Row >
                        <div className='row-1 text-center'>
                            <h2 style={{ fontWeight: "600", fontSize: '36px' }}>Our Clients</h2>
                            <p>We have been working with some Fortune 500+ clients</p>
                        </div>
                    </Row>
                    <Row >
                        <div className="justify-content-center align-items-center" style={{ display: 'flex' }}>
                            <img src={b1} alt="" style={{ paddingRight: '5rem' }} className="client-logo" />
                            <img src={b2} alt="" style={{ paddingLeft: '5rem', paddingRight: '5rem' }} className="client-logo" />
                            <img src={b3} alt="" style={{ paddingLeft: '5rem', paddingRight: '5rem' }} className="client-logo" />
                            <img src={b4} alt="" style={{ paddingLeft: '5rem', paddingRight: '5rem' }} className="client-logo" />
                            <img src={b5} alt="" style={{ paddingLeft: '5rem', paddingRight: '5rem' }} className="client-logo" />
                            <img src={b6} alt="" style={{ paddingLeft: '5rem' }} className="client-logo" />
                        </div>

                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default Client