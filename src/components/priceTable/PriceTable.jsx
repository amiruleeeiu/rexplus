import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './priceTable.scss'
import { FaGift } from 'react-icons/fa';

const PriceTable = () => {
    return (
        <div className='pricePable'>
            <Container>
                <div className="service_top">
                    <span><FaGift/></span>
                    <h2>Awesome Price Table</h2>
                </div>
                
                <Row>
                    <Col md={4}>
                        <div md={4} className='priceTable_card'>
                            <h5>BASIC</h5>
                            <hr/>
                            <div className='mb-5'>
                                <h2>$49</h2>
                                <p>month</p>
                                <hr/>
                            </div>
                            <p>Email Marketing</p>
                            <p>Email Builder</p>
                            <p>Client Testing</p>
                            <p>Multiple Email Support</p>
                            <p>Email Read Receipent</p>
                            <p>2 Users Free</p>
                            <button>SIGN UP</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div md={4} className='priceTable_card'>
                            <h5>BASIC</h5>
                            <hr/>
                            <div className='mb-5'>
                                <h2>$49</h2>
                                <p>month</p>
                                <hr/>
                            </div>
                            <p>Email Marketing</p>
                            <p>Email Builder</p>
                            <p>Client Testing</p>
                            <p>Multiple Email Support</p>
                            <p>Email Read Receipent</p>
                            <p>2 Users Free</p>
                            <button>SIGN UP</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div md={4} className='priceTable_card'>
                            <h5>BASIC</h5>
                            <hr/>
                            <div className='mb-5'>
                                <h2>$49</h2>
                                <p>month</p>
                                <hr/>
                            </div>
                            <p>Email Marketing</p>
                            <p>Email Builder</p>
                            <p>Client Testing</p>
                            <p>Multiple Email Support</p>
                            <p>Email Read Receipent</p>
                            <p>2 Users Free</p>
                            <button>SIGN UP</button>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default PriceTable;