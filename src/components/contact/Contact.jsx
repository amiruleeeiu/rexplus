import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import './contact.scss'
import { FaEnvelope } from 'react-icons/fa';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { MdLocationPin } from 'react-icons/md';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <Container className='contact mb-5'>
            <SectionTop title='Get In Touch' hideTitle='Contact' icon={<FaEnvelope/>}/>
            <Row className='mt-3'>
                <Col md={9} className='contact_form'>
                    <h4 className='fw-bold mb-4'>Drop Line Here</h4>
                    <form>
                        <div className='d-flex gap-3'>
                            <Form.Group className="mb-3 w-100">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-100">
                                <Form.Control type="text" placeholder="Number" />
                            </Form.Group>
                        </div>
                        <div className='d-flex gap-3'>
                            <Form.Group className="mb-3 w-100">
                                <Form.Control type="text" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-100">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3 w-100">
                            <Form.Control as="textarea" aria-label="With textarea" rows='6' placeholder='Your Message'/>
                        </Form.Group>
                        <button className='btn'>SEND NOW</button>
                    </form>
                </Col>
                <Col md={3} className='address px-5'>
                    <div>
                        <span><MdLocationPin/></span>
                        <h5>Location</h5>
                        <p>Aox street, newyork</p>
                    </div>
                    <div>
                        <span><MdMarkEmailUnread/></span>
                        <h5>E-mail</h5>
                        <p>ancy@gmail.com</p>
                    </div>
                    <div>
                        <span><BsFillTelephoneFill/></span>
                        <h5>Phone</h5>
                        <p>+888 0221 2568</p>
                    </div>
                    <div className='media_icon mt-4'>
                        <span><i class="ri-facebook-fill"></i></span>
                        <span><i class="ri-twitter-fill"></i></span>
                        <span><i class="ri-linkedin-fill"></i></span>
                        <span><i class="ri-instagram-line"></i></span>
                        <span><i class="ri-google-fill"></i></span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;