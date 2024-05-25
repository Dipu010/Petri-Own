import React from 'react'
import { Link,NavLink } from "react-router-dom"
import { Nav } from "./Nav"
import * as Icon from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { getMobileMenu, setMobileMenu } from '../../features/controlsSlice'

export const NavMobile = () => {

    const classes = {
        a: 'menu',
        active: 'menu--active',
        icon: 'menu__icon',
        title: 'menu__title',
        subIcon: 'menu__sub-icon',
        supOpen: 'menu--open',
    }

    const dispatch = useDispatch()
    const { mobileCss, openMenu } = useSelector(getMobileMenu)

    const toggleMenu = () => {
        mobileCss === 'hidden' ? dispatch(setMobileMenu({mobileCss:'intro-y scrollable__content py-2'})) : dispatch(setMobileMenu({mobileCss:'hidden'}))
        openMenu === '' ? dispatch(setMobileMenu({openMenu:'mobile-menu--active'})) : dispatch(setMobileMenu({openMenu:''}))
    }

    return (
        <div className={'mobile-menu md:hidden ' + openMenu}>
            <div className="mobile-menu-bar">
            <NavLink to="/" className=" intro-x flex items-center pl-1  w-[28px] mt-[-13px]  overflow-hidden object-fill h-[25px] mr-2 ml-[-10px] bg-white rounded-full">
                <img alt="logo" src="https://iig-uni-freiburg.github.io/images/wolfgang/icon.png"  width="20px" height="20px"/>
            </NavLink>
                <button type="button" id="mobile-menu-toggler " className='ml-2' onClick={toggleMenu}>
                    <Icon.BarChart2 className="w-8 h-8 text-white transform -rotate-90" />
                </button>
            </div>
            <div className="scrollable">
                <button type="button" className="mobile-menu-toggler" onClick={toggleMenu}> <Icon.XCircle className="w-8 h-8 text-white transform -rotate-90 mr-2" /> </button>
                <Nav classes={classes} mobileCss={mobileCss} />
            </div>
        </div>
    )
}