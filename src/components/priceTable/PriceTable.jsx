import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGift } from 'react-icons/fa';
import SectionTop from '../sectionTop/SectionTop';

const PriceTable = () => {
    return (
        <div className='pricePable'>
            <Container>
                <SectionTop title='Awesome Price Table' hideTitle='Our Offers' icon={<FaGift/>}/>
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
                            <div className='indicator_hover'></div>
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
                            <div className='indicator_hover'></div>
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
                            <div className='indicator_hover'></div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default PriceTable;