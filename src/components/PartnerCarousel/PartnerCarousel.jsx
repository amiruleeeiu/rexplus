import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PartnerCarousel.scss'
import partner1 from '../../assects/team-1.jpg'
import partner2 from '../../assects/team-2.jpg'
import partner3 from '../../assects/team-3.jpg'

const PartnerCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item className=''>
                <img
                className="d-block partner_image"
                src={partner1}
                alt="First slide"
                />
                <Carousel.Caption className='d-flex align-items-center justify-content-center'>
                    <div>
                        <img
                            className="d-block"
                            src={partner1}
                            alt="First slide"
                            />
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src={partner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src={partner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default PartnerCarousel;