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
            <div className=" flex flex-col">
            <NavLink to="/" className="intro-x flex items-center pl-1  w-[73px] mt-[-25px]  overflow-hidden object-fill h-[70px] mr-5  bg-white rounded-full">
                <img alt="logo" src="https://iig-uni-freiburg.github.io/images/wolfgang/icon.png"  width="65px" height="65px"/>
            </NavLink>
            <NavLink to="/" className="text-white text-sm mt-[2px]">NetMastro</NavLink>
            </div>
            {/* <div className="side-nav__devider my-6"></div> */}
            <Nav classes={classes}  />
        </nav>            
    )
}