import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="header-nav">
                <Link to="/" className="header-logo">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        alt="Logo"
                    />
                </Link>
                
                <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/github"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Github
                    </NavLink>
                </div>

                <div className="header-buttons">
                    <Link to="#" className="btn btn-secondary">
                        Log in
                    </Link>
                    <Link to="#" className="btn btn-primary">
                        Get started
                    </Link>
                    
                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="container">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/github"
                            className={({isActive}) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Github
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}