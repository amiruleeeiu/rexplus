import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import bg2 from '../../assects/images/bg-2.jpg'

const Faq = () => {
    return (
        <Row className='faq'>
            <Col md={6} className='faq_image'>
                <img src={bg2} alt="" className='w-100 h-100' />
                <div className='image_overlay'>
                    <div>
                        <i class="ri-play-circle-line"></i>
                        <h4>Our Company History Video</h4>
                        <h6>Its only take 5:30 min</h6>
                    </div>
                </div>
            </Col>
            <Col md={6} className='accordion'>
                
                <div className='accordion_details'>
                    <h4 className='accordion_title'>Some of our Company faq</h4>
                    
                    <div>
                        <Accordion defaultActiveKey="0" className='accordion_content'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='accordion_header'>
                                    <span className='accordion_number'>1</span>
                                    <h6 className='fw-bold'>How can I use it?</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, tempus integer commodo gravida elit, odio iaculisutate luctus platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='accordion_header'>
                                <span className='accordion_number'>2</span>
                                    <h6 className='fw-bold'>How to Connect With Us?</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, tempus integer commodo gravida elit, odio iaculisutate luctus platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='accordion_header'>
                                <span className='accordion_number'>3</span>
                                <h6 className='fw-bold'>How get more profit?</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, tempus integer commodo gravida elit, odio iaculisutate luctus platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='accordion_header'>
                                <span className='accordion_number'>4</span>
                                    <h6 className='fw-bold'>How to Manage Your Business?</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, tempus integer commodo gravida elit, odio iaculisutate luctus platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate platea, in sedviva mus, elit praesent nec est prtium odio iaculisutate
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Faq;