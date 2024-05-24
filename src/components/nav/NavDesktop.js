import { NavLink } from "react-router-dom"
import { Nav } from "./Nav"
import React from 'react'

export const NavDesktop = () => {

    const classes = {
        a: 'side-menu',
        active: 'side-menu--active',
        icon: 'side-menu__icon',
        title: 'side-menu__title',
        subIcon: 'side-menu__sub-icon',
        supOpen: 'side-menu--open',
    }
    
    return (
        <nav className="side-nav flex">
            <NavLink to="/" className="intro-x flex items-center pl-5  w-[200px] mt-[-60px]  overflow-hidden object-fill h-[150px] mr-5 ">
                <img alt="logo" src="/images/logo_w.svg"  width="100px" height="70px"/>
            </NavLink>
            {/* <div className="side-nav__devider my-6"></div> */}
            <Nav classes={classes}  />
        </nav>            
    )
}