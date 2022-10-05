import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import './blog.scss'
import { ImBlogger } from 'react-icons/im';
import blog1 from '../../assects/blog-1.jpg'
import blog2 from '../../assects/blog-2.jpg'
import blog3 from '../../assects/blog-3.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='blog'>
            <SectionTop title='From The Blog' hideTitle='The News' icon={<ImBlogger/>}/>
            <Row>
                <Col md={4} className="blog_item">
                    <img src={blog1} alt="" />
                    <h5>06 Jun, 2018</h5>
                    <h4>Last Business Meeting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur, ante non accumsan fringilla, orci lectus suscipit ante non accumsan</p>
                    <button>Read More</button>
                </Col>
                <Col md={4} className="blog_item">
                    <img src={blog2} alt="" />
                    <h5>06 Jun, 2018</h5>
                    <h4>Last Business Meeting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur, ante non accumsan fringilla, orci lectus suscipit ante non accumsan</p>
                    <button>Read More</button>
                </Col>
                <Col md={4} className="blog_item">
                    <img src={blog3} alt="" />
                    <h5>06 Jun, 2018</h5>
                    <h4>Last Business Meeting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur, ante non accumsan fringilla, orci lectus suscipit ante non accumsan</p>
                    <button>Read More</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;