import React from 'react';

const HowWorkCard = ({data}) => {
    return (
        <div className='howWork_card'>
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
        </div>
    );
};

export default HowWorkCard;