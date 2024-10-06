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
            <header className="mobile-header">
                <div className="left">
                    <button id="menuButton" onClick={handleMenu}>
                        <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
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
            <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
              <path
                d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
            </svg>
          </button> */}
                </div>
            </header>
            <header className="desktop-header">
                <div className="logo">
                    <Link href="/">
                        <img src={grovixLog.src} alt="Cinecast Entertainments" />
                    </Link>
                </div>
                <div className="menu">
                    <div className="menuItem">
                        <a href="/">Home</a>
                    </div>
                    <div className="menuItem">
                        <a href="./trending.html">Trending</a>
                    </div>
                    <div className="menuItem">
                        <a href="./contact-us.html">Contact</a>
                    </div>
                </div>
                <div className="search">
                    <form action="/">
                        <input type="text" name="search" id="search" placeholder="Search for anime, series, etc." />
                        <button>
                            <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
                                <path
                                    d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
                            </svg>
                        </button>
                    </form>
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
                                        fill="#000">
                                        <path
                                            d="M480-440.27 278.38-238.65q-8.3 8.3-19.76 8.25-11.47-.06-19.97-8.56-8.19-8.5-8.03-19.62.15-11.11 8.34-19.3L440.27-480 238.96-682.12q-7.81-7.8-8-19.11-.19-11.31 8-19.81 8.19-8.5 19.46-8.75 11.27-.25 19.96 8.25L480-519.73l201.81-201.81q8.11-8.11 19.57-8.06 11.47.06 20.16 8.56 8 8.5 7.84 19.62-.15 11.11-8.34 19.3L519.73-480l201.31 202.12q7.81 7.8 8 19.11.19 11.31-8 19.81-8.19 8.5-19.46 8.75-11.27.25-19.77-8.44L480-440.27Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="menuItem">
                            <a href="/">
                                <div className="menuIcon">
                                    <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px"
                                        fill="#000">
                                        <path
                                            d="M243.23-203.23h130.62v-202.35q0-14.25 9.99-24.24 9.99-9.99 24.24-9.99h144.03q14.03 0 24.04 9.99 10 9.99 10 24.24v202.35h130.62V-553.1q0-3.08-1.35-5.58-1.34-2.5-3.65-4.42L487.31-731.77q-3.08-2.69-7.31-2.69-4.23 0-7.31 2.69L248.23-563.1q-2.31 1.92-3.65 4.42-1.35 2.5-1.35 5.58v349.87Zm-55.96 0v-349.81q0-16.4 7.04-30.72 7.03-14.32 20.27-23.89l224.46-169.12q18.22-13.65 40.94-13.65 22.71 0 40.98 13.65l224.46 169.12q13.24 9.57 20.27 23.89 7.04 14.32 7.04 30.72v349.81q0 22.87-16.54 39.42-16.55 16.54-39.42 16.54H564.42q-14.25 0-24.24-9.99-9.99-9.99-9.99-24.24v-202.35H429.81v202.35q0 14.25-10 24.24-10 9.99-24.02 9.99H243.15q-22.78 0-39.33-16.54-16.55-16.55-16.55-39.42Zm292.73-266Z" />
                                    </svg>
                                </div>
                                <div className="menuText">
                                    Home
                                </div>
                            </a>
                        </div>
                        <div className="menuItem">
                            <a href="./trending.html">
                                <div className="menuIcon">
                                    <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px"
                                        fill="#000">
                                        <path
                                            d="M128.04-274.96q-8.81-8.62-8.56-19.83.25-11.21 8.59-19.56l199.31-201.11q19.44-19.77 48.09-19.77 28.64 0 48.61 19.77l100.36 101.04q3.46 3.46 8.46 3.46 5 0 8.84-3.46l216.07-213h-91.35q-11.65 0-19.86-8.12-8.22-8.11-8.22-19.77 0-11.65 8.22-19.86 8.21-8.21 19.86-8.21h151.42q14.13 0 24.09 9.94 9.95 9.94 9.95 24.29v151.42q0 11.65-8.25 19.77-8.26 8.11-19.73 8.11t-19.72-7.92q-8.26-7.92-8.26-19.58v-91.15L581.27-373.81q-19.49 19.58-48.2 19.58-28.72 0-48.11-19.58L384.54-474.04q-3.46-3.46-8.85-3.46-5.38 0-8.84 3.46L167.77-275.27q-8.69 8.5-19.96 8.5-11.27 0-19.77-8.19Z" />
                                    </svg>
                                </div>
                                <div className="menuText">
                                    Trending
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="menuItems">
                        <div className="menuItem">
                            <a href="./contact-us.html">
                                <div className="menuIcon">
                                    <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px"
                                        fill="#000">
                                        <path
                                            d="M480-108.08q-77.18 0-145.07-29.32-67.88-29.33-118.09-79.6-50.22-50.27-79.49-118.05-29.27-67.79-29.27-144.86 0-77.15 29.32-145.06 29.33-67.92 79.6-118.16 50.27-50.23 118.05-79.51 67.79-29.28 144.86-29.28 77.15 0 145.06 29.33 67.92 29.33 118.16 79.61 50.23 50.28 79.51 118.11 29.28 67.82 29.28 144.94v47.05q0 53.11-36.83 90.17-36.83 37.05-89.94 37.05-35.07 0-64.5-17.46-29.42-17.46-46.46-47.46-24.81 30.62-59.9 47.77-35.1 17.15-74.15 17.15-72.95 0-123.72-50.76-50.76-50.77-50.76-123.58t50.76-123.58q50.77-50.76 123.58-50.76t123.58 50.76q50.76 50.77 50.76 123.5v47.23q0 29.46 20.72 50.35 20.71 20.88 50.09 20.88 29.38 0 50.1-20.88 20.71-20.89 20.71-50.35V-480q0-131.9-92.02-223.93-92.03-92.03-223.93-92.03-131.89 0-223.93 92.02-92.04 92.03-92.04 223.93 0 131.89 92.03 223.93Q348.1-164.04 480-164.04h169.69q11.42 0 19.65 8.24 8.24 8.24 8.24 19.66 0 11.64-8.24 19.85-8.23 8.21-19.65 8.21H480Zm-.1-253.54q49.29 0 83.89-34.5 34.59-34.5 34.59-83.78 0-49.29-34.5-83.89-34.5-34.59-83.78-34.59-49.29 0-83.89 34.5-34.59 34.5-34.59 83.78 0 49.29 34.5 83.89 34.5 34.59 83.78 34.59Z" />
                                    </svg>
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
