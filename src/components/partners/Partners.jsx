import React from 'react';
import SectionTop from '../sectionTop/SectionTop';
import { BiRectangle } from 'react-icons/bi';
import partner1 from '../../assects/images/1.png'
import partner2 from '../../assects/images/2.png'
import partner3 from '../../assects/images/3.png'
import partner4 from '../../assects/images/4.png'
import partner5 from '../../assects/images/5.png'

const Partners = () => {
    return (
        <div className="partner">
            <SectionTop title='Partners Area' hideTitle='Our Partners' icon={<BiRectangle/>}/>
            <div className="d-flex items-center justify-content-center flex-wrap">
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
                <img src={partner5} alt="" />
            </div>
        </div>
    );
};

export default Partners;