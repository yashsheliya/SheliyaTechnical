import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/LogoReactJsWeb.svg';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const isActive = (path) => {
        return path === activeLink ? 'active' : '';
    };
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <>
            <header className='bg-light'>
                <div className='container mx-auto nav_bg '>
                    <nav className="navbar navbar-expand-lg navbar-light pb-4 py-lg-2">

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
                            <div className='d-flex'>
                                <div className='d-flex align-items-center'>
                                    {isAuthenticated && (
                                        <>
                                            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <img src={user.picture} alt={user.name} className='user-img-menu-top' />
                                            </div>
                                            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">My Profile</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className='d-flex gap-2'>
                                                                <div className='user-propil-img'>
                                                                    <img src={user.picture} alt={user.name} className='rounded' />
                                                                </div>
                                                                <div>
                                                                    <h2 className='fs-5'>{user.name}</h2>
                                                                    <p className='fs-6'>{user.email}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {
                                    isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='btn-hed-lis ms-3'>Log Out </button>)
                                        : (<button onClick={() => loginWithRedirect()} className='btn-hed-lis '>Log In</button>)
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
