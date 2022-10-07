import React from 'react';
import about1 from '../../assects/images/about-1.jpg'
import about2 from '../../assects/images/about-2.jpg'
import { BiLoaderCircle } from 'react-icons/bi';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTop from '../sectionTop/SectionTop';

const About = () => {
    return (
        <div className='about'>
            <SectionTop title='About The Fancy' hideTitle='Who We Are' icon={<BiLoaderCircle/>}/>
            <Container className='about_content'>
                <Row>
                    <Col md={6} className='about_image'>
                        <img src={about1} alt="" />
                        <div className='about_image_over'>
                            <img src={about2} alt="" />
                        </div>
                    </Col>
                    <Col md={6} className='about_details'>
                        <h2>Welcome to Fancy Business & Agency Platfrom.</h2>
                        <p>Aliquam congue in nibh non posuere. Donec eu convallis risus, ut molestie orci. Vestibulum elementum, felis quis sagittis pellentesque, purus risus tincidunt risus, eget scelerisque metus nunc et mauris. Nullam vel mentum dolor. Aliquam congue in nibh non posuere. Donec eu convallis risus, olestie</p>
                        <button>READ MORE</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;