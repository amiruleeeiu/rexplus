import React from 'react';
import './sectionTop.scss'

const SectionTop = ({title,icon}) => {
    return (
        <div className="sectionTop">
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTop;