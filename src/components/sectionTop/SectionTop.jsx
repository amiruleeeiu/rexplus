import React from 'react';
import './sectionTop.scss'

const SectionTop = ({title,icon,hideTitle}) => {
    return (
        <div className="sectionTop">
            <span>{icon}</span>
            <h1>{hideTitle}</h1>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTop;