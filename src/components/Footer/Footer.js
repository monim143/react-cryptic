import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss';
import footerBgImg from '../../assets/images/footerBg.jpg';

const Footer = () => {
    return (
        <>
            <footer className="footer" style={{backgroundImage : `url(${footerBgImg})`}}>
                <div className="footerTop">
                    <div className="container">
                        <div className="row text-center text-sm-start">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerGridBox mb-4 mb-lg-0">
                                    <h4 className="footerGridBoxTitle">Resources</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'/'}>How to Buy Coin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Coin Overview</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Blog News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>How to Sell Coin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Purchase Theme</Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerGridBox mb-4 mb-lg-0">
                                    <h4 className="footerGridBoxTitle">Network</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'/'}>Network Stats</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Block Explorers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Governance</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Exchange Markets</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerGridBox mb-4 mb-lg-0">
                                    <h4 className="footerGridBoxTitle">Network</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'/'}>Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Developer Center</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Helpes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Terms & Conditions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Purchase Theme</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerGridBox">
                                    <h4 className="footerGridBoxTitle">About us</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'/'}>Our Coin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Carriers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Our Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Our Project</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/'}>Purchase</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBottom text-center py-4">
                    <div className="container">
                        <p> &#169; Cryptic {new Date().getFullYear()}, All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer