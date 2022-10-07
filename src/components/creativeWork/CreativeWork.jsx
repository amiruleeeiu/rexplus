import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import { FaRegSnowflake } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import pro1 from '../../assects/images/pro-1.jpg'
import pro2 from '../../assects/images/pro-2.jpg'
import pro3 from '../../assects/images/pro-3.jpg'
import pro4 from '../../assects/images/pro-4.jpg'
import pro5 from '../../assects/images/pro-5.jpg'
import { FaSearchPlus } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';

const CreativeWork = () => {
    return (
        <div>
            <SectionTop title='Recent Creative Work' hideTitle='Our Portfolio' icon={<FaRegSnowflake/>}/>
            <div className="project_type">
                <button>All Project</button>
                <button>Graphic</button>
                <button>Mobile</button>
                <button>Web</button>
                <button>Others</button>
            </div>
            <Row className='projects'>
                <Col md={3} className='project_item g-0'>
                    
                    <img src={pro1} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro2} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div className='project_view'>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro3} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro4} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro5} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro2} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro3} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='project_item g-0'>
                    <img src={pro4} alt="project1" className='w-100'/>
                    <div className='project_over'>
                        <div>
                            <span><FaSearchPlus/></span>
                            <br />
                            <p>View Project <FaAngleDoubleRight/></p>
                        </div>
                    </div>
                </Col>
                
            </Row>

        </div>
    );
};

export default CreativeWork;