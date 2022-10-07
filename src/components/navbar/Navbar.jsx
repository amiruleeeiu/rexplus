import React, { useEffect, useState } from 'react';
import logo from '../../assects/images/logo.png'
import {NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const NAV_LINK=[
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
                <Dropdown
                    
                >
                    <Dropdown.Toggle style={{background:'transparent',border:'none'}}>
                        Home
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{background:'rgb(46, 46, 119)'}}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {
                    NAV_LINK.map((nav,index)=><NavLink to={nav.path} key={index} end>{nav.display}</NavLink>)
                }
            </div>
            <div className="sidebar">
                    <div className={`${sidebar ? 'activeSidebar' : null} sidebar_items`}>
                        <ul>
                            <Dropdown>
                                <Dropdown.Toggle style={{background:'transparent',border:'none'}}>
                                    Home
                                </Dropdown.Toggle>
            
                                <Dropdown.Menu style={{background:'rgb(46, 46, 119)',position:'static !important'}}>
                                    <Dropdown.Item href="#/action-1" style={{color:'white'}}>Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" style={{color:'white'}}>Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" style={{color:'white'}}>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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