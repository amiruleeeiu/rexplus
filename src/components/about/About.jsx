import React from 'react';
import './about.scss'
import aboutimg from '../../assects/about-2.jpg'
import { BiLoaderCircle } from 'react-icons/bi';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTop from '../sectionTop/SectionTop';

const About = () => {
    return (
        <div className='about'>
            <SectionTop title='About The Fancy' hideTitle='Who We Are' icon={<BiLoaderCircle/>}/>
            <Container className='about_content'>
                <Row>
                    <Col md={6}>
                        <img src={aboutimg} alt="" />
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