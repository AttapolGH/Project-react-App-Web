"use client"
import Link from 'next/link'    
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './Navigation.css'
import MenuData from "../src/app/data/Menudata";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link href="#" className="menu-bar">
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item" onClick={toggleMenu}>
                    <li className="navbar-toggle">
                        Attapol Pumchai
                        <Link href="#" className="menu-bar">
                            <FaWindowClose />
                        </Link>
                    </li>
                    {MenuData.map((menu, index) => {
                        return (
                            <li className="menu-text" key={index}>
                                <Link href={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation;