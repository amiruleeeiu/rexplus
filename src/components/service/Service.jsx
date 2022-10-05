import React from 'react';
import './service.scss'
import serviceLogo from '../../assects/service.jpg'
import ServiceCard from './ServiceCard';
import {Container,Row ,Col} from 'react-bootstrap'

const SERVICE_DATA=[
    {
        icon:'ri-vip-diamond-line',
        title:'Graphic Design',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
    {
        icon:'ri-window-2-line',
        title:'Web Design',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
    {
        icon:'ri-file-word-line',
        title:'Wordpress',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
    {
        icon:'ri-store-3-line',
        title:'Online Marketing',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
    {
        icon:'ri-luggage-deposit-line',
        title:'Consulttant',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
    {
        icon:'ri-24-hours-line',
        title:'24h Support',
        desc:'Lorem ipsum dolor sit amet, ctetur adipiscing elit. Donec neque ante, egestas in nunc vitae, euismod.'
    },
]

const Service = () => {
    return (
        <Container className='service'>
            <div className="service_top">
                <img src={serviceLogo} alt="service" />
                <h2>Our Core Services</h2>
            </div>
            
            <Row className='services_items'>
                {
                    SERVICE_DATA.map((service,index)=><Col  md={4} sm={6} key={index}><ServiceCard service={service}/></Col>)
                }
            </Row>
        </Container>
    );
};

export default Service;