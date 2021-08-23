import { useState } from "react"

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <nav>
            <div className="mobile-header">
                <a href="/#">
                    <h1>Aman Maharshi</h1>
                </a>
                <button className="toggle-btn" onClick={() => setShowMobileNav(!showMobileNav)}>
                    {showMobileNav ? "⛌" : "☰"}
                </button>
            </div>
            <div className={showMobileNav ? "menu" : "menu menu-hide"}>
                <ul className="nav-links">
                    <li>
                        <a href="/#">Portfolio</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
