import React, { useEffect, useState } from 'react';
import './navbar.scss'
import logo from '../../assects/logo.png'
import {NavLink } from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa';

const NAV_LINK=[
    {
        path:'/',
        display:'HOME'
    },
    {
        path:'/about',
        display:'ABOUT'
    },
    {
        path:'/service',
        display:'SERVICE'
    },
    {
        path:'/gallery',
        display:'GALLERY'
    },
    {
        path:'/team',
        display:'TEAM'
    },
    {
        path:'/blog',
        display:'BLOG'
    },
    {
        path:'/contact',
        display:'CONTACT'
    },

]

const Navbar = () => {

    const [offset, setOffset] = useState(0);

    useEffect(()=>{
        const onScroll=()=>setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
    },[])


    return (
        <div className={`${offset>0 ? 'scrollNav' : 'unScrollNav'} nav`}>
            <div className="logo">
                <img src={logo} alt="rexplus" />
            </div>
            <div className="nav_items ">
                    {
                        NAV_LINK.map((nav,index)=><NavLink to={nav.path} key={index} end>{nav.display}</NavLink>)
                    }
            </div>
            <div className="nav_logo">
                <FaAlignJustify/>
            </div>
        </div>
    );
};

export default Navbar;