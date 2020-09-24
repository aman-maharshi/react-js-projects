import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"

import SidebarData from "./SidebarData"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    function handleNavToggle() {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div className="navbar">
                <Link to="#" className="toggle-icon">
                    <FaIcons.FaBars onClick={handleNavToggle} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={handleNavToggle}>
                    <li className="navbar-toggle">
                        <Link to="#" className="toggle-icon">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.class}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
