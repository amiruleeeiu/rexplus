import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import './award.scss'
import { MdSecurity } from 'react-icons/md';
import { Col, Container, Row } from 'react-bootstrap';
import award1 from '../../assects/award-1.png'
import award2 from '../../assects/award-2.png'
import award3 from '../../assects/award-3.png'

const Partners = () => {
    return (
        <Container>
            <SectionTop title='We Are The Best' hideTitle='Our Awards' icon={<MdSecurity/>}/>
            <Row className='award'>
                <Col md={3} className='award_item'>
                    <img src={award1} alt="" />
                    <p>Best eco design</p>
                    <h6>ECO STYLE 2014</h6>
                    <button>View Project</button>
                </Col>
                <Col md={3} className='award_item'>
                    <img src={award2} alt="" />
                    <p>Global design</p>
                    <h6>MODERNICA 2015</h6>
                    <button>View Project</button>
                </Col>
                <Col md={3} className='award_item'>
                    <img src={award3} alt="" />
                    <p>Best eco design</p>
                    <h6>ECO STYLE 2014</h6>
                    <button>View Project</button>
                </Col>
                <Col md={3} className='award_item'>
                    <img src={award2} alt="" />
                    <p>Global design</p>
                    <h6>MODERNICA 2015</h6>
                    <button>View Project</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Partners;