import React from 'react'
import org from '../../../assets/org.png'
import ass from '../../../assets/ass.png'
import group from '../../../assets/group.png'

import './community.css'
import { Col, Container, Row } from 'react-bootstrap'

const Community = () => {
    return (
        <Container style={{ marginTop: "50px" }}>

            <div className='custom-div'>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <Row className="d-flex text-center com-row">
                
                <Col className='com-col'>
                    <img src={ass} alt="" />
                    <h3>Membership Organisations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </Col>
                <Col className='com-col'>
                    <img src={org} alt="" />
                    <h3>National Associations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </Col>
                <Col className='com-col'>
                    <img src={group} alt="" />
                    <h3>Clubs And Groups</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </Col>
            </Row>

        </Container>
    )
}

export default Community