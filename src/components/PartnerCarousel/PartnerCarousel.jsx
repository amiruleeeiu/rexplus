import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../assects/images/download.png'
import partner1 from '../../assects/images/team-1.jpg'
import partner2 from '../../assects/images/team-2.jpg'
import partner3 from '../../assects/images/team-3.jpg'
import Slider from 'react-slick';

const PartnerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings} className='carousel text-center'>
            
                    <div className=''>
                        <div className="partner_details">
                            <div className='partner_img d-flex align-items-center justify-content-center'>
                                <img src={partner1} alt=""/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit quidem nam minus, veritatis delectus impedit vel eligendi aliquid est porro error explicabo id laborum. Perspiciatis id tempore rerum nulla!</p>
                            <span>Arbaz Khan</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className="partner_details">
                        <div className='partner_img d-flex align-items-center justify-content-center'>
                                <img src={partner2} alt=""/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit quidem nam minus, veritatis delectus impedit vel eligendi aliquid est porro error explicabo id laborum. Perspiciatis id tempore rerum nulla!</p>
                            <span className='text-center'>Rakib Hasan</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className="partner_details">
                        <div className='partner_img d-flex align-items-center justify-content-center'>
                                <img src={partner3} alt=""/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit quidem nam minus, veritatis delectus impedit vel eligendi aliquid est porro error explicabo id laborum. Perspiciatis id tempore rerum nulla!</p>
                            <span>Sunny Khan</span>
                        </div>
                    </div>
                {/* <div className='carousel_overlay'>

                </div> */}
            
        </Slider>
    );
};

export default PartnerCarousel;