import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import './geniousPeople.scss'
import { HiUserGroup } from 'react-icons/hi';
import { Col, Container, Row } from 'react-bootstrap';
import team1 from '../../assects/team-1.jpg'
import team2 from '../../assects/team-2.jpg'
import team3 from '../../assects/team-3.jpg'
import team4 from '../../assects/team-4.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGooglePlusG } from 'react-icons/fa';

const GeniousPeople = () => {
    return (
        <>
            <SectionTop title='Our Genious People' icon={<HiUserGroup/>}/>
            <div className='geniousPeople_details d-flex aligin-items-center justify-content-center flex-wrap'>
                <div md={3} className='geniousPeople'>
                    <img src={team1} alt="team1" />
                    <div className="user_content">
                        <div>
                            <h6>SUNNY KHAN </h6>
                            <p>UI/XI DESIGNER</p>
                            <div className="social_icon">
                                <span><FaFacebookF/></span>
                                <span><AiOutlineTwitter/></span>
                                <span><FaGooglePlusG/></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div md={3} className='geniousPeople'>
                    <img src={team2} alt="team1" />
                    <div className='user_content'>
                        <div>
                            <h6>SHOHAG KHAN </h6>
                            <p>UI/XI DESIGNER</p>
                            <div className="social_icon">
                                <span><FaFacebookF/></span>
                                <span><AiOutlineTwitter/></span>
                                <span><FaGooglePlusG/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div md={3} className='geniousPeople'>
                    <img src={team3} alt="team1" />
                    <div className="user_content">
                        <div>
                            <h6>Ahamed KHAN </h6>
                            <p>UI/XI DESIGNER</p>
                            <div className="social_icon">
                                <span><FaFacebookF/></span>
                                <span><AiOutlineTwitter/></span>
                                <span><FaGooglePlusG/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div md={3} className='geniousPeople'>
                    <img src={team4} alt="team1" />
                    <div className="user_content">
                        <div>
                            <h6>SUNNY KHAN </h6>
                            <p>UI/XI DESIGNER</p>
                            <div className="social_icon">
                                <span><FaFacebookF/></span>
                                <span><AiOutlineTwitter/></span>
                                <span><FaGooglePlusG/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeniousPeople;