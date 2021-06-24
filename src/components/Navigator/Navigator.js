import React from 'react'
import './Navigator.scss'
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { CgMenuRight } from 'react-icons/cg';


const Navigator = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav-toggle" aria-controls="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <CgMenuRight className="text-white" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav-toggle">
                        <ul className="navbar-nav align-items-center ms-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link mx-3 py-1" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3 py-1" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3 py-1" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link mx-3 py-1 dropdown-toggle" to="//" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Presale
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">All Presale</Link></li>
                                    <li><Link className="dropdown-item" to="/">Active Presale</Link></li>
                                    <li><Link className="dropdown-item" to="/">Upcoming Presale</Link></li>
                                    <li><Link className="dropdown-item" to="/">Ended Presale</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center navbar-auth ms-lg-5">
                            <li className="nav-item">
                                <NavLink className="nav-link btn btn-cryptic bg-clr-deep-blue-dark rounded-pill px-4 py-2" to={'/'}>Sign Up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link btn btn-cryptic bg-clr-green rounded-pill px-4 py-2 ms-2" to={'/'}>Sign In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigator;