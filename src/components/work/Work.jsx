import React from 'react';
import workImg from '../../assects/images/work.png'
import { Col, Container, Row } from 'react-bootstrap';
import WorkItem from './WorkItem';
import { AiOutlineUser } from 'react-icons/ai';
import { IoRocketSharp } from 'react-icons/io5';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiCreativeCommonsSaFill } from 'react-icons/ri';
import { AiOutlineInsertRowAbove } from 'react-icons/ai';

const WORKS_DATA=[
    {
        title:'Analisys',
        icon:<IoRocketSharp/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Production',
        icon:<MdOutlineProductionQuantityLimits/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:' Creative concept',
        icon:<RiCreativeCommonsSaFill/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Happy client',
        icon:<AiOutlineUser/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Consulation Services',
        icon:<AiOutlineInsertRowAbove/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
    {
        title:'Analisys',
        icon:<IoRocketSharp/>,
        desc:'Quisque rhoncus euismod pulvinar. Nulla non arcu at lectus. Vestibulum ipsum vestibulum velit.'
    },
]

const Work = () => {
    return (
        <div className='work_container'>
            <div className="work_top">
                <img src={workImg} alt="work" />
                <h2>Work Process</h2>
            </div>
            <Container className="work_content">
                <Row>
                    {
                        WORKS_DATA.map((work,index)=><Col md={6}>
                            <WorkItem index={index} work={work}/>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Work;