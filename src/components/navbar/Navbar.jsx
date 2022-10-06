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
    const[sidebar,setSidebar]=useState(false);

    useEffect(()=>{
        const onScroll=()=>setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
    },[])

    console.log(sidebar);

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
            <div className="sidebar">
                    <div className={`${sidebar ? 'activeSidebar' : null} sidebar_items`}>
                        <ul>
                        {
                            NAV_LINK.map((nav,index)=><li><NavLink to={nav.path} key={index} end>{nav.display}</NavLink></li>)
                        }
                        </ul>
                    </div>
            </div>
            <div className="nav_logo" onClick={()=>setSidebar((prevState=>!prevState))}>
                {
                    sidebar ? <i class="ri-subscript"></i> : <i class="ri-list-check"></i>
                }
                
                
            </div>
        </div>
    );
};

export default Navbar;