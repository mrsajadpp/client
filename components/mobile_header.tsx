'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';

const Header = () => {

    const handleMenu = () => {
        const menu = document.getElementById('mobileMenu');
        if (menu) {
            if (menu.classList.contains('shown')) {
                menu.classList.remove('shown');
                menu.classList.add('hidden');
            } else {
                menu.classList.remove('hidden');
                menu.classList.add('shown');
            }
        } else {
            console.error('Menu element not found.');
        }
    };

    return (
        <>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
            <header className="mobile-header">
                <div className="left">
                    <button id="menuButton" onClick={handleMenu}>
                        <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#212121">
                            <path
                                d="M176.15-261.08q-11.63 0-19.85-8.22-8.22-8.23-8.22-19.87 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.23 8.22 8.22 8.22 19.67 0 11.64-8.22 19.85t-19.66 8.21H176.15Zm0-191.34q-11.63 0-19.85-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.22 8.22 8.23 8.22 19.67 0 11.64-8.22 19.85-8.22 8.22-19.66 8.22H176.15Zm0-191.35q-11.63 0-19.85-8.22-8.22-8.23-8.22-19.87 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.22 8.22 8.23 8.22 19.68 0 11.64-8.22 19.85t-19.66 8.21H176.15Z" />
                        </svg>
                    </button>
                </div>
                <div className="logo">
                    <Link href="/">
                        <img src={grovixLog.src} alt="CineCast" />
                    </Link>
                </div>
                <div className="right">
                    {/* <button id="searchIcon">
            <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#212121">
              <path
                d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
            </svg>
          </button> */}
                </div>
            </header>

            {/* Menu */}
            <div className="menuBar hidden" id="mobileMenu">
                <div className="menuArea">
                    <div className="menuItems">
                        <div className="topMenu">
                            <div className="left">
                                <button onClick={handleMenu}>
                                    <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px"
                                        fill="#212121">
                                        <path
                                            d="M480-440.27 278.38-238.65q-8.3 8.3-19.76 8.25-11.47-.06-19.97-8.56-8.19-8.5-8.03-19.62.15-11.11 8.34-19.3L440.27-480 238.96-682.12q-7.81-7.8-8-19.11-.19-11.31 8-19.81 8.19-8.5 19.46-8.75 11.27-.25 19.96 8.25L480-519.73l201.81-201.81q8.11-8.11 19.57-8.06 11.47.06 20.16 8.56 8 8.5 7.84 19.62-.15 11.11-8.34 19.3L519.73-480l201.31 202.12q7.81 7.8 8 19.11.19 11.31-8 19.81-8.19 8.5-19.46 8.75-11.27.25-19.77-8.44L480-440.27Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="menuItem">
                            <a href="/">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-house-blank"></i>
                                </div>
                                <div className="menuText">
                                    Home
                                </div>
                            </a>
                        </div>
                        <div className="menuItem">
                            <a href="/">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-search"></i>
                                </div>
                                <div className="menuText">
                                    Search
                                </div>
                            </a>
                        </div>
                        <div className="menuItem">
                            <a href="./trending.html">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-arrow-trend-up"></i>
                                </div>
                                <div className="menuText">
                                    Trending
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="menuItems">
                        {/* <div className="menuItem">
                            <a href="/auth/register" className='registerButton'>
                                <div className="menuIcon">
                                    <i className="fi fi-rr-enter"></i>
                                </div>
                                <div className="menuText">
                                    Register
                                </div>
                            </a>
                        </div> */}
                        <div className="menuItem">
                            <a href="/auth/login" className='registerButton'>
                                <div className="menuIcon">
                                    <i style={{ color: "#0078e8" }} className="fi fi-rr-enter"></i>
                                </div>
                                <div style={{ color: "#0078e8" }} className="menuText">
                                    Login
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="menuItems">
                        <div className="menuItem">
                            <a href="./contact-us.html">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-at"></i>
                                </div>
                                <div className="menuText">
                                    Contact
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
