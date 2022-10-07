import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaExchangeAlt } from 'react-icons/fa';
import HowWorkCard from './HowWorkCard';
import oldman from '../../assects/images/oldman.jpg'

const HOWwORKS_DATA=[
    {
        title:'Agency Search',
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Management & Marketing',
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Coaching & Planning',
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Consulation Services',
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
]

const HowWork = () => {
    return (
        <Row className='howWork'>
            <Col md={5}>
                <img src={oldman} alt="" className='w-100'/>
            </Col>
            <Col md={7} className="howWork_content">
                <div>
                    <span><FaExchangeAlt/></span>
                    <h2>How We Works</h2>
                </div>
                <Row>
                    {
                    HOWwORKS_DATA.map((data,index)=><Col md={6}><HowWorkCard data={data} key={index}/></Col>)
                    }
                </Row>
            </Col>
        </Row>
    );
};

export default HowWork;