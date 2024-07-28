import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import f1 from '../../assets/f1.png'

import './unlock.css'

const Unlock = () => {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <Row className="w-100">
                    <Col md={5} className="d-flex align-items-center justify-content-center">
                        <img src={f1} alt="" className="img-fluid" />
                    </Col>
                    <Col md={7} className="d-flex flex-column text-left justify-content-center unlock-col">
                        <h2>The unseen of spending three years at Pixelgrade</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <Button variant='primary' className="unlock-b">
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Unlock
