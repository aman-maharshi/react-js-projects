const Navbar = () => {
    return (
        <nav>
            <div className="mobile-header">
                <a href="/#">
                    <h1>Aman Maharshi</h1>
                </a>
            </div>
            <div className="mobile-menu">
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
