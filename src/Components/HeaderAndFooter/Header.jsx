import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/LogoReactJsWeb.svg';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const isActive = (path) => {
        return path === activeLink ? 'active' : '';
    };

    return (
        <>
            <header className='bg-light'>
                <div className='container mx-auto nav_bg '>
                    <nav className="navbar navbar-expand-lg navbar-light">

                        <Link className="logo-header" to="/"><img src={Logo} alt='Logo' /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/service')}`} to="/service">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/about')}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/contact')}`} to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
