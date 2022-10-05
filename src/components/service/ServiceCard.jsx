import React from 'react';

const ServiceCard = ({service}) => {
    const{icon,title,desc}=service
    return (
        <div className='service_card d-flex'>
            <div className='service_icon'>
                <i class={icon}></i>
            </div>
            <div className="service_content">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;