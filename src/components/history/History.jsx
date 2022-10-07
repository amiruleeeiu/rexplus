import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TbUserCircle } from 'react-icons/tb';
import { MdOutlineCloudDone } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const History = () => {
    return (
        <div className='history'>
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <span><TbUserCircle/></span>
                        <h4>1520+</h4>
                        <h4>Happy Clients</h4>
                    </Col>
                    <Col md={3} sm={6}>
                        <span><MdOutlineCloudDone/></span>
                        <h4>300+</h4>
                        <h4>Project Done</h4>
                    </Col>
                    <Col md={3} sm={6}>
                        <span><AiOutlineSetting/></span>
                        <h4>1000+</h4>
                        <h4>Line Code</h4>
                    </Col>
                    <Col md={3} sm={6}>
                        <span><BsArrowUpRightCircle/></span>
                        <h4>20+</h4>
                        <h4>Award Win</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default History;