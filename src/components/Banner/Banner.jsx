import React from 'react';
import banner from '../../assects/download.png'
import './banner.scss'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <div className="content">
                <h1>Welcome to fancy business <br/> platfrom Your Grouth our business</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum et error fugiat nostrum magni expedita odio.</p>
                <button>GET OUR SERVICE</button>
            </div>
        </div>
    );
};

export default Banner;