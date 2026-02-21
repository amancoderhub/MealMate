import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    // Initialize theme on load
    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, []);

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            <div className="navbar-right">
                <div className="navbar-theme-toggle" onClick={toggleTheme}>
                    <div className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`}>
                        <span className="icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
                    </div>
                </div>
                <img className='profile' src={assets.profile_image} alt="" />
            </div>
        </div>
    )
}

export default Navbar